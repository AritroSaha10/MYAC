import React from "react"
import { graphql, Link } from "gatsby"

import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"

import MySEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

import Page404 from "../404"
import MotionBox from "../../components/anim/MotionBox"
import { GatsbyImage } from "gatsby-plugin-image"
import { ArrowBackIcon } from "@chakra-ui/icons"

import transition from "../../components/anim/Transitions"

const TeamMember = (props) => {
    // Only return an about page if data exists
    if (props.data.airtable) {
        const data = props.data.airtable.data;

        console.log(data);

        return (
            <MotionBox
                overflow="hidden"
                initial={{
                    opacity: 0,
                    transition: { duration: 0.5 }
                }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.5 }
                }}
                exit={{
                    opacity: 0,
                    transition: { delay: 0.2, duration: 0.5 }
                }}
            >
                <MySEO title="MYAC | Events" />
                <Flex minH="100vh" direction="column">
                    <Navbar />

                    <Box px="10vw" pt="6rem" pb="2rem">
                        <Link to="/gallery">
                            <Button
                                colorScheme="blue"
                                variant="link"
                                leftIcon={<ArrowBackIcon />}
                                fontSize="18px"
                            >
                                Back
                            </Button>
                        </Link>

                        <Heading as="h1" size="xl" pt="0.5rem">
                            {data.Name}
                        </Heading>

                        <Heading as="h4" size="md" color="gray.400" fontWeight="normal">
                            {data.Date}
                        </Heading>
                    </Box>

                    <Flex px="10vw" pb="100px" direction="column" alignItems="center">
                        <Box
                            w="100%"
                            mx="auto"
                            sx={{ columnCount: [1, 1, 2, 3], columnGap: "2rem", rowGap: "4rem" }}
                        >
                            <MotionBox
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                    scale: 1.0
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ...{ transition }
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 60,
                                    transition: {
                                        duration: 0.5,
                                        ...{ transition }
                                    }
                                }}
                            >
                                {data.Photos.localFiles.map((imgData, i) => (
                                    <MotionBox
                                        initial={{
                                            opacity: 0,
                                            y: 60,
                                            scale: 1.0
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: i * 0.2,
                                                ...{ transition }
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 60,
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.15, // Maximum 3 in a row, modulo done in order to speed up transitions
                                                ...{ transition }
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.15
                                            }
                                        }}
                                        w="100%"
                                        borderRadius="xl"
                                        mb={6}
                                        d="inline-block"
                                    >
                                        <GatsbyImage image={imgData.childImageSharp.gatsbyImageData} style={{ borderRadius: "0.5rem" }} />
                                    </MotionBox>
                                ))}
                            </MotionBox>
                        </Box>
                    </Flex>

                    <Spacer />

                    <Footer />
                </Flex>
            </MotionBox>
        )
    }

    return (
        <Page404 />
    );
}

export const query = graphql`
    query UsingGalleryID($id: String!) {
        airtable(table: {eq: "Gallery"}, id: {eq: $id}) {
            data {
                Name
                Date
                Photos {
                    id
                    localFiles {
                        childImageSharp {
                            gatsbyImageData(quality:100, placeholder:BLURRED)
                        }
                    }
                }
            }
        }
    }
`

export default TeamMember