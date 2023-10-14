const router = require('express').Router();
const branchController = require('../controllers/branches');
const atmController = require('../controllers/atms');


// Получение списка отделений
router.get('/', (req, res) => {
  return res.send({ message: 'home page' })
});
// Получение списка отделений
router.get('/branches', branchController.getBranches);

// Добавление нового отделения
router.get('/atms', atmController.getATMs);

// Обновление информации об отделении
router.patch('/branches/:id', branchController.getBranch);
router.patch('/atms/:id', atmController.getATM);

// несуществующая страница
router.use('*', (req, res, next) => {
  res.send({ message: "Страница не найдена" })
});

module.exports = router;
