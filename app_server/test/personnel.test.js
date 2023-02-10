const { v4: uuidv4 } = require('uuid');
const { createPersonnel } = require('../src/useCases/personnel/createPersonnelUseCase');
const app = require('./app-test');

describe('Test add employee functionality', () => {
  it('Adds an employee with correct data', async () => {
    const employeeData = {
      firstname: 'John',
      lastname: 'Doe',
      email: `${uuidv4()}@example.com`,
      gender: 'Male',
      phone: '+1234567890',
    };

    const response = await createPersonnel(employeeData);
    expect(response.firstname).toBe(employeeData.firstname);
    expect(response.lastname).toBe(employeeData.lastname);
    expect(response.email).toBe(employeeData.email);
    expect(response.gender).toBe(employeeData.gender);
    expect(response.phone).toBe(employeeData.phone);
  });
});
