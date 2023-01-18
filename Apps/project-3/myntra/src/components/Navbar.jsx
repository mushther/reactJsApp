import { Heading, Flex, Box, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { FaUser, FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Flex m={'auto'} p={3} justifyContent={'space-between'} alignItems={'center'} boxShadow={'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}>
            <Box>
                <Link to='/'>
                    <Heading color={'red.500'}>Myntra</Heading>
                </Link>
            </Box>
            <Box w={'35%'} display={'flex'} justifyContent={'space-between'}>
                <Heading fontSize={14} size={'sm'}>MEN</Heading>
                <Heading fontSize={14} size={'sm'}>WOMEN</Heading>
                <Heading fontSize={14} size={'sm'}>KIDS</Heading>
                <Heading fontSize={14} size={'sm'}>HOME & LIVING</Heading>
                <Heading fontSize={14} size={'sm'}>BEAUTY</Heading>
                <Heading fontSize={14} size={'sm'}>STUDIO</Heading>
            </Box>
            <Box w={'28%'} display={'flex'}>
                <Button><FaSearch /></Button>
                <Input placeholder={'Search for products brands and more'} />
            </Box>

            <Box w={'11%'} display={'flex'} justifyContent={'space-between'} alignItems='center'>
                <Link to='/login'>
                    <Heading fontSize={12} size={'sm'} display={'flex'} flexDirection='column' alignItems='center'><FaUser fontSize={18} />Profile</Heading>
                </Link>
                <Link to='/wishlist'>
                    <Heading fontSize={12} size={'sm'} display={'flex'} flexDirection='column' alignItems='center'><FaRegHeart fontSize={18} />Wishlist</Heading>
                </Link>
                <Link to='/checkout'>
                    <Heading fontSize={12} size={'sm'} display={'flex'} flexDirection='column' alignItems='center'><FaShoppingBag fontSize={18} />Bag</Heading>
                </Link>
            </Box>
        </Flex>

    )
}
export default Navbar