import {
    Button,
    ButtonWrapper,
    OuterWrapper,
    CancelButton,
    Modal,
} from './styles'
import Input from '../Input/Input'
import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { useFetch } from '../../hooks/useFetch';
import { useRouter } from 'next/router'


const AddCollection = ({ toggleModal }) => {
    const [ title, setTitle ] = useState("")
    const [session, loading] = useSession()
    const router = useRouter()
    const { isLoading, error, sendRequest, clearError } = useFetch();
    const base = process.env.baseAPIURL[process.env.type]

    const handleSubmit = () => {
        postCollection()
    }

    const postCollection = async () => {
        try {
            const responseData = await sendRequest(
                `${base}/collections/${session.user.id}`,
                'POST',
                JSON.stringify({ title }),
                { 'Content-Type': 'application/json' }
            );

            if (responseData) {
                console.log(responseData)
                router.push(`/app/collections/${responseData.id}`)
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <OuterWrapper onClick={() => toggleModal(false)}>
                <Modal onClick={(e) => {e.stopPropagation()}}>
                    <Input 
                        label="Collections Title"
                        onChangeHandler={(e) => setTitle(e.target.value)}
                        placeholder="what should we call this?"
                        type="text"
                        value={ title }
                    />
                    <ButtonWrapper>
                        <Button onClick={() => handleSubmit()}>Create Collection</Button>
                        <CancelButton onClick={() => toggleModal(false)}>Cancel</CancelButton>
                    </ButtonWrapper>
                </Modal>
            </OuterWrapper>
        </>
    )
}

export default AddCollection