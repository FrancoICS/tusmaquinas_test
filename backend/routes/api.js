const router = require('express').Router();
const DuenosController = require('../controllers/DuenosController');
const AnimalesController = require('../controllers/AnimalesController');


router.get("/lista_responsables", AnimalesController.listar);
router.get("/lista_mascotas", AnimalesController.listar_mascotas);


router.post("/crear_dueno", DuenosController.crear);
router.post("/actualizar_dueno", DuenosController.actualizar);
router.get("/eliminar_dueno", DuenosController.eliminar);





module.exports = router;