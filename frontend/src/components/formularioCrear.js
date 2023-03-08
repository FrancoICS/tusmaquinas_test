import React, {useState, useReducer, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles} from '../store/slices/Reducer'


/* GESTION DEL FORMULARIO CREAR */
type FormState = {
  nombre: string,
  correo: string,
  telefono: string,
  mascota: string,
}
type FormAction = {
  type: string,
  payLoad: string
}
const initialState: FormState = {
  nombre: "",
  correo: "",
  telefono: "",
  mascota: "",
}
type FormValidityState = {
  nombreError: boolean,
  correoError: boolean,
  telefonoError: boolean,
  mascotaError: boolean,
}
const initialValidityState: FormValidityState = {
  nombreError: false,
  correoError: false,
  telefonoError: false,
  mascotaError: false
}
type FormValidityAction = {
  type: string,
  payLoad: FormState
}

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch(action.type){
      case "UPDATE_NOMBRE": return{
          ...state, nombre: action.payLoad, 
      }
      case "UPDATE_CORREO": return{
          ...state,correo: action.payLoad, 
      }
      case "UPDATE_TELEFONO": return{
          ...state, telefono: action.payLoad, 
      }
      case "UPDATE_MASCOTA": return{
        ...state, mascota: action.payLoad, 
    }
      default:
          return state
  }
}

const formValidityReducer = (state: FormValidityState, action: FormValidityAction): FormValidityState => {
  switch(action.type){
      case "VALIDATE_NOMBRE": return{
          ...state,
          ...({nombreError: action.payLoad.nombre.length > 0 ? false: true})
      }
      case "VALIDATE_CORREO": return{
          ...state,
          ...({correoError: action.payLoad.correo.length > 0 ? false: true})
      }
      case "VALIDATE_TELEFONO": return{
          ...state,
          ...({telefonoError: action.payLoad.telefono.length > 0 ? false: true})
      }
      case "VALIDATE_MASCOTA": return{
        ...state,
        ...({mascotaError: action.payLoad.mascota.length > 0 ? false: true})
    }
  default:
      return state
  }
}    
/* FIN GESTION DEL FORMULARIO CREAR */







export default function ModalCrear() {


  /*USESTATE */
  const [mascotas, setMascotas] = useState(null); 
  const [inputSelect, setInputSelect] = useState(''); 

  /*REDUX*/
  const {data: filesData} = useSelector(state => state.files)
  const dispatch = useDispatch()

  /*REDUCER*/ 
  const [formData, setFormData] = useReducer(formReducer, initialState)
  const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, initialValidityState)


  /*USEEFFECT*/
  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    const { data } = await axios.get(`http://127.0.0.1:3001/api/lista_mascotas`);
    setMascotas(data);
  };






  /* SUBMIT */
  const onButtonPress = (event: React.FormEvent) => {
      event.preventDefault()

 
      if (formValidityData.nombreError === false){
        alert("ERRO CON EL CAMPO NOMBRE")
      }
      if (formValidityData.correoError === false){
        alert("ERRO CON EL CAMPO CORREO")
      }
      if (formValidityData.telefonoError === false){
        alert("ERRO CON EL CAMPO TELEFONO")
      }
      if (formValidityData.mascotaError === false){
        alert("ERRO CON EL CAMPO MASCOTA")
      }
      const data =  formData
      //ENVIO DEL DORMULARIO VIA AXIOS
      axios.post('http://localhost:3001/api/crear_dueno', data)
      .then(function (response) {
        if(response.status === 200) {
            alert("Agregado con Exito")
            dispatch(getFiles())
        }
        console.log(response);
      })
      .catch(function (error) {
        alert("ERROR, Faltan datos o estan mal digitados")
        console.log(error);
      });
   }



    const handleSelect = (event) => {
      setInputSelect(event.target.value)
    }






    return (
      <>
      <form onSubmit={onButtonPress}>
        <br></br><br></br>
        <FormControl>
            <InputLabel htmlFor="persona_nombre">Nombre</InputLabel>
            <Input id="persona_nombre" 
                   aria-describedby="helper_nombre" 
                   onChange={(e) =>setFormData({type:"UPDATE_NOMBRE", payLoad:e.target.value})}
                   onBlur={(e) => setFormValidityData({type: "VALIDATE_NOMBRE", payLoad: formData})} 
            />
            <FormHelperText id="helper_nombre">Tu nombre completo</FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl>
            <InputLabel htmlFor="persona_correo">Correo</InputLabel>
            <Input id="persona_correo" 
                   aria-describedby="helper_correo" 
                   //onChange={handleInput}
                   onChange={(e) =>setFormData({type:"UPDATE_CORREO", payLoad:e.target.value})}
                   onBlur={(e) => setFormValidityData({type: "VALIDATE_CORREO", payLoad: formData})}
            />
            <FormHelperText id="helper_correo">Acá nos contactaremos contigo</FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl>
            <InputLabel htmlFor="persona_telefono">Telefono</InputLabel>
            <Input id="persona_telefono" 
                   aria-describedby="helper_telefono" 
                   //onChange={handleInput}
                   onChange={(e) =>setFormData({type:"UPDATE_TELEFONO", payLoad:e.target.value})}
                   onBlur={(e) => setFormValidityData({type: "VALIDATE_TELEFONO", payLoad: formData})}
            />
            <FormHelperText id="helper_telefono">Asegurate de que tu número este bien escrito</FormHelperText>
        </FormControl>
        <br></br><br></br>
        <FormControl>
            <InputLabel id="persona_mascota">Mascota</InputLabel>
            <Select
              labelId="persona_mascota"
              id="select_mascosa"
              value={inputSelect}
              label="persona_mascota"
              aria-describedby="helper_mascota"
              onChange={(e) => {
                setFormData({type:"UPDATE_MASCOTA", payLoad:e.target.value})
                handleSelect(e)
              }}
              onBlur={(e) => setFormValidityData({type: "VALIDATE_MASCOTA", payLoad: formData})}
            >
              {mascotas ? 
              mascotas.map((value, index) => (
                <MenuItem key={index} value={value.id}>{value.nombre}</MenuItem>
              ))
              : null }
            </Select>
            <FormHelperText id="helper_mascota">Selecciona tu mascota</FormHelperText>
        </FormControl>
        <br></br>
        <FormControl>
          <Button disabled={formValidityData.firstNameError===true || formValidityData.lastNameError===true || formValidityData.ageError===true} variant="outlined" type="submit">Agregar</Button>
        </FormControl>
 
        </form>
     </>
      )
  }

