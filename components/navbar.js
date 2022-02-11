//import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <nav>
    
//     <Link href ='/'><a>Home</a></Link>
//     <Link href='/about'><a>About Me</a></Link>
//     <Link href='/portfolio'><a>Portfolio</a></Link>
//     <Link href='/projects'><a>My Projects</a></Link>
//     </nav>
//   )
// }


// export default Navbar



import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/about'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>MC</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar src={'/profile.jpg'}
                    size={'sm'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                    src={'/profile.jpg'}
                      size={'2xl'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Mary Chukwuma</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem> <Link href='/about'><a>About Me</a></Link></MenuItem>
                  <MenuItem><Link href='/portfolio'><a>Portfolio</a></Link></MenuItem>
                  <MenuItem><Link href='/projects'><a>My Projects</a></Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}