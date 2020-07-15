import React, { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export const CollectionContext = createContext();

const CollectionProvider = ({ collections, children }) => {
    const [state, setState] = useState( collections );
    const { isLoading, error, sendRequest, clearError } = useFetch();
    const [session, loading] = useSession()
    const router = useRouter()
    const base = process.env.baseAPIURL[process.env.type];

    const removeCollection = (id) => {
        setState(
            state.filter((c) => c.id !== id),
        );
    };

    const deleteCollection = async (id) => {

        removeCollection(id)

        try {
            const responseData = await sendRequest(
                `${base}/collections/${id}`,
                'DELETE',
                { 'Content-Type': 'application/json' }
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CollectionContext.Provider
            value={{
                state,  
                setState,
                deleteCollection,
            }}
        >
            { children }
        </CollectionContext.Provider>
    );
};

export default CollectionProvider;
