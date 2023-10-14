const router = require('express').Router();
const branchController = require('../controllers/branches');
const atmController = require('../controllers/atms');


// Получение списка отделений
router.get('/', (req, res) => {
  return res.send({ message: 'home page' })
});
// Получение списка отделений
router.get('/branches', branchController.getBranches);
router.get('/atms', atmController.getATMs);

router.get('/branches/:id', branchController.getBranch);
router.get('/atms/:id', atmController.getATM);

// несуществующая страница
router.use('*', (req, res, next) => {
  res.send({ message: "Страница не найдена" })
});

module.exports = router;
