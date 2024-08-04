import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

export const AnimatedComponentUsingChakraUI = (component) => {
  return chakra(motion[component], {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });
};
