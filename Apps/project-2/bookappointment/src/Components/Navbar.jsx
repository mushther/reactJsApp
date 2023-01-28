import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, Heading, Spacer } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContextProvider } from '../Context/AuthContext'

const Navbar = () => {
    const { authState, state, logoutHandle } = useContext(AuthContextProvider)
    console.log(authState);
    return (
        <>
            <Flex w={"100%"} minWidth='max-content' alignItems='center' gap='2' bg={"blue.100"} padding={"0.5rem"} position="fixed" top={0}>
                <Link to="/">
                    <Box p='2' display={"flex"} justifyContent={"space-between"} gap={5}>
                        <Image w={"50px"} border={"1px solid blue"} borderRadius={"50%"} src='https://i.ibb.co/FXsNQFV/Blue-Dental-Clinic-Logo.jpg' />
                        <Heading color={"red.500"} fontFamily={"heading"}>Health Care +</Heading>
                    </Box>
                </Link>
                <Spacer />
                <ButtonGroup gap='2' alignItems='center'>
                    <Link to="/doctorlist">
                        <Button fontSize={17} fontWeight='bold' color={'blue'} bg={'none'} >Book Doctor's Appointment</Button>
                    </Link>
                    <Link to="/status">
                        <Button fontSize={17} fontWeight='bold' color={'blue'} marginRight={1} bg={'none'}>Check Booking Status</Button>
                    </Link>
                    {state.isAuth ?
                        <Button marginRight={1} colorScheme='green' onClick={logoutHandle}>Logout</Button>
                        :
                        <Link to="/login">
                            <Button marginRight={1} colorScheme='red'>Log In</Button>
                        </Link>
                    }
                    <Link to="/userlist">
                        <Image marginRight={5} w={"43px"} borderRadius={"50%"} src='https://th.bing.com/th/id/OIP.Z1bbnX3-kQnRKMy1GwhQ_QHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                    </Link>
                </ButtonGroup>
            </Flex>
        </>
    )
}

export default Navbar