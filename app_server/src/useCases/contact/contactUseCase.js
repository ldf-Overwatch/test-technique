const SibApiV3Sdk = require('sib-api-v3-sdk');

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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';

exports.sendMessage = async (message, subject, service) => {

    const result = await new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

        "templateId":1,
        "messageVersions":[
            {
                "to":[
                    {
                        "email":"laure366@gmail.com",
                        "name":"Laure"
                    }
                ],
                "params":{
                    "message": message,
                    "service": service,
                },
                "subject": subject
            }
        ]

    });

    return result;
};
