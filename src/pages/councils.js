import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Council from "../components/councils/CouncilCard"
import Placeholder from "../components/councils/CouncilPlaceholder"

import MotionBox from "../components/anim/MotionBox"

const placeholders = Array(8).fill(<Placeholder />)

const Events = () => {
    const data = useStaticQuery(graphql`
        query {
            allAirtable(filter: { table: { eq: "Councils" } }) {
                edges {
                    node {
                        data {
                            Name
                            Description
                            Thumbnail {
                                url
                            }
                            Email
                            URL
                        }
                    }
                }
            }
        }
    `)

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    if (loading) {
        // Gets airtable data then sorts based on date
        var qldata = data["allAirtable"]["edges"].map(event => ({
            component: (
                <Council
                    title={event.node.data.Name}
                    desc={event.node.data.Description}
                    img={
                        event.node.data.hasOwnProperty("Thumbnail")
                            ? event.node.data.Thumbnail[0].url
                            : null
                    }
                    link={event.node.data.URL}
                    contact={event.node.data.Email}
                />
            ),
            name: event.node.data.Name,
        }))
        // Sort lexicographically based on date
        qldata.sort((a, b) => a.name.localeCompare(b.name))
        // Retrieve component from object
        qldata = qldata.map(event => event.component)
        setEvents(qldata)
        setLoading(false)
    }

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
            <Box px="10vw" py="100px">
                <Heading size="2xl" color="gray.800" mb="8">
                    MYAC Opportunities Fair - Councils
                </Heading>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit, minmax(700px, 1fr))"
                    gridAutoFlow="row"
                    gridColumnGap={5}
                    gridRowGap={5}
                >
                    {loading ? placeholders : events}
                </Box>
            </Box>

            <Footer />
        </MotionBox>
    )
}

export default Events
