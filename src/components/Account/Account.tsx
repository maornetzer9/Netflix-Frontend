import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import ImageModel from '../ImageModel/ImageModel'
import TranslateDropDown from '../Translate-DropDown/TranslateDropDown';
import '../../animations.css'

interface AccountProfileProps {image?: string, profileName?: string; className?: string} 

const Account: React.FunctionComponent<AccountProfileProps> = ( {image, profileName, className} ) => {
    return (
        <Box
            id='account_container'
            component={'div'}
        >
            <Box
                id='account_content'
                component={'div'}
            >
                <TranslateDropDown/>
                <Box component={'div'} className='profile_container'>
                    <Button variant='text' >
                        <ImageModel preview={false} url={image} styles={{ backgroundColor: 'gray', borderRadius:'25px'}}  id='accounts' className='rightToLeftAnimation'/>
                    </Button>
                    <Typography variant="h5" style={{ color: 'white' }}> {profileName} </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Account