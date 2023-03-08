/*
    Importacion principal del sistema
        1- Se ocupa REDUX para gestionar los estados de los componentes. 
        2- En este caso del listado de mascotas.
        3- Se ocupan componentes de MUI para generar los estilos el proyecto
*/
import React, {useEffect, useState} from 'react'
import {getFiles} from '../store/slices/Reducer'
import {useDispatch, useSelector} from 'react-redux'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
/*-----------------------------------------------------FIN IMPORTACIONES---------------------------------------------------------*/





function Tabla () {

    /*Redux*/
    const dispatch = useDispatch()
    const {data: filesData} = useSelector(state => state.files)

    /*Usestate*/
    const [inputBuscar, setInputBuscar] = useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    /*UseEffect */
    useEffect(() => {
        dispatch(getFiles())
    }, [dispatch])


   /* Creacion de columnas para el Datatable */
    const columnas = [
        { id: 'nombre', label: 'Nombre', minWidth: 50 },
        { id: 'raza', label: 'Raza', minWidth: 50 },
        { id: 'familia', label: 'Familia', minWidth: 50 },
        { id: 'responsable', label: 'Responsable', minWidth: 50 },
        { id: 'correo', label: 'Correo', minWidth: 50 },
    ];



     /*Se crean las filas que luego cargara el Datatable de MUI*/
    function createData(filesData) {    
       const res = filesData.map((val) => {
                   return val
        })
        return res;
      }
    const rows = createData(filesData); 
    /*FIN creacion de data para la tabla */




    /*Gestiond e paginado */
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    /* FIN Gestiond e paginado */




    /*Estilos de la tabla*/
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    /*FIN Estilos de la tabla*/



    return(
        <> 
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columnas.map((columna) => (
                        <StyledTableCell
                        key={columna.id}
                        align={columna.align}
                        style={{ minWidth: columna.minWidth }}
                        >
                        {columna.label}
                        </StyledTableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                        return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                            {columnas.map((columna, index) => {
                            const value = row[columna.id];
                            return (
                                <TableCell key={index} align={columna.align}>
                                {columna.format && typeof value === 'number'
                                    ? columna.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}
                        </StyledTableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
        </>
    )
}

export default Tabla

