import React from "react"
import { graphql } from "gatsby"

import { Box, Flex, Spacer } from "@chakra-ui/react"

import MySEO from "../../components/SEO"
import Navbar from "../../components/Navbar"
import About from "../../components/About"
import Footer from "../../components/Footer"

import Page404 from "../404"
import MotionBox from "../../components/anim/MotionBox"
import transition from "../../components/anim/Transitions"

const TeamMember = (props) => {
    // Only return an about page if data exists
    if (props.data.airtable) {
        const data = props.data.airtable.data;

        return (
            <MotionBox
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4 }
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.5 }
                }}
            >
                <Flex flexDirection="column" minH="100vh">
                    <MySEO title={`About | ${data.Name}`} />
                    <Navbar />
                    <About
                        img={data.Avatar.localFiles[0].childImageSharp.gatsbyImageData}
                        name={data.Name}
                        position={data.Position}
                        bio={data.Bio}
                        email={data.Email}
                        ig={data.Instagram_Link}
                        animOffset={0.4}
                    />

                    <Spacer />

                    <MotionBox
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.6 }
                        }}
                    >
                        <Footer />
                    </MotionBox>
                </Flex>
            </MotionBox>
        )
    }

    return (
        <Page404 />
    );
}

export const query = graphql`
    query UsingID($id: String!) {
        airtable(table: {eq: "Team"}, id: {eq: $id}) {
            data {
                Bio
                Name
                Position
                Email
                Instagram_Link
                Avatar {
                    localFiles {
                        childImageSharp {
                            gatsbyImageData(height: 500, quality: 100, placeholder: BLURRED)
                        }
                    }
                }
                Route
            }
        }
    }
`

export default TeamMember