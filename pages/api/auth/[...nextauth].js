import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.baseURL[process.env.type] || 'http://localhost:8080',

    providers: [
        Providers.Email({
            server: "smtp://apikey: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@smtp.sendgrid.net:587",
            from: "ryan@ryanbahan.com"
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    session: {
        jwt: true,
    },

    database: {
        type: "postgres",
        host: "learnable-db.ctshxwkv0wyi.us-east-1.rds.amazonaws.com",
        port: 5432,
        username: "learnable",
        password: "tq&KCU%5&YFh",
        database: "postgres",
        synchronize: true,
    },

    callbacks: {
        async session(session, token) {
            return Promise.resolve({ ...session, user: { ...session.user, id: token.user.id } })
        }
    },

    debug: true,
}

export default (req, res) => NextAuth(req, res, options)