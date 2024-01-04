import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import Account from '../Account/Account'
import Transition from '../Transition/Transition'
import Family from '../../assets/images/Family-Background.png'
import Kids from '../../assets/images/Kids-Background.png'
import User from '../../assets/images/User-Background.png'
import AddUser from '../../assets/images/Add-User-Background.png'
import { useTranslation } from 'react-i18next'
import './accounts.css'

const Accounts: React.FunctionComponent = () => {

    const { t } = useTranslation();

    return (
        <Transition timeOut={600}>
            <Box
                component={'div'}
                id='accounts_container'
            >
                <Typography variant='h2' color={'white'} className='accounts_header'> {t('Who Watches Netflix?')} </Typography>

                <Box
                    component={'div'}
                    id='accounts_content'
                >
                    <Account className='accounts' image={AddUser} profileName={t('Add a profile')} />
                    <Account className='accounts' image={Kids}    profileName={t('Kids')} />
                    <Account className='accounts' image={Family}  profileName={t('Family')} />
                    <Account className='accounts' image={User}    profileName={t('Maor')} />
                </Box>

                <Button variant='outlined' color='inherit' id='manage_profile_btn' size='large' className='element'>{t('Manage Profile')}</Button>
            </Box>
        </Transition>
    )
}



export default Accounts