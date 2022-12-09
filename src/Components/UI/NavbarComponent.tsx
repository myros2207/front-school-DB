import {ReactNode, useEffect, useState} from 'react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {Box} from "@chakra-ui/layout";
import {Link} from "@chakra-ui/layout";
import {Link as LinkRoute, useNavigate} from "react-router-dom"
import {
    Avatar,
    Button,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import CustomersLogin from "../Customers/CustomersLogin";
import secureLocalStorage from "react-secure-storage";
import {NavbarAvatar} from "./NavbarStyled";
// import { useEffect } from 'react';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({children}: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function NavbarComponent() {

    const [isLogin, setIsLogin] = useState<any>("")

    const navigate = useNavigate()

    useEffect(() => {
        const ChekIsYouLogin = () => {

            if (secureLocalStorage.getItem("Login") !== " ") {
                setIsLogin(
                    <LinkRoute to={"/customers"}>
                        <NavbarAvatar>
                        </NavbarAvatar>
                    </LinkRoute>
                )
                console.log("Ypu ness")
            }
            else {
                setIsLogin(
                    <Flex alignItems={'center'}>
                        <Button justifyContent={"end"} onClick={() => navigate("/login")}>Login/ register</Button>
                    </Flex>
                )
            }
        }
        ChekIsYouLogin()
    }, []);

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <LinkRoute to={"/"}><Box>Logo</Box></LinkRoute>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            <LinkRoute to={"/"}>test</LinkRoute>
                            <LinkRoute to={"/"}>test</LinkRoute>
                            <LinkRoute to={"/"}>test</LinkRoute>
                            <LinkRoute to={"/"}>test</LinkRoute>
                            <LinkRoute to={"/"}>test</LinkRoute>
                        </HStack>
                    </HStack>
                    {isLogin}
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}
