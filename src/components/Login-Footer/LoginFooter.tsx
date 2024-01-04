import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { footerLinks } from '../../data/links';
import './loginFooter.css'
import '../../animations.css';

const LoginFooter: React.FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <Box
            id='footer_background'
            component={'div'}
        >
            <Grid container spacing={4} className='footer_container'>
                {footerLinks.map((footer, index) => {
                    return (
                        <Grid xs={12} sm={6} md={4} lg={2.5} key={index}>
                            <Link
                                id='link_style'
                                className='element'
                                draggable={false}
                                to={footer.link}> {t(footer.text)}
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}


export default LoginFooter