import { ReactNode } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Box} from "@chakra-ui/layout";
import {Link} from "@chakra-ui/layout";
import {Link as LinkRoute} from "react-router-dom"
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

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                                    <LinkRoute to={"/"}>test</LinkRoute>
                                    <LinkRoute to={"/"}>test</LinkRoute>
                                    <LinkRoute to={"/"}>test</LinkRoute>
                                    <LinkRoute to={"/"}>test</LinkRoute>
                                    <LinkRoute to={"/"}>test</LinkRoute>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>

                            <Button justifyContent={"end"} onClick={onOpen}>Login/ register</Button>

                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Login</ModalHeader>
                                    <ModalCloseButton />
                                    < ModalBody>
                                        <CustomersLogin />
                                    </ModalBody>

                                </ModalContent>
                            </Modal>

                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
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
