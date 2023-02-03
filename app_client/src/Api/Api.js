class Api {
    async getEmployees() {
        const res = await fetch("https://randomuser.me/api/?results=15", {
            type: "GET",
        });
        const employees = await res.json()
        return this.formatEmployeesData(employees.results);
    }

    async addEmployee(formData) {
        console.log('Add Employee: ', formData)
    }

    async deleteEmployee(idEmployee) {
        console.log('Delete Employee ID', idEmployee)
    }

    async sendMessage(data) {
        console.log('Send message: ', data)
    }

    formatEmployeesData(data) {
        return data.map(d => ({
            id: d.login.uuid,
            firstname: d.name.first,
            lastname: d.name.last,
            email: d.email,
            gender: d.gender,
            phone: d.phone,
            picture: d.picture.large
        }))
    }
}

const api = new Api()
export default api;