import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink = ({ href, children }: { href: string, children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={"#c2ced6"}
    _hover={{
      textDecoration: 'none',
      color: "white",
      bg: useColorModeValue('gray.800', 'gray.900'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Navbar({ links, children }: { links: {href: string, title: string}[], children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.800', 'gray.900')} color={"#f7fafc"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg={useColorModeValue('gray.800', 'gray.900')}
            color={"white"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{bg: useColorModeValue('gray.800', 'gray.900')}}
          />
          <Flex justify={"space-between"} alignItems={'center'}>
            <Box><Flex><img src='react.svg' width={"30px"} /><Heading size={"sm"} mt={"4px"} ml={"6px"}>Corona Auto Detailing</Heading></Flex></Box>
            <Spacer />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              ml={"30px"}
            >
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.title}</NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>{children}</Box>
    </>
  );
}