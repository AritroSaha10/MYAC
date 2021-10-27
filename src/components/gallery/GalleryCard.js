import React from "react"
import { Link } from "gatsby"

import {
    Box,
    Heading,
    Text,
    Image,
    Button
} from "@chakra-ui/react"
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons"
import parseDate from "../events/ParseDate"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Gallery({ title, img, link, date }) {
    return (
        <Box
            shadow="xl"
            p="24px"
            backgroundColor="gray.50"
            border="1px rgb(0, 0, 0, 0.1) solid"
            borderRadius="lg"
            flexDirection="column"
        >
            <Box
                height="auto"
                width="100%"
                borderRadius="md"
            >
                <GatsbyImage image={img} style={{ borderRadius: "0.375rem" }} />
            </Box>
            <Box
                mt="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
            >
                <Box>
                    <Heading color="black.900" size="lg" data-testid="eventcard-title">
                        {title}
                    </Heading>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        mt="10px"
                    >
                        <Text
                            color="gray.500"
                            fontSize="md"
                            fontWeight="500"
                        >
                            {parseDate(date)}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <Button
                        variant="link"
                        colorScheme="blue"
                        leftIcon={<LinkIcon />}
                        mt="10px"
                    >
                        {link[0] === "/" ? (
                            <Link
                                to={link}
                            >
                                View
                            </Link>
                        )
                            : (
                                <Link
                                    to={`/gallery/${link}`}
                                    aria-label="View gallery"
                                    data-testid="gallerycard-view"
                                >
                                    View
                                </Link>)
                        }
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}