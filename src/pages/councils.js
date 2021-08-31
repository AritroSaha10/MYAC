import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
    Box,
    Heading,
    Text,
    Image,
    Button,
    Skeleton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react"
import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const Event = ({ title, desc, img, link, contact }) => (
    <Box
        shadow="xl"
        p="24px"
        backgroundColor="gray.50"
        border="1px rgb(0, 0, 0, 0.1) solid"
        borderRadius="lg"
        display="flex"
        flexDirection="row"
        alignItems="center"
    >
        <Image
            src={img}
            height="200px"
            width="200px"
            objectFit="cover"
            borderRadius="md"
            alt={title}
        />
        <Box
            ml="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
        >
            <Box>
                <Heading color="black.900" size="lg">
                    {title}
                </Heading>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mt="10px"
                ></Box>
                <Text color="gray.500" fontSize="lg" fontWeight="500" mt="10px">
                    {desc}
                </Text>
            </Box>
            <Box mt="10px">
                <Button
                    variant="link"
                    colorScheme="blue"
                    rightIcon={<ExternalLinkIcon />}
                >
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Learn More"
                    >
                        Learn More
                    </a>
                </Button>
                <Popover>
                    <PopoverTrigger>
                        <Button ml="20px" backgroundColor="blue.400" color="white" _hover={{
                            background: "blue.600",
                            color: "white"
                        }}>Contact</Button>
                    </PopoverTrigger>
                    <PopoverContent zIndex={4} width="500px">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Contact Us</PopoverHeader>
                        <PopoverBody>{contact}</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Box>
    </Box>
)

const Placeholder = () => (
    <Box
        shadow="lg"
        p="24px"
        backgroundColor="white"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
    >
        <Skeleton height="200px" width="100%" />
        <Box mt="20px">
            <Skeleton height="28px" />
            <Skeleton height="20px" />
        </Box>
    </Box>
)

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
                <Event
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
        <Box backgroundColor="white">
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
        </Box>
    )
}

export default Events
