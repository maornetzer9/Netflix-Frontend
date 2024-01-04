import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Section from '../Section/Section'
import Accounts from '../Accounts/Accounts'
import './netflix.css'
import Transition from '../Transition/Transition'

const Netflix: React.FunctionComponent = () => {

    const [userID, setUserID] = useState(''); 

    useEffect(() => {
        const userId: string | null| any = localStorage.getItem('id');

        return setUserID(userId)
    }, [])

    return (
        <Transition timeOut={300}>
            <Box
                id='background_page'
                component={'div'}
            >
                {userID !== null ? <Section key={1}>   <Accounts />  </Section>: null }
            </Box>
        </Transition>
    )
}


export default Netflix