import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Title from "../components/Title"

import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import MotionBox from "../components/anim/MotionBox"
import transition from "../components/anim/Transitions"

const Team = () => {
    const {
        team,
        peopleData
    } = useStaticQuery(graphql`
        query {
            team: file(relativePath: { eq: "landscape.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1920,
                        placeholder: BLURRED,
                        quality: 100
                    )
                }
            }

            peopleData: allAirtable(filter: {table: {eq: "Team"}}) {
                nodes {
                  data {
                    Name
                    Position
                    Avatar {
                        id
                        localFiles {
                          childImageSharp {
                            gatsbyImageData(height: 700, quality: 100, placeholder: BLURRED)
                          }
                        }
                      }
                    Rank
                    Route
                  }
                }
              }
        }
    `)

    // Parse data to fit previous model and sort to ranking
    const people = peopleData.nodes.map(
        (node) => ({
            name: node.data.Name,
            position: node.data.Position,
            img: node.data.Avatar.localFiles[0].childImageSharp.gatsbyImageData,
            route: node.data.Route,
            rank: node.data.Rank
        })
    ).sort(
        (data1, data2) => data1.rank - data2.rank
    );

    return (
        <MotionBox
            backgroundColor="white"
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
                transition: { duration: 0.5 }
            }}
        >
            <MySEO title="MYAC | Team" />
            <Navbar />
            <Box
                height={["100px", null, "350px", null]}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <BgImage
                    image={getImage(team)}
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundPosition: "center top",
                    }}
                    alt="Hero Image"
                ></BgImage>
            </Box>
            <Box px="10vw" py="100px">
                <Title
                    title="MYAC Board Of Directors"
                    subtitle="The people who make it happen"
                    align="center"
                    subColor="blue.500"
                    color="black.900"
                />
                <Box
                    pt="100px"
                    display="grid"
                    gridTemplateColumns={[
                        "1fr",
                        null,
                        "repeat(auto-fit, minmax(300px, 1fr))",
                        null,
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={10}
                >
                    {people.map(person => (
                        <Box>
                            <Link to={person.route}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                >
                                    <MotionBox
                                        width={["80vw", null, "300px", null]}
                                        height={["80vw", null, "300px", null]}
                                        overflow="hidden"
                                        whileHover={{
                                            scale: 1.05,
                                            opacity: 0.95,
                                            transition: {
                                                duration: 0.2,
                                            }
                                        }}
                                    >
                                        <button
                                            style={{
                                                outline: "none",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        >
                                            <GatsbyImage
                                                image={person.img}
                                                alt={person.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%"
                                                }}
                                            />
                                        </button>
                                    </MotionBox>
                                    <Heading
                                        color="black.900"
                                        size="lg"
                                        textAlign="left"
                                        width={["80vw", "80vw", "300px", null]}
                                        mt="20px"
                                    >
                                        {person.position}
                                    </Heading>
                                    <Heading
                                        color="gray.500"
                                        size="md"
                                        textAlign="left"
                                        width={["80vw", "80vw", "300px", null]}
                                        mt="5px"
                                    >
                                        {person.name}
                                    </Heading>
                                </Box>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </MotionBox >
    )
}

export default Team
