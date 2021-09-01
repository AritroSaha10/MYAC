import React from "react"
import { Box } from "@chakra-ui/react"

import MySEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Hero from "../components/home/Hero"
import Objectives from "../components/home/Objectives"
import Summary from "../components/home/Summary"
import Connects from "../components/home/Connects"
// import Slant from "../components/home/Slant"
// import Anchor from "../components/home/Anchor"

import MotionBox from "../components/anim/MotionBox"

export default function Home() {
    return (
        <MotionBox
            backgroundColor="gray.800"
            overflow="hidden"
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
            <MySEO title="MYAC | Home" />
            <Navbar>
                {/* <Anchor name="Objectives" url="#objectives" />
                <Anchor name="About" url="#about" />
                <Anchor name="Connects" url="#connects" /> */}
            </Navbar>
            <Hero />
            <Objectives />
            <Summary />
            {/* <Slant
                bg="gray.800"
                c1="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(88,105,139,1) 35%, rgba(28,35,48,1) 100%)"
                c2="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(68,82,109,1) 35%, rgba(28,35,48,1) 100%)"
                c3="linear-gradient(90deg, rgba(28,35,48,1) 0%, rgba(48,58,78,1) 35%, rgba(28,35,48,1) 100%)"
            /> */}
            <Connects />
            <Footer />
        </MotionBox>
    )
}
