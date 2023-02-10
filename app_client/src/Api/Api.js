class Api {
    urlApi = 'http://localhost:3005';
    async getEmployees() {
        const res = await fetch(`${this.urlApi}/api/personnel?perPage=15`, {
            method: 'GET',
        });
        const employees = await res.json()
        return this.formatEmployeesData(employees);
    }

    async addEmployee(formData) {
        console.log('Add Employee: ', formData)
        const form = new FormData();

        form.append('firstname', formData.firstname);
        form.append('lastname', formData.lastname);
        form.append('email', formData.email);
        form.append('gender', formData.gender);
        form.append('phone', formData.phone);
        form.append('picture', formData.picture);

        const res = await fetch(`${this.urlApi}/api/personnel`, {
            method: 'POST',
            body: form
        });
        return await res.json();
    }

    async deleteEmployee(idEmployee) {
        console.log('Delete Employee ID', idEmployee)
        const res = await fetch(`${this.urlApi}/api/personnel/${idEmployee}`, {
            method: 'DELETE'
        });
        return await res.json();
    }

    async sendMessage(data) {
        console.log('Send message: ', data)
        const res = await fetch(`${this.urlApi}/api/contact` ,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    }

    formatEmployeesData(data) {
        return data.map(d => ({
            id: d._id,
            firstname: d.firstname,
            lastname: d.lastname,
            email: d.email,
            gender: d.gender,
            phone: d.phone,
            picture: `${this.urlApi}${d.picture}` || ''
        }))
    }
}

const api = new Api()
export default api;
