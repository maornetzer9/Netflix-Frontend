import { Box, SxProps } from '@mui/material'
import React from 'react'

interface SectionProps { id?: string; sx?: SxProps; className?: string }

const Section: React.FunctionComponent<React.PropsWithChildren<SectionProps>> = ({ id, children, className, sx }) => {
    return (
            <Box
                id={id}
                sx={sx}
                component={'div'}
                height={'fit-content'}
                width={'fit-content'}
                className={className}
            >
                {children}
            </Box>
    )
}


export default Section