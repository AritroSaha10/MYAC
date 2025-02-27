import { Box, forwardRef } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
import React from "react"

const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            // do not pass framer props to DOM element
            Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
        )
        return <Box ref={ref} {...chakraProps} />
    }),
)

export default MotionBox;