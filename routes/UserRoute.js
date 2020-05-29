const router = require('express').Router()
const AddController = require('../controllers/AddContact')
router.get('/',AddController.dashboard)
router.get('/contact',AddController.viewList)
router.get('/contact/addcontact', AddController.addcontactForm)
router.post('/contact/addcontact',AddController.addcontact)
router.get('/contact/:id/delete', AddController.deletecontact) 
router.post('/contact/:id/edit',AddController.editcontact) 
module.exports = router