const { createPersonnel } = require('../useCases/personnel/createPersonnelUseCase');
const { deletePersonnel } = require('../useCases/personnel/deletePersonnelUseCase');
const { listPersonnel } = require('../useCases/personnel/listPersonnelUseCase');

exports.createPersonnelController = async (req, res) => {
  try {
    const personnel = await createPersonnel(req.body, req.files.picture);
    return res.status(201).json(personnel);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.deletePersonnelController = async (req, res) => {
  try {
    const personnel = await deletePersonnel(req.params.id);
    return res.status(200).json(personnel);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.listPersonnelController = async (req, res) => {
  try {
    const personnel = await listPersonnel({
      perPage: req.query.perPage,
      page: req.query.page,
    });
    return res.status(200).json(personnel);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
