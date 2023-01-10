import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import Userstatus from './Userstatus';
// FormHelperText,
const Status = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    console.log(value);
    const checkStatus = async (e) => {
        // e.preventDefault()
        return await axios.get(`https://doctor-appointment-seven.vercel.app/user?q=${value}`).then((res) => {
            setData(res);
            setValue("");
            // console.log(data);
        }).catch((err) =>
            console.log(err)
        )
    }
    const handleSubmit = () => {
        checkStatus()
    }
    return (
        <Box w={"80%"} m={"auto"} mt={"95px"}>
            <FormControl position={"none"}>
                <Heading>Check Your Booking Status</Heading>
                <FormLabel>Token/Mobile Number</FormLabel>
                <Input
                    position={"none"}
                    placeholder=' Enter Your Token/Mobile Number'
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {value <= +(9) ? <Button
                    disabled={true}
                    position={"none"}
                    onClick={handleSubmit}
                    display={"block"}
                    margin={"none"}
                    marginTop={"15px"}
                    colorScheme={"blue"}
                >Check Status</Button> :
                    <Button
                        position={"none"}
                        disabled={false}
                        onClick={handleSubmit}
                        display={"block"}
                        margin={"none"}
                        marginTop={"15px"}
                        colorScheme={"blue"}
                    >Check Status</Button>}
            </FormControl>
            <Userstatus
                data={data && data?.data}
            />
        </Box>
    )
}

export default Status