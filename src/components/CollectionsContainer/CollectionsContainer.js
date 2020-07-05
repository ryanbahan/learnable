import Collection from '../Collection/Collection'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { useFetch } from '../../hooks/useFetch'

const CollectionsContainer = () => {
    const [session, loading] = useSession()
    const { isLoading, error, sendRequest, clearError } = useFetch();
    const base = process.env.baseAPIURL[process.env.type]
    const [ collections, setCollections ] = useState([])
    
    useEffect(() => {
        if (session) {
            fetchCollections()
        } else {
            // console.log('test re-render')
        }
    }, [session]);

    const fetchCollections = async () => {
        try {

            const responseData = await sendRequest(
                `${base}/collections/${session.user.id}`
            );

            setCollections(responseData.data)

        } catch (error) {
            console.error(error);
        }
    };

    return <Div>
                {collections ? collections.map(c => <Collection key={c.id} {...c} />) : null}
            </Div>
}

const Div = styled.div`
margin: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export default CollectionsContainer