import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Box bg="gray.100" h="100vh" overflow="scroll">
        <NavBar />
        <Container maxW="8xl" py="24">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default App;
