const Personnel = require('../../models/personnelModel');

exports.deletePersonnel = async (id) => {
    try {
        const personnel = await Personnel.findByIdAndDelete(id);
        if (!personnel) {
            throw new Error('Personnel not found');
        }
        return personnel;
    } catch (error) {
        throw error;
    }
};
