import { Box, Heading, Image, Button, Text, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Medicines from '../pages/Medicines';
import CButton from '../Components/CButton';
import CardSkeloten from '../Components/CardSkeloten';
const Home = () => {
    const [data, setData] = useState([]);
    const [medicineData, setMedicineData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true)
        axios.get(`https://doctor-appointment-seven.vercel.app/doctor`).then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
        axios.get(`https://doctor-appointment-seven.vercel.app/medicine`).then((res) => {
            setMedicineData(res.data)
            setIsLoading(false)
        })
    }
    useEffect(() => {
        getData()

    }, [])

    const handleApntNumber = (el) => {
        let drid = {
            "id": el.id,
            "doctorname": el.doctorname,
            "eduction": el.eduction,
            "doctorfee": el.doctorfee,
            "address": el.address,
            "appointment": el.appointment
        }
        localStorage.setItem("appointment", JSON.stringify(drid))
    }
    //console.log(data);
    return (
        <Box mt={"80px"} >
            <Box height={"auto"} display={"flex"} justifyContent={"space-between"} padding={"4rem"} >
                <Box textAlign={"start"} >
                    <Heading fontFamily={"serif"} fontSize={"60px"} mt={10} w={"100%"} >Best doctors</Heading>
                    <Heading fontFamily={"serif"} fontSize={"60px"} w={"100%"} >at the best hospitals</Heading>
                    <Heading fontFamily={"serif"} fontSize={"60px"} w={"100%"} color={'aqua'}>Search and Book now.</Heading>
                    <Link to="/doctorlist">
                        <Button
                            _hover={{

                                fontWeight: 'bold',
                                bg: 'aqua',
                                width: '250px',
                                border: '0px solid white'
                            }}
                            h='45px'
                            bg='none'
                            color='white'
                            border='2px solid white'
                            fontWeight={'bold'}
                            position={"none"} mt={5}>Book Doctor's Appointment</Button>
                    </Link>
                </Box>
                <Box >
                    <Image src='https://www.credihealth.com/assets/book-appointment/Book-Lab-Tests-da61c68b766479529b8b6c2fc35b3db00a0eace26b1869e727820a34c1a95119.png' />
                </Box>
            </Box>
            <Heading mt={5} ml={"80px"} textAlign={"start"}>Top Doctor's of City</Heading>
            {
                isLoading ?
                    <Grid w='100%' gridTemplateColumns={'repeat(4,1fr)'} padding="20px 80px 80px 80px" gap={5} >
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                        <CardSkeloten line={6} />
                    </Grid>
                    :
                    <Box style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "10px",
                        padding: "20px 80px 80px 80px"
                    }}
                    >
                        {data.map((el) => (
                            <Box padding={2}>
                                <Image
                                    _hover={{
                                        border: '2px solid white'
                                    }}
                                    borderRadius={"20px 20px 0px 0px"}
                                    src='https://i.pinimg.com/originals/56/d1/c0/56d1c032884032f4216b9bc790c00a1e.jpg'
                                    alt='Caffe Latte'
                                />
                                <Box _hover={{
                                    border: '2px solid white'
                                }} bg={'#490649f3'} color='white' border={"1px solid aqua"} borderRadius={"0px 0px 20px 20px"} padding={4}>
                                    <Heading>{el.doctorname}</Heading>
                                    <Text borderRadius={"5px"} w={"auto"}>{el.eduction}</Text>
                                    <Text>Address: {el.address}</Text>
                                    <Text display={"flex"} justifyContent={"center"}>
                                        <Text>Appointment:</Text>
                                        {el.appointment >= 10 ? <Text color={"red"}>"Not Available"</Text> : <Text color={"green.300"}>"Available"</Text>}
                                    </Text>
                                    <Text fontSize={"xl"} color={"white"} bg={"red.400"} w={"40%"} m={"auto"} borderRadius={"5px"}>Fee: ₹{el.doctorfee}/-</Text>
                                    <Link to="/bookappointment">
                                        <Button
                                            _hover={{
                                                border: '2px solid white',
                                                width: '180px',
                                                bg: 'none',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}
                                            position={"none"}
                                            colorScheme='blue'
                                            onClick={() => { handleApntNumber(el) }}
                                            mt={5}>Book Appointment</Button>
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </Box>}
            <Heading color={'white'} padding="20px 80px 80px 80px" textAlign={"start"}>Medicine</Heading>
            {isLoading ?
                <Grid w='100%' gridTemplateColumns={'repeat(4,1fr)'} padding="20px 80px 80px 80px" gap={5} >
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                    <CardSkeloten line={6} />
                </Grid>
                :
                <Grid padding="20px 80px 80px 80px" gap={5} gridTemplateColumns={'repeat(4,1fr)'}>
                    {medicineData.map((el) => (
                        <Medicines
                            medicineName={el.medicineName}
                            description={el.description}
                            id={el.id}
                            img1={el.img1}
                            img2={el.img2}
                            img3={el.img3}
                            price={el.price}
                            reviews={el.reviews}
                            stock={el.stock}
                        />
                    ))}
                </Grid>}
        </Box>
    )
}

export default Home