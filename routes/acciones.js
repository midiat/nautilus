/**  
 *  Peticiones para realizar acciones dentro de la aplicación NautilusApp:

 *  Archivo de rutas para:
        - Las peticiones de envío de correos electrónicos.
        - Verificar la existencia de códigos.

 *  Rutas:
        Padre: '/api/info'
        Hijas: '/api/info/:action'
*/

// Importaciones:
const { Router } = require('express');
const { resetPwd_Email } = require('../controllers/email');
const { validarCodigo } = require('../controllers/codigos');

// Declaraciones
const router = Router();

// Ruta para enviar el correo de restablecimiento de contraseña:
router.post('/actionsNautilus/emailResetPwd', resetPwd_Email);

// Ruta para validar la existencia de un código para reestablecer una contraseña:
router.post('/actionsNautilus/verifyCode', validarCodigo)

// Exportaciones
module.exports = router;