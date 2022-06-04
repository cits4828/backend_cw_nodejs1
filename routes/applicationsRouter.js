const Router = require('express') // получаем Router из express
const router = new Router // создаем объект роутера
const applicationsController = require('../controllers/applicationsController')
const authMiddleware = require('../middleware/authMiddleware') //импортируем authMiddleware

router.post('/', applicationsController.create) //для создания заявки
router.get('/', authMiddleware, applicationsController.getAll) //для получения заявки

module.exports = router // экспортируем роутер