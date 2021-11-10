import React from "react"
import {
    Box,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { Mobile, Desktop, IsMobile } from "./MediaQueries"
import "../styles.css"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const NavItem = ({ name, url }) => (
        <Link to={url} activeClassName="active" onClick={onClose}>
            <Box
                color="black.900"
                mx="20px"
                my={IsMobile() ? "10px" : "0px"}
                transition="all .25s ease-in-out"
                _hover={{ color: "blue.300" }}
            >
                <Text fontWeight="500">{name}</Text>
            </Box>
        </Link>
    )

    return (
        <>
            <Desktop>
                <Headroom
                    style={{
                        webkitTransition: "all .6s ease-in-out",
                        mozTransition: "all .6s ease-in-out",
                        oTransition: "all .6s ease-in-out",
                        transition: "all .6s ease-in-out",
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        py="24px"
                        px="10vw"
                        alignItems="center"
                        justifyContent="space-between"
                        backgroundColor="white"
                        boxShadow="inset 0 -1px 0 0 rgba(0,0,0,0.1);"
                    >
                        <Link to="/" aria-label="Logo">
                            <StaticImage src="../assets/logo.png" height={30} quality={100} placeholder="blurred" alt="Logo" />
                        </Link>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-evenly"
                        >
                            <NavItem name="Home" url="/" />
                            {children}
                            <NavItem name="Team" url="/team" />
                            <NavItem name="Events" url="/events" />
                            <NavItem name="Gallery" url="/gallery" />
                            <NavItem name="Past Events" url="/past-events" />
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                        >
                            <a
                                href="https://www.instagram.com/myac_mississauga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <StaticImage src="../assets/ig.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                </Box>
                            </a>
                            <a
                                href="https://www.facebook.com/myacmississauga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <StaticImage src="../assets/fb.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                </Box>
                            </a>
                            <a
                                href="https://twitter.com/MYACMISSISSAUGA"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Box
                                    mx="10px"
                                    display="flex"
                                    alignContent="center"
                                >
                                    <StaticImage src="../assets/twitter.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Headroom>
            </Desktop>
            <Mobile>
                <Headroom
                    style={{
                        webkitTransition: "all .6s ease-in-out",
                        mozTransition: "all .6s ease-in-out",
                        oTransition: "all .6s ease-in-out",
                        transition: "all .6s ease-in-out",
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        py="24px"
                        px="10vw"
                        alignItems="center"
                        justifyContent="space-between"
                        backgroundColor="white"
                        boxShadow="inset 0 -1px 0 0 rgba(0,0,0,0.1);"
                    >
                        <Link to="/" aria-label="Logo">
                            <StaticImage src="../assets/logo.png" height={30} quality={100} placeholder="blurred" alt="Logo" />
                        </Link>
                        <HamburgerIcon
                            w={6}
                            h={6}
                            color="gray.200"
                            onClick={onOpen}
                        />
                        <Drawer isOpen={isOpen} onClose={onClose}>
                            <DrawerOverlay>
                                <DrawerContent backgroundColor="white">
                                    <DrawerCloseButton />
                                    <DrawerHeader>
                                        <Link to="/">
                                            <StaticImage src="../assets/logo.png" height={28} quality={100} placeholder="blurred" alt="Logo" />
                                        </Link>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-evenly"
                                        >
                                            <NavItem name="Home" url="/" />
                                            {children}
                                            <NavItem name="Team" url="/team" />
                                            <NavItem name="Events" url="/events" />
                                            <NavItem name="Gallery" url="/gallery" />
                                            <NavItem name="Past Events" url="/past-events" />
                                        </Box>
                                    </DrawerBody>
                                    <DrawerFooter>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            justifyContent="center"
                                            width="100%"
                                            mb="10px"
                                        >
                                            <a
                                                href="https://www.instagram.com/myac_mississauga/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <StaticImage src="../assets/ig.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                                </Box>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/myacmississauga/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <StaticImage src="../assets/fb.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                                </Box>
                                            </a>
                                            <a
                                                href="https://twitter.com/MYACMISSISSAUGA"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Twitter"
                                            >
                                                <Box
                                                    mx="10px"
                                                    display="flex"
                                                    alignContent="center"
                                                >
                                                    <StaticImage src="../assets/twitter.png" height={28} quality={100} placeholder="blurred" alt="Instagram" />
                                                </Box>
                                            </a>
                                        </Box>
                                    </DrawerFooter>
                                </DrawerContent>
                            </DrawerOverlay>
                        </Drawer>
                    </Box>
                </Headroom>
            </Mobile>
        </>
    )
}

export default Navbar
