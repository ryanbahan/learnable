import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.baseURL[process.env.type] || 'http://localhost:8080',
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
}

console.log('url', process.env.VERCEL_URL)

export default (req, res) => NextAuth(req, res, options)