import React, { useState } from 'react'
import { Box, Button, MenuItem, Select } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../translate-i18n';
import { MdLanguage } from "react-icons/md";
import Typography from '@mui/material/Typography'
import NetflixLogo from '../../assets/logos/Netflix-Logo.png';
import ImageModel from '../ImageModel/ImageModel';
import LoginFooter from '../Login-Footer/LoginFooter';
import LoginService from '../../requests/login';
import Transition from '../Transition/Transition';
import './login.css';
import "../../animations.css"

const Login: React.FunctionComponent = () => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language || 'en';
    const baseUrl = 'http://localhost:5050/user/login';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setEmail(value);
    const handlePassword = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setPassword(value);

    const handleSign = async () => {

        const response: any = await new LoginService(baseUrl).login(email, password);

        const { code, message, id } = response;

        if (code !== 200) return alert(message);

        localStorage.setItem('id', id)

        navigate('/Netflix');
    }

    return (
        <Transition timeOut={600}>
            <Box component={'div'} >
                <Box component={'div'} id='page_background'>
                    <Box component={'div'} id='netflix_logo'>

                        <ImageModel url={NetflixLogo} preview={false} />
                    </Box>
                    <Box component={'div'} id='translate_container'>
                        <Select
                            value={currentLanguage}
                            onChange={(e) => changeLanguage(e.target.value as string)}
                            style={{ backgroundColor: 'rgba(0,0,0,.75)', color: 'rgb(110, 110, 110)' }}
                            renderValue={(lang) => (
                                <>
                                    <Box component={'div'} display={'flex'} alignItems={'center'}>
                                        <MdLanguage
                                            size={'20px'}
                                            color='rgb(110, 110, 110)'
                                            style={{ marginRight: '10px' }}
                                        />
                                        {lang === 'en' ? 'English' : 'עברית'}
                                    </Box>
                                </>
                            )}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(0,0,0,.75)',
                                        color: 'rgb(110, 110, 110)',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="en" onClick={() => changeLanguage('en')}> English </MenuItem>
                            <MenuItem value="he" onClick={() => changeLanguage('he')}>  עברית  </MenuItem>
                        </Select>
                    </Box>
                    <Transition timeOut={650}>
                        <Box
                            id='login_body'
                            component={'div'}
                            dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
                        >
                            <Box component={'div'} id='login_body_content'>
                                <Typography variant='h4' color={'white'} className='header'>  {t('Sign In')} </Typography>
                                <input
                                    type="email"
                                    className='elements_form'
                                    placeholder={t(' Email or phone number.')}
                                    onChange={handleEmail}
                                />
                                <input
                                    type="password"
                                    className='elements_form'
                                    placeholder={t(' Password.')}
                                    onChange={handlePassword}
                                />
                                <Box
                                    id='sign_in_btn_container'
                                    component={'div'}
                                >
                                    <Button
                                        color='error'
                                        variant='contained'
                                        className='elements_form'
                                        style={{ marginTop: '20px' }}
                                        onClick={handleSign}
                                    >
                                        {t('Sign In')}
                                    </Button>
                                    <Box
                                        className='checkbox_container'
                                        component={'div'}
                                    >
                                        <input type="checkbox" />
                                        <label>{t('Remember me')}</label>
                                        <Link className='link_style'
                                            to={'/'}
                                            style={{
                                                marginLeft: currentLanguage === 'en' ? '115px' : '',
                                                marginRight: currentLanguage === 'he' ? '146px' : '',
                                                color: 'gray'
                                            }}
                                        >
                                            {t('Need help?')}
                                        </Link>
                                    </Box>
                                </Box>
                                <Box
                                    id='user_content_container'
                                    component={'div'}
                                >
                                    <Box
                                        id='user_explanation'
                                        component={'div'}
                                    >
                                        <ImageModel className='moving-element' url={NetflixLogo} preview={false}/>
                                        <Typography
                                            variant='body1'
                                        >
                                            {t('New to Netflix - ')}
                                            <Link
                                                to={'/'}
                                                className='link_style'
                                                style={{ color: 'white', textDecoration: 'line-through' }}
                                            >
                                                {t('Sign up')}
                                            </Link>
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                        >
                                            {t('there is no need to register any more, just enter an email or cell phone number and connect ')}
                                            <Link className='link_style' to={'/'} style={{ color: '#0071eb' }}>{t('Learn more.')}</Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Transition>
                </Box>
                <LoginFooter />
            </Box>
        </Transition>
    )
}
export default Login