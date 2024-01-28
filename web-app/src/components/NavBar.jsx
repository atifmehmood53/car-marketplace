import {
  Box,
  Flex,
  Text,
  Avatar,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function NavBar() {
  const { user, isSignedIn, logout, setAuthToken } = useContext(AuthContext);

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
          <Link to="/">Car Marketplace</Link>
        </Text>
      </Box>
      <Spacer />
      <Box>
        {isSignedIn && (
          <Menu>
            <MenuButton>
              <Avatar name={user.name} src={user.picture} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logout}>
                <Text color="black">Logout</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {!isSignedIn && (
          <Menu>
            <MenuButton>Login</MenuButton>
            <MenuList>
              <MenuItem>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    setAuthToken(credentialResponse.credential);
                  }}
                  onError={() => {}}
                />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
}

export default NavBar;
