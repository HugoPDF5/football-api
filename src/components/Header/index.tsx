import { Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      h='24'
      bg='#000000'
      justify={'space-between'}
    >
      <Image
        objectFit='cover'
        bg='transparent'
        src='src/assets/logo.jpg'
      />

      <HStack gap={8} mr={8}>
        <Link as={RouterLink} to='' isExternal>
          <Text color='#50f000' fontFamily='Poppins, sans-serif' fontWeight='semibold'> Copa do Brasil </Text>
        </Link>
        <Link as={RouterLink} to='' isExternal>
          <Text color='#50f000' fontFamily='Poppins, sans-serif' fontWeight='semibold'> Campeonato Brasileiro </Text>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Header