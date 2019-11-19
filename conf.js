exports.email = {
    imap: {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT || 993,
        tls: true,
        authTimeout: process.env.EMAIL_TIMEOUT || 3000
    }
};

exports.timeTree = {
    token:process.env.TIMETREE_TOKEN
};