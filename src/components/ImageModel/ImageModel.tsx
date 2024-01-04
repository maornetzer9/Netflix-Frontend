import React, { useState, useEffect } from 'react'
import { Box, ImageListItem, Button } from '@mui/material'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { MdOutlinePreview } from "react-icons/md";
import { LuSearchSlash } from "react-icons/lu";
import "../../animations.css"

interface Props 
{
    url?: string;
    preview: boolean;
    styles?: React.CSSProperties;
    showIconPreview?: boolean;
    id?: string;
    className?: string;
};

const ImageModel: React.FunctionComponent<Props> = ({ url, preview = false, styles = {}, showIconPreview = true, id, className }) => {

    const [isPreview, setIsPreview] = useState(false);
    const [isHoverPreview, setIsHoverPreview] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [size, setSize] = useState(300);

    const handleTogglePreview = (event: React.MouseEvent<HTMLLIElement | HTMLDivElement>) => {
        event.stopPropagation()
        if (preview) {
            setIsPreview((isPreview) => !isPreview)
        }
    };

    const handleRightRotatePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setRotate((rotate) => rotate === 270 ? rotate : rotate += 90);
    }

    const handleLeftRotatePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setRotate((rotate) => rotate === 0 ? rotate : rotate -= 90);
    }

    const zoomIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSize((size) => size === 750 ? size : size += 150);
    }

    const zoomOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSize((size) => size === 150 ? size : size -= 150);
    }

    const setHoverPreviewEnter = () => {
        setIsHoverPreview(true)
    }
    const setHoverPreviewLeave = () => setIsHoverPreview(false)

    useEffect(() => {
        setSize(300)
        setRotate(0)
    }, [isPreview])

    return (
        <>
            <Box
                component={'div'}
                onMouseLeave={setHoverPreviewLeave}
                onMouseEnter={setHoverPreviewEnter}
                sx={{
                    width: '100%',
                    height: '100%',
                }}>

                <ImageListItem
                    style={{ height: '100%' }}
                    sx={{
                        cursor: preview ? 'pointer' : 'auto',
                        opacity: 1,
                    }}>
                    <img
                        id={id}
                        src={url}
                        className={className}
                        draggable={false}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            ...styles,
                        }} />
                </ImageListItem>

                {isHoverPreview && preview && (
                    <Box
                        component={'div'}
                        onClick={handleTogglePreview}
                        sx={{
                            cursor: 'pointer',
                            top: 0,
                            left: 0,
                            backgroundColor: '#444',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1,
                            opacity: 0.5,
                        }}>
                        <MdOutlinePreview display={showIconPreview ? 'block' : 'none'} fontSize={'50PX'} color='#fff' />
                    </Box>
                )}
            </Box>

            {isPreview && (
                <Box
                    component={'div'}
                    onClick={handleTogglePreview}
                    sx={{
                        position: 'fixed',
                        cursor: 'pointer',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        transition: '0.5s',
                    }}
                >
                    <Box component={'div'}
                        sx={{
                            backgroundColor: '#444',
                            opacity: 0.9,
                            width: window.innerWidth,
                            height: window.innerHeight,
                        }} />

                    <ImageListItem
                        className='fade-in'
                        onClick={handleTogglePreview}
                        sx={{
                            width: size + 'px',
                            height: 'auto',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            transition: '0.5s',
                            userSelect: 'none',
                            cursor: 'auto',
                            zIndex: 2,
                        }}>
                        <img src={url} alt="" />
                    </ImageListItem>
                    <Box
                        component={'div'}
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            padding: '30px',
                            width: '300px',
                            position: 'absolute',
                            top: '85%',
                            left: '50%',
                            transform: 'translate(-50%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            size='large'
                            onClick={zoomIn}
                            disabled={size === 750}
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: '29px',
                                borderRadius: '50%',
                            }}>
                            <LiaSearchPlusSolid />
                        </Button>
                        <Button
                            disabled={size === 150}
                            size='large'
                            onClick={zoomOut}
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: '24px',
                                borderRadius: '50%'
                            }}>
                            <LuSearchSlash />
                        </Button>
                        <Button
                            size='large'
                            disabled={rotate === 0}
                            onClick={handleLeftRotatePreview}
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: '20px',
                                borderRadius: '50%',
                            }}>
                            <FaArrowRotateLeft />
                        </Button>
                        <Button
                            disabled={rotate === 270}
                            size='large'
                            onClick={handleRightRotatePreview}
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: '20px',
                                borderRadius: '50%',
                            }}>
                            <FaArrowRotateRight />
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    )
}


export default ImageModel