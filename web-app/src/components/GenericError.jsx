import { Box, Image, Text } from "@chakra-ui/react";
import errorCarImage from "../assets/error.png";

const GenericError = ({ errorMessage }) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src={errorCarImage} alt="Error" mx="auto" boxSize="60%" />
      <Text mt={3} mb={2} fontSize="lg" lineHeight="short">
        Oops! An error occurred.
      </Text>
      <Text color={"gray.500"}>
        {errorMessage || "Something went wrong. Please try again later."}
      </Text>
    </Box>
  );
};

export default GenericError;
