import React, { useContext } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  Flex,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import CarInfo from "../../components/CarInfo";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../../contexts/AuthContext";
import CarTradingModal from "../../components/CarTradinModal";

export default function DetailsPage() {
  const { isSignedIn, setAuthToken } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { carDetails } = useLoaderData();

  return (
    <React.Suspense fallback={"loading...."}>
      <Await
        resolve={carDetails}
        errorElement={<div>Could not load detail 😬</div>}
      >
        {(carDetails) => {
          return (
            <Flex gap="8" flexWrap="wrap">
              <Card flex={2}>
                <Image
                  src={carDetails?.images?.length ? carDetails.images[0] : ""}
                  alt={`${carDetails.make}: ${carDetails.model}`}
                  borderRadius="lg"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                />
              </Card>
              <Card flex={1}>
                <CardBody>
                  <Flex direction="column" gap={2}>
                    <Heading size="2xl">
                      {carDetails.make}: {carDetails.model}
                    </Heading>
                    <Text size="lg">{carDetails.description}</Text>
                    <Text color="blue.600" fontSize="lg">
                      {carDetails.price}
                    </Text>
                    <CarInfo carDetails={carDetails} />
                  </Flex>
                </CardBody>
                <CardFooter>
                  {isSignedIn && (
                    <CarTradingModal
                      isOpen={isOpen}
                      onOpen={onOpen}
                      onClose={onClose}
                    />
                  )}
                  {!isSignedIn && (
                    <>
                      <Stack alignItems="center" flex={1}>
                        <Text size="md" fontWeight="600">
                          Wanna Trade In?
                        </Text>
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            setAuthToken(credentialResponse.credential);
                            onOpen();
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </Stack>
                    </>
                  )}
                </CardFooter>
              </Card>
            </Flex>
          );
        }}
      </Await>
    </React.Suspense>
  );
}