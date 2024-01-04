import React, { useState } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import ImageModel from '../ImageModel/ImageModel'
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchIcon from '@mui/icons-material/Search';
import './style.css'

interface IImageHover { url: string; styles?: React.CSSProperties; isHovered?: boolean; }

const ImageHover: React.FunctionComponent<IImageHover> = ({ url, styles, isHovered = false }) => {

    const [like, setLike] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const handleLike = () => setLike(true);
    const handleUnLike = () => setLike(false);

    const hoverState = isHovered || isHover;

    return (
        <Box
            draggable={false}
            component={'div'}
            display={'flex'}
            justifyContent={'center'}
            style={{userSelect:'none'}}
        >
            <Box

                component={'div'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    height: '350px',
                    width: ' 300px',
                }}
            >
                <ImageModel url={url} preview={false} />

                {isHover && (
                    <Box
                        component={'div'}
                        className={hoverState ? 'image_hover' : ''}
                        display={'flex'}
                        justifyContent={'space-between'}
                    >
                        <Box
                            component={'div'}
                            gap={1}
                            width={'10%'}
                            marginLeft={1}
                            color={'white'}
                            display={'flex'}
                            alignItems={'center'}
                            position={'relative'}
                            justifyContent={'flex-start'}
                            onClick={() => { like ? handleUnLike() : handleLike() }}
                        >
                            {/* <FavoriteBorderIcon sx={{ '&:hover': { color: '#FF6F61', transition: '0.7s' }, color: like ? 'red' : 'white' }} /> */}
                        </Box>

                        <Box
                            component={'div'}
                            display={'flex'}
                            position={'absolute'}
                            justifyContent={'center'}
                            left={'15%'}

                        >

                            <ImageModel
                                url={url}
                                preview={true}
                                showIconPreview={false}
                                styles={{ width: '50px', height: '50px'}}
                            />

                        </Box>
                        <Box
                            position={'absolute'}
                            color={'white'}
                            left={'20%'}
                        >
                            {/* <SearchIcon /> */}
                        </Box>
                        <Typography
                            sx={{ '&:hover': { color: '#FF6F61', transition: '0.7s' } }}
                            variant='body2'
                            width={'fit-content'}
                            display={'flex'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            fontWeight={'bold'}
                            color={'white'}
                            gap={0.5}
                            marginRight={1}
                            fontSize={14}
                        >
                            {/* <ShoppingBagIcon sx={{ fontSize: '16px' }} /> {'Shop Now'} */}
                        </Typography>

                    </Box>)}
            </Box>
        </Box>
    )
}

export default ImageHover
