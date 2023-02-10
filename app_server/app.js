const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const connectAssets = require('connect-assets');
const personnelRoute = require('./src/routes/personnelRoute');
const contactRoute = require('./src/routes/contactRoute');

dotenv.config();

const app = express();

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, // Limite la taille des fichiers à 50 Mo
  safeFileNames: true, // Enlève les caractères spéciaux des noms de fichier
  preserveExtension: true, // Préserve l'extension du fichier original
}));
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

app.use(cors({
  credentials: true,
  origin: ((origin, callback) => {
    callback(null, true);
  }),
}));

app.use(express.json());

app.use((req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`);
  if (req.body && Object.keys(req.body).length) {
    console.info(`Payload: ${JSON.stringify(req.body)}`);
  }
  next();
});

app.use(connectAssets({
  paths: [
    'public/images',
  ],
}));

app.use('/public/images', express.static(`${__dirname}/public/images`));

app.get('/', (req, res) => {
  res.json({ message: 'Hello Api' });
});

app.use('/api/personnel', personnelRoute);
app.use('/api/contact', contactRoute);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send({ error: err.message });
});

app.listen(3005, () => {
  console.log('Server started');
});
