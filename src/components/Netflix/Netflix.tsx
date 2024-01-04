import { Box } from '@mui/material'
import React from 'react'
import Section from '../Section/Section'
import HomePage from '../Home-Page/HomePage'


const Netflix: React.FunctionComponent = () => {


    return (
        <Box component={'div'} >
            <Section key={1}> <HomePage/> </Section>
        </Box>
    )
}


export default Netflix