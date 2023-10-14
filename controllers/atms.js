const Atm = require('../models/Atm');
const fs = require('fs');

// // Получение списка банковских автоматов
// const getATMs = async (req, res) => {
//   try {
//     const atms = await Atm.find();
//     res.json(atms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const getATMs = (req, res) => {
  try {
    const data = fs.readFileSync('./db/atms.json', 'utf8');
    const branches = JSON.parse(data);
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getATM = (req, res) => {
  try {
    const data = fs.readFileSync('./db/atms.json', 'utf8');
    const branches = JSON.parse(data);

    const branchId = req.params.id;
    const branch = branches.find(branch => branch._id.$oid === branchId);

    if (!branch) {
      return res.status(404).json({ message: 'Терминал не найден' });
    }

    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message, params: req.params });
  }
};


module.exports = {
  getATMs,
  getATM,
};
