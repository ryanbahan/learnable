const env = process.env.NODE_ENV || 'development';

module.exports = {
    env: {
        type: process.env.NODE_ENV,
        baseURL: {
            dev: "http://localhost:3000",
            prod: "http://learnablebe-env.eba-trycamvb.us-east-1.elasticbeanstalk.com",
        },
    },
}