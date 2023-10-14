const router = require('express').Router



router.use('/', (req, res) => {
  res.send({ message: "VTB Банк - главная страница" })
})
router.use('/branch', (req, res) => {
  res.send({ message: "отделения" })
})

router.use('*', (req, res, next) => {
  res.send({ message: "Страница не найдена" })
});
