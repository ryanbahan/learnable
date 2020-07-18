import Head from 'next/head';
import styled from 'styled-components'
import { signin } from 'next-auth/client'

const testVar = "testVar"

export async function getServerSideProps(context, testVar) {
    return {
        props: {test: "test"}, // will be passed to the page component as props
    }
}

export default function Home() {

    return (
        <>
            <Head>
                <title>Learnable</title>
            </Head>
            <Main>
                <Title>The learning management tool for developers.</Title>
                <SubTitle>Keep your goals clear, and actualize every step of your progress.</SubTitle>
                <div>
                    <Button 
                        onClick={() => signin(null, { callbackUrl: process.env.baseURL[process.env.type] + "/app" })}
                    >
                        Get Started
                    </Button>
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
    background: #9b59b6;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: .75rem 1.5rem;
    margin: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.styles.boxShadow};

    &:hover {
        background: #8e44ad;     
    }
`

const Title = styled.h2`
    font-weight: 500;
    margin: 1rem 0;
`

const SubTitle = styled.h3`
    font-weight: 500;
`