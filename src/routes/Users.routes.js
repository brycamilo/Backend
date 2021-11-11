const {Router}=require('express')
const router = Router ()
const UsersCtrl =require('../controllers/Users.controller')

router.post('/crear',UsersCtrl.crear)
router.get('/listar',UsersCtrl.listar)
router.get('/listar/:id',UsersCtrl.listarid)
router.get


module.exports = router