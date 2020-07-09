import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const PrivateRoute = ({ Component, path }) => {
    const [session, loading] = useSession()

    if ( session ) {
        return <Component />
    } else {
        router.push( path )
    }
}