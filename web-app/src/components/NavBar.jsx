import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex
      position="fixed"
      width="100%"
      zIndex={1}
      bg="black"
      color="white"
      px={5}
      py={3}
      align="center"
    >
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold">
          App Banner
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Link px={2} href="#">
          Home
        </Link>
      </Box>
    </Flex>
  );
}

export default NavBar;
