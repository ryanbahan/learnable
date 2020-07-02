import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.baseURL[process.env.type] || 'http://localhost:8080',

    providers: [
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
        // GH disabled until email can be accessed
        // Providers.GitHub({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    session: {
        jwt: true,
    },

    database: {
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
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