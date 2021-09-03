import React from "react"
import { Box, Text, Button } from "@chakra-ui/react"
import Title from "../Title"
import { StaticImage } from "gatsby-plugin-image"

const Summary = () => {
    return (
        <Box
            px="10vw"
            py="100px"
            backgroundColor="gray.50"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="center"
            alignItems="center"
            id="about"
        >
            <Box
                width={["100%", "100%", "500px", "500px"]}
                mr={["0", "0", "125px", "125px"]}
            >
                <Title
                    title="Empowering Youth"
                    subtitle="We are the Mississauga Youth Action Committee"
                    align="left"
                    subColor="blue.500"
                    color="black.900"
                />
                <Text
                    color="gray.500"
                    mt="20px"
                    fontSize="xl"
                    lineHeight="1.5em"
                >
                    As a youth extension of the City of Mississauga, we
                    represent the 145 000+ youths in the city. We help, engage,
                    and empower.
                </Text>
                <Box mt="30px">
                    <a
                        href="/constitution.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-test-id="constitution-button"
                    >
                        <Button
                            colorScheme="blue"
                            fontSize="18px"
                            variant="outline"
                            height="50px"
                        >
                            Our Constitution
                        </Button>
                    </a>
                </Box>
            </Box>
            <Box
                width={["100%", null, "600px"]}
                height="auto"
                mt={["50px", "50px", "50px", "0px"]}
                borderRadius="10px"
                overflow="hidden"
            >
                <StaticImage src="../../assets/summary.jpg" alt="Team" placeholder="blurred" />
            </Box>
        </Box>
    )
}

export default Summary
