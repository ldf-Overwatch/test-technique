const Personnel = require('../../models/personnelModel');


exports.listPersonnel = async ({ perPage = 10, page = 1 }) => {
    try {
        const personnel = await Personnel.find()
            .skip((page - 1) * perPage)
            .limit(perPage);

        return personnel;
    } catch (error) {
        throw error;
    }
};

