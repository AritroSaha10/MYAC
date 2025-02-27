import React from "react"
import { Box, Text, Button } from "@chakra-ui/react"
import { Link } from "gatsby"
import Title from "../Title"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { StaticImage } from "gatsby-plugin-image"

const Connects = () => {
    return (
        <Box
            px="10vw"
            py="100px"
            display="flex"
            flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
            ]}
            justifyContent="center"
            alignItems="center"
            id="connects"
            backgroundColor="white"
        >
            <Box
                width={["100%", null, "600px"]}
                height="auto"
                mt={["50px", "50px", "50px", "0px"]}
                overflow="hidden"
                borderRadius="10px"
            >
                <StaticImage src="../../assets/connect.jpg" quality={100} alt="Connects" placeholder="blurred" />
            </Box>
            <Box
                width={["100%", "100%", "500px", "500px"]}
                ml={["0", "0", "125px", "125px"]}
            >
                <Title
                    title="MYAC Connects"
                    subtitle="Always Up To Something"
                    align="left"
                    subColor="blue.500"
                    color="black.900"
                />
                <Text
                    color="gray.500"
                    fontSize="xl"
                    fontWeight="400"
                    mt="30px"
                    lineHeight="1.5em"
                >
                    MYAC Connects are a great way to meet new people and get
                    involved in your community. Come out on the second Wednesday
                    of every month to meet new people, network, and find new
                    opportunities.
                </Text>
                <Box mt="30px">
                    <Link to="/events">
                        <Button
                            colorScheme="blue"
                            rightIcon={<ArrowForwardIcon />}
                            fontSize="18px"
                            variant="outline"
                            height="50px"
                        >
                            View Our Events
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Connects
