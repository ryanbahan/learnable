import Head from 'next/head';
import styled from 'styled-components'
import { useAuth0 } from "../src/react-auth0-spa";

export default function Home() {
    const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <>
            <Head>
                <title>Learnable</title>
            </Head>
            <Main>
                <Title>The learning management tool for developers.</Title>
                <SubTitle>Keep your goals clear, and actualize every step of your progress.</SubTitle>
                <div>
                    <Button onClick={() => loginWithRedirect()}>Sign up</Button>
                    <Button onClick={() => loginWithRedirect()}>Sign in</Button>
                </div>
            </Main>
        </> 
    );
}

const Main = styled.main`
    background: #f9f9f9;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Button = styled.button`
    background: #9B59B6;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: .5rem 1rem;
    margin: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
`

const Title = styled.h2`
    font-weight: 500;
    margin: 1rem 0;
`

const SubTitle = styled.h3`
    font-weight: 500;
`