const Personnel = require('../../models/personnelModel');

exports.createPersonnel = async (personnelData, picture) => {
    try {
        const { firstname, lastname, email, gender, phone } = personnelData;
        let pictureUrl;
        if(picture && picture.name) {
            const pictureName = picture.name;
            pictureUrl = '/public/images/' + pictureName;
            const uploadPath = __dirname + '/../../../public/images/' + pictureName;

            await picture.mv(uploadPath);
        }

        const personnel = new Personnel({
            firstname,
            lastname,
            email,
            gender,
            phone,
            picture: pictureUrl || '',
        });

        await personnel.save();
        return personnel;
    } catch (error) {
        throw error;
    }
};


