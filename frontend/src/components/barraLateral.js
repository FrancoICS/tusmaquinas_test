import ModalCrear from './formularioCrear';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';



export default function BarraLateral() {

  /*Usestate que maneja el Drawer*/
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [showModalCrear, setshowModalCrear] = useState(null)
  const [tituloModal, setTituloModal] = useState(""); 




 


  /*Este es el manejador que se dispara cuando se hace click en la opcion "x"*/
  const toggleDrawer = (ubicacion, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [ubicacion]: open });
  };




/*Funcion que lista las opciones con sus iconos correspondientes cuando se despliega el Drawer*/
const opciones = [
  {"titulo" : "Agregar dueño", "icono": "CreateIcon"},
  {"titulo" : "Modificar dueño", "icono": "AutoFixNormalIcon"},
  {"titulo" : "Eliminar dueño", "icono": "DeleteIcon"},
  {"titulo" : "Cerrar", "icono": "CloseIcon"},
  ]
 const lista_opciones = (ubicacion) => (
    <Box
      sx={{ width: ubicacion === 'top' || ubicacion === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(ubicacion, false)}
      onKeyDown={toggleDrawer(ubicacion, false)}
    >
        <List>
          {opciones.map((value, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={ () => handleModal (value.titulo)}>
                    <ListItemIcon>
                         {
                          value.icono  ===  "CreateIcon" ?  <CreateIcon/> : 
                          value.icono  === "AutoFixNormalIcon" ? <AutoFixNormalIcon/> :  
                          value.icono  === "DeleteIcon" ? <DeleteIcon/> : 
                          value.icono  === "CloseIcon" ?  <CloseIcon/> :
                          null 
                        }
                    </ListItemIcon>
                  <ListItemText primary={value.titulo} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </Box>
  );
/*FIN funcion lista_opciones*/



















   
const handleModal = (accion) => {

  if (accion === "Agregar dueño"){
      setTituloModal("Agregar dueño")
      setShowModal(true) //muestra el modal
      setshowModalCrear(true) //muestra formulario de crear

  }
  else if (accion === "Modificar dueño"){

  }
  else  if (accion === "Eliminar dueño"){

  }
  else  if (accion === "Cerrar"){

  }

}


const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



              


  return (
  <>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={ () => { setShowModal(false)} }
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showModal}>
          <Box sx={style_modal}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {tituloModal}
            </Typography>
            {showModalCrear ? <ModalCrear/> : null}      
            <Button variant="outlined" color="error" onClick={ () => { setShowModal(false)} }>Cerrar</Button>
          </Box>
        </Fade>
      </Modal>
          <br></br>
          <Button variant="contained" onClick={toggleDrawer("left", true)}>Gestion de personas</Button>
          <br></br><br></br>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)} >
              { lista_opciones("left") }
          </Drawer>
    </div>
    </>
  );
}