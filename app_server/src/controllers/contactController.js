const { sendMessage } = require('../useCases/contact/contactUseCase');

exports.sendMessageController = async (req, res) => {
  try {
    const { message, subject, service } = req.body;
    const result = await sendMessage(message, subject, service);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
