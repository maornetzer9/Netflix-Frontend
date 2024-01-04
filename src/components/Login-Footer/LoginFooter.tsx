import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';
import './loginFooter.css'
import '../../animations.css';

const LoginFooter: React.FunctionComponent = () => {

    const {t} = useTranslation();

    const footerLinks = [
        {link: '/', text: 'Questions? Contact us.'},
        {link: '/', text: 'FAQ'},
        {link: '/', text: 'Cookie Preferences'},
        {link: '/', text: 'Help Center'},
        {link: '/', text: 'Corporate information'},
        {link: '/', text: 'Terms of Use'},
        {link: '/', text: 'Privacy'},
    ]

    return (
        <Box
            id='footer_background'
            component={'div'}
        >
            <Grid container spacing={4} className='footer_container'>
                {footerLinks.map((footer, index) => { 
                    return (
                    <Grid item xs={ window.innerWidth <= 600 ? 7 : 2.5} key={index}>
                        <Link draggable={false} id='link_style' className='rightToLeftAnimation' to={footer.link}>{t(footer.text)}</Link>
                    </Grid>
                    )
                })}

            </Grid>


        </Box>
    )
}


export default LoginFooter