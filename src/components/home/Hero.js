import React from "react"
import { Box, Heading, Button } from "@chakra-ui/react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage, StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    let { hero } = useStaticQuery(graphql`
        query {
            hero: file(relativePath: { eq: "landscape.jpg" }) {
                childImageSharp {
                    gatsbyImageData (
                        width: 2000,
                        quality: 100,
                        placeholder: BLURRED,
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    `)

    hero = getImage(hero);

    return (
        <Box
            height="100vh"
            backgroundColor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <BgImage
                image={hero}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundPosition: "center top",
                }}
                alt="Hero Image"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    px="10px"
                >
                    <Box width={["100px", "200px"]}>
                        <StaticImage src="../../assets/logo.png" placeholder="tracedSVG" />
                    </Box>
                    <Heading
                        color="white"
                        size="2xl"
                        mt="20px"
                        lineHeight="1em"
                    >
                        Mississauga Youth Action Committee
                    </Heading>
                    <Heading color="white" size="md" my="20px" fontWeight="500">
                        We represent the youth of Mississauga. We help, engage,
                        and empower
                    </Heading>
                    <Box my={["25px", "50px"]}>
                        <Link to="/gallery">
                            <Button
                                colorScheme="blue"
                                fontSize="18px"
                                variant="solid"
                                height="50px"
                                data-test-id="cta-button"
                            >
                                View Gallery
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </BgImage>
        </Box>
    )
}

export default Hero
