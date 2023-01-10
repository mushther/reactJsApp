import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../Context/AuthContext'

const Login = () => {
    const { loginHandle } = useContext(AuthContextProvider);
    // const [state, setState] = useState(false);

    const handleClick = () => {
        // setState(true)
        loginHandle(`MHK${Date.now()}LK`);
    }
    return (
        <Box w={"80%"} m={"auto"} mt={"95px"}>
            <FormControl>
                <Heading>Login</Heading>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText textAlign={"start"}>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
                <Link to="/">
                    <Button
                        onClick={handleClick}
                        display={"block"}
                        margin={"none"}
                        marginTop={"15px"}
                        colorScheme={"blue"}
                    >Login</Button>
                </Link>
            </FormControl>
        </Box>
    )
}

export default Login