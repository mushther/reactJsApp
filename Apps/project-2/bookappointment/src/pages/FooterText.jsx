import { Text } from '@chakra-ui/react'
import React from 'react'

const FooterText = ({ text }) => {
    return (
        <Text _hover={{ color: '#2c022cf3' }}>{text}</Text>
    )
}

export default FooterText