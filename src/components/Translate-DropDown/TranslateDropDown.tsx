import { Box, MenuItem, Select } from '@mui/material'
import { MdLanguage } from "react-icons/md";
import { changeLanguage } from '../../translate-i18n';
import React from 'react'
import { useTranslation } from 'react-i18next';

const TranslateDropDown: React.FunctionComponent = () => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';


  return (
    <Box component={'div'} id='translate_container'>
                        <Select
                            className='rightToLeftAnimation'
                            value={currentLanguage}
                            onChange={(e) => changeLanguage(e.target.value as string)}
                            style={{ backgroundColor: 'rgba(0,0,0,.75)', color: 'rgb(110, 110, 110)' }}
                            renderValue={(lang) => (
                                <>
                                    <Box
                                        className='rightToLeftAnimation'
                                        component={'div'}
                                        display={'flex'}
                                        alignItems={'center'}
                                    >
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
                                    className:'rightToLeftAnimation',
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
  )
}

export default TranslateDropDown