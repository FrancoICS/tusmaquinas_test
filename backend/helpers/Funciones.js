const axios = require('axios')


const get_all_files = async (url) => {
    const data = await axios.get(url, {headers: {
        'Authorization': 'Bearer aSuperSecretKey'
    }})
    .then(response => {
        const data = JSON.stringify(response.data)
        return data
    }).catch((err) => {
        //console.log(err)
    });
    return data
} //cierre consumo api




const get_file = async (url) => {
    const data = await axios.get(url, {headers: {
        'Authorization': 'Bearer aSuperSecretKey'
    }})
    .then(response => {
        const data = JSON.stringify(response.data)
        return data
    }).catch((err) => {
        //console.log(err)
    });
    return data
} //cierre consumo api



const get_files_list = async () => {

    const data_files = await get_all_files('https://echo-serv.tbxnet.com/v1/secret/files').then(res => {return res})
    const files_array = JSON.parse(data_files).files

    const json_files = []
    for (let i = 0; i < files_array.length; i++) {
        const file = files_array[i]
        const res_file = await get_file(`https://echo-serv.tbxnet.com/v1/secret/file/${String(file)}`).then(res => {return res})
        if (res_file !== undefined){
            json_files.push(JSON.parse(res_file))    
            }
        }

    const data = (json_files)

    return data
} //cierre consumo api





const check_csv = (file) => {
    //Variables que se ocuparan en la funcion
    const split = String(file).split('\\n')
    const columnas_numero = 4
    const retorno = []

    //Se elimina la posicion 0, esta posicion devuelve las columnas
    split.shift()
    split.map(row => {

        //Por cada fila ejecutamos un split
        const row_split = row.split(',')

        //Con este filter eliminamos todo valor que sea: nulo, indefinido o vacio
        const res = row_split.filter(element => {
            return element !== null && element !== undefined && element !== '';
        })
        //Verificamos que la cantidad de elementos sea igual al numero de columnas (file, text, number, hex)
        if (res.length == columnas_numero){
           const json = {
                "file": res[0],
                "lines": [
                    {
                        "text" :res[1],
                        "number": parseInt(res[2].replace(/\D/g, '')),
                        "hex": res[3]
                    },
                        ]
                }
            return retorno.push(json)
        }
    })//Cierre map
   if (retorno.length > 0){
    return JSON.stringify(retorno)
   }
}





module.exports = { get_all_files, get_file,get_files_list, check_csv };