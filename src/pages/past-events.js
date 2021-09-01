import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Box, Heading, Flex } from "@chakra-ui/react"

import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Event from "../components/events/EventCard"
import Placeholder from "../components/events/EventPlaceholder"

import MotionBox from "../components/anim/MotionBox"

const placeholders = Array(8).fill(<Placeholder />)

const Events = () => {
    const data = useStaticQuery(graphql`
        query {
            allAirtable(filter: { table: { eq: "Content pipeline" } }) {
                edges {
                    node {
                        data {
                            Date
                            Description
                            Name
                            Email
                            Status
                            URL
                            Thumbnail {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Gets airtable data then sorts based on date
        var myQldata = data["allAirtable"]["edges"].map(event => ({
            title: event.node.data.Name,
            desc: event.node.data.Description,
            status: event.node.data.Status,
            img: event.node.data.hasOwnProperty("Thumbnail")
                ? event.node.data.Thumbnail[0].url
                : null,
            link: event.node.data.URL,
            date: event.node.data.Date === undefined
                ? "00-00-00"
                : event.node.data.Date,
            past: event.node.data.Status === "Concluded"
        }))
        // Sort lexicographically based on date
        myQldata.sort((a, b) => b.date.localeCompare(a.date))

        // Filter to only show past events
        myQldata = myQldata.filter(({ past }) => past);

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
            <MySEO title="MYAC | Events" />
            <Navbar />
            <Flex px="10vw" py="100px" direction="column" alignItems="center">
                <Box
                    display="grid"
                    gridTemplateColumns={[
                        "repeat(auto-fit, minmax(300px, 1fr))",
                        "repeat(auto-fit, minmax(400px, 1fr))",
                    ]}
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={5}
                >
                    {loading ? placeholders : events.map(event => (
                        <Event
                            title={event.title}
                            desc={event.desc}
                            status={event.status}
                            img={event.img}
                            link={event.link}
                            date={event.date}
                        />
                    ))}

                    {
                        !events.length &&
                        <Flex mt="4" flexDirection="column" alignItems="center" gridGap="4">
                            <Heading
                                size="2xl"
                                color="gray.600"
                                fontWeight="medium"
                                textAlign="center"
                            >
                                No upcoming events found
                            </Heading>

                            <Heading
                                size="md"
                                color="gray.600"
                                fontWeight="normal"
                                width="50%"
                                textAlign="center"
                            >
                                Sorry, there seem to be no upcoming events as of now. Try including past events to see past events, or come back later to find new events by MYAC!
                            </Heading>
                        </Flex>
                    }
                </Box>
            </Flex>
            <Footer />
        </MotionBox>
    )
}

export default Events
