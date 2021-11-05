import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Box, Heading, Flex, Button, Spacer } from "@chakra-ui/react"

import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Event from "../components/events/EventCard"
import Placeholder from "../components/events/EventPlaceholder"

import MotionBox from "../components/anim/MotionBox"
import transition from "../components/anim/Transitions"
import Gallery from "../components/gallery/GalleryCard"

const placeholders = Array(8).fill(<Placeholder />)

const Events = () => {
    const data = useStaticQuery(graphql`
        query {
            allAirtable(filter: {table: {eq: "Gallery"}}) {
                nodes {
                    data {
                        Name
                        Date
                        Photos {
                            localFiles {
                                childImageSharp {
                                    gatsbyImageData(quality:90, placeholder:BLURRED)
                                }
                            }
                        }
                        GalleryLink
                    }
                }
            }
        }
    `)["allAirtable"]["nodes"];

    console.log(data);


    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Gets airtable data then sorts based on date
        var myQldata = data.map(event => ({
            title: event.data.Name,
            imgs: event.data.Photos.localFiles.map(obj => obj.childImageSharp.gatsbyImageData),
            date: event.data.Date === undefined
                ? "00-00-00"
                : event.data.Date,
            link: event.data.GalleryLink
        }))
        // Sort lexicographically based on date
        myQldata.sort((a, b) => b.date.localeCompare(a.date))

        console.log(myQldata);

        setEvents(myQldata)
        setLoading(false)
    }, [data])

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
                transition: { delay: 0.2, duration: 0.5 }
            }}
        >
            <MySEO title="MYAC | Gallery" />
            <Flex minH="100vh" direction="column">
                <Navbar />
                <Flex px="10vw" py="100px" direction="column" alignItems="center">
                    <Box
                        display="grid"
                        sx={{ columnCount: [1, 2, 3], columnGap: "4rem", rowGap: "4rem", gridAutoFlow: "column" }}
                    >
                        {loading ? placeholders : events.map((event, i) => {
                            return (
                                <MotionBox
                                    initial={{
                                        opacity: 0,
                                        y: 60
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
                                            delay: (i % 3) * 0.15, // Maximum 3 in a row, modulo done in order to speed up transitions
                                            ...{ transition }
                                        }
                                    }}
                                >
                                    <Gallery
                                        title={event.title}
                                        img={event.imgs[0]}
                                        link={event.link}
                                        date={event.date}
                                    />
                                </MotionBox>
                            )
                        })}
                    </Box>
                </Flex>

                <Spacer />

                <Footer />
            </Flex>
        </MotionBox>
    )
}

export default Events
