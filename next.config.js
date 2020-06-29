const env = process.env.NODE_ENV || 'development';

module.exports = {
    env: {
        type: process.env.NODE_ENV,
        url: process.env.VERCEL_URL,
        baseAPIURL: {
            dev: "http://localhost:3000",
            prod: "https://learnableservices.com",
        },
        baseURL: {
            dev: "http://localhost:8080",
            prod: "http://learnable-git-migrate-auth.ryanbahan.vercel.app",
        }
    },
}