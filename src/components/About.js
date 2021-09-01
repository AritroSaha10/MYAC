import React from "react"
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"
import igBlack from "../assets/ig-black.svg"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { GatsbyImage } from "gatsby-plugin-image"
import MotionBox from "./anim/MotionBox"

import transition from "./anim/Transitions"

const About = ({ name, position, bio, img, email, ig, animOffset }) => (
    <MotionBox px="10vw" py="100px" backgroundColor="white" exitBeforeEnter>
        <MotionBox
            initial={{
                x: "-40px",
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { delay: animOffset + 0.6, ...transition }
            }}
            exit={{
                x: "-40px",
                opacity: 0,
            }}
        >
            <Link to="/team">
                <Button
                    colorScheme="blue"
                    variant="link"
                    leftIcon={<ArrowBackIcon />}
                    fontSize="18px"
                >
                    Back
                </Button>
            </Link>
        </MotionBox>

        <Box
            display="flex"
            flexDirection={["column", null, "row"]}
            alignItems="center"
            justifyContent="space-evenly"
            my="50px"
        >
            <Flex flexDirection="column" alignItems="center">
                <MotionBox
                    height="200px"
                    width="200px"
                    minW="200px"
                    minH="200px"
                    overflow="hidden"
                    boxShadow="lg"

                    initial={{
                        width: "300px",
                        height: "300px",
                        opacity: 0
                    }}

                    animate={{
                        width: '200px',
                        height: "200px",
                        transition: { delay: animOffset, duration: 0.6, ...transition },
                        opacity: 1
                    }}

                    exit={{
                        width: "300px",
                        height: "300px",
                        opacity: 0,
                        transition: { duration: 0.6, ...transition },
                    }}
                >
                    <GatsbyImage
                        image={img}
                        style={{ width: "100%", height: "100%" }}
                    />
                </MotionBox>

                <MotionBox
                    initial={{
                        x: "-50px",
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: animOffset + 0.6, duration: 0.6, ...transition }
                    }}
                    exit={{
                        x: "-50px",
                        opacity: 0,
                        transition: { duration: 0.6, ...transition }
                    }}
                >
                    <Heading
                        color="black.900"
                        size="lg"
                        textAlign="center"
                        mt="25px"
                    >
                        {name}
                    </Heading>
                </MotionBox>

                <MotionBox
                    mt="20px"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    initial={{
                        x: "-50px",
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: animOffset + 0.7, ...transition }
                    }}
                    exit={{
                        x: "-50px",
                        opacity: 0,
                        transition
                    }}
                >
                    <Box height="18px" width="18px">
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="black"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                        </svg>
                    </Box>
                    <a
                        href={
                            "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=" +
                            email
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text color="black.900" fontSize="sm" mx="4px">
                            {email}
                        </Text>
                    </a>
                    <a href={ig} target="_blank" rel="noopener noreferrer">
                        <Box width="16px" height="16px">
                            <img src={igBlack} alt="Instagram" />
                        </Box>
                    </a>
                </MotionBox>
            </Flex>
            <Box
                maxWidth="800px"
                mt={["25px", "25px", "0px", "0px"]}
                ml={[null, "25px", "25px"]}
            >
                <MotionBox
                    initial={{
                        x: "100px",
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: animOffset + 0.6, ...transition }
                    }}
                    exit={{
                        x: "100px",
                        opacity: 0,
                        transition
                    }}
                >
                    <Heading color="black.900" size="xl">
                        {position}
                    </Heading>


                    <Box my="25px" borderTop="1px solid rgba(0, 0, 0, 0.1)"></Box>
                </MotionBox>

                <MotionBox
                    initial={{
                        x: "100px",
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: animOffset + 0.7, ...transition }
                    }}
                    exit={{
                        x: "100px",
                        opacity: 0,
                        transition
                    }}
                >
                    <Text
                        color="gray.500"
                        fontWeight="400"
                        fontSize="lg"
                        lineHeight="1.65em"
                    >
                        {bio}
                    </Text>
                </MotionBox>

            </Box>
        </Box>
    </MotionBox>
)

export default About;