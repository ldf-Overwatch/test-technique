const mongoose = require('mongoose');

let mongooseConnection;

beforeAll(async () => {
  mongooseConnection = await mongoose.connect('mongodb://mongo:27017/personnel-unit-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongooseConnection.disconnect();
});
