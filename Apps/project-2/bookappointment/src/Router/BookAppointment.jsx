import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";


const BookAppointment = () => {
    const [appointment] = useState(JSON.parse(localStorage.getItem("appointment")))
    const initialData = {
        username: "",
        age: "",
        email: "",
        mobile: "",
        status: true,
        token: `HC${Date.now()}`,
        description: "",
        doctorname: appointment.doctorname,
        doctorfee: appointment.doctorfee
    }
    const [formState, setFormState] = useState(initialData)

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setFormState({ ...formState, [name]: val })
    }
    //console.log(Date.now());

    const postData = (id) => {
        axios.post(`https://doctor-appointment-seven.vercel.app/user`, formState)
        //console.log(formState);

        axios.put(`https://doctor-appointment-seven.vercel.app/doctor/${id}`, {
            "id": appointment.id,
            "doctorname": appointment.doctorname,
            "eduction": appointment.eduction,
            "doctorfee": appointment.doctorfee,
            "address": appointment.address,
            "appointment": +(appointment.appointment) + 1
        })
        alert(`Hello ${formState.username} Your Appointment Booked. Your Token No. ${formState.token}`)

    }
    console.log(appointment.id);

    return (
        <Box w={"80%"} m={"auto"} mt={"95px"}>
            <FormControl position={"none"}>
                <Heading>Book Doctor's Appointment</Heading>
                <FormLabel>Patient Name</FormLabel>
                <Input
                    position={"none"}
                    placeholder='Enter Your Name'
                    type='text'
                    name='username'
                    onChange={handleChange}
                    value={formState.username}
                />
                <FormLabel>Patient Age</FormLabel>
                <Input
                    position={"none"}
                    placeholder='Enter Your Age'
                    type='number'
                    name='age'
                    onChange={handleChange}
                    value={formState.age}
                />
                <FormLabel>Email Address</FormLabel>
                <Input
                    position={"none"}
                    type='email'
                    placeholder='Enter Your Email'
                    name='email'
                    onChange={handleChange}
                    value={formState.email}
                />
                <FormLabel>Mobile Number</FormLabel>
                <Input
                    position={"none"}
                    type='number'
                    placeholder='Enter Your Moblie No.'
                    name='mobile'
                    onChange={handleChange}
                    value={formState.mobile}
                />
                <FormLabel>Discribe Your Problem</FormLabel>
                <Input
                    position={"none"}
                    type='text'
                    placeholder='Enter Your Problem'
                    name='description'
                    onChange={handleChange}
                    value={formState.description}
                />
                <FormLabel>Doctor's Name</FormLabel>
                <Input
                    position={"none"}
                    disabled={true}
                    type='text'
                    name='doctorname'
                    onChange={handleChange}
                    value={formState.doctorname}
                />
                <FormLabel>Doctor's Fee</FormLabel>
                <Input
                    position={"none"}
                    disabled={true}
                    type='text'
                    name='doctorfee'
                    onChange={handleChange}
                    value={`₹${formState.doctorfee}/-`}
                />
                {
                    +(appointment.appointment) < 10 ? <Text
                        textAlign={"start"}
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        p={1}
                        borderRadius={30}
                        mt={3} w={"17%"}
                        color={"white"}
                        bg={"green"}
                    > Appointment Available : {(10) - (+(appointment.appointment))}</Text>
                        : <Text textAlign={"start"} fontSize={"15px"} fontWeight={"bold"} p={1} borderRadius={30} mt={3} w={"17%"} color={"white"} bg={"red"}>Appointment Not Available</Text>
                }
                {
                    +(appointment.appointment) >= 10 ?
                        <Button onClick={() => { postData(appointment.id) }} disabled={true} display={"block"} margin={"none"} marginTop={"15px"} colorScheme={"blue"}>Book Appointment</Button>
                        : <Button onClick={() => { postData(appointment.id) }} display={"block"} margin={"none"} marginTop={"15px"} colorScheme={"blue"}>Book Appointment</Button>
                }
            </FormControl>
        </Box>
    )
}

export default BookAppointment