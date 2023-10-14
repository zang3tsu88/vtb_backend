const Branch = require('../models/Branch');
const fs = require('fs');

// Получение списка отделений
const getBranches = (req, res) => {
  try {
    const data = fs.readFileSync('./db/offices.json', 'utf8');
    const branches = JSON.parse(data);
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getBranches = async (req, res) => {
//   try {
//     const branches = await Branch.find();
//     res.json(branches);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getBranch = (req, res) => {
  try {
    const data = fs.readFileSync('./db/offices.json', 'utf8');
    const branches = JSON.parse(data);

    const branchId = req.params.id;
    const branch = branches.find(branch => branch.id === branchId);

    if (!branch) {
      return res.status(404).json({ message: 'Отделение не найдено' });
    }

    res.json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBranches,
  getBranch,
};
