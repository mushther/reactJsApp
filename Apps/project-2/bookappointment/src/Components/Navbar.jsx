import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, Spacer, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContextProvider } from '../Context/AuthContext'
import Logo from '../Data/logo/health_care.png'
import { FaCartPlus, FaUserCircle } from 'react-icons/fa'
const Navbar = () => {
    const { state, logoutHandle } = useContext(AuthContextProvider);
    console.log(state.isAuth);
    return (
        <>
            <Flex w={"100%"} minWidth='max-content' h={'90px'} alignItems='center' bg='#2c022cf3' position="fixed" top={'-10px'}>
                <Link to="/">
                    <Box p='2' display={"flex"} justifyContent={"space-between"} gap={5}>
                        <Image w={"200px"} src={Logo} />
                    </Box>
                </Link>
                <Spacer />
                <ButtonGroup gap='2' alignItems='center'>
                    <Link to="/doctorlist">
                        <Button
                            _hover={{
                                border: '2px solid white',
                                width: '260px',
                                height: '45px',
                                bg: 'none',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                            fontSize={17} fontWeight='bold' bg='none' >Book Doctor's Appointment</Button>
                    </Link>
                    <Link to="/status">
                        <Button
                            _hover={{
                                border: '2px solid white',
                                width: '210px',
                                height: '45px',
                                bg: 'none',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                            marginRight={1}
                            bg='none'
                            fontWeight={'bold'}
                            fontSize={17} >Check Booking Status</Button>
                    </Link>
                    {state.isAuth ?
                        <Flex >
                            <Button
                                _hover={{
                                    border: '2px solid white',
                                    width: '80px',
                                    height: '45px',
                                    bg: 'none',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                                marginRight={1}
                                bg='none'
                                fontWeight={'bold'}
                                onClick={logoutHandle}>Logout</Button>
                            <Link to="/userlist">
                                <Text marginRight={5} w={"43px"} fontSize='4xl'><FaUserCircle /> </Text>
                            </Link>
                            <Link to="/userlist">
                                <Text marginRight={5} w={"43px"} fontSize='4xl'><FaCartPlus /> </Text>
                            </Link>
                        </Flex>
                        :
                        <Link to="/login">
                            <Button
                                _hover={{
                                    border: '2px solid white',
                                    width: '80px',
                                    height: '45px',
                                    bg: 'none',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                                bg='none'
                                marginRight={1}
                                fontWeight={'bold'}
                            >Log In</Button>
                        </Link>
                    }

                </ButtonGroup>
            </Flex>
        </>
    )
}

export default Navbar