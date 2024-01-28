import React, { useContext } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  Box,
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
import DetailsLoader from "../../components/DetailsLoader";
import GenericError from "../../components/GenericError";

export default function DetailsPage() {
  const { isSignedIn, setAuthToken } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { carDetails } = useLoaderData();

  return (
    <Box padding="6">
      <Stack direction={{ base: "column", md: "row" }} spacing="24px">
        <React.Suspense fallback={<DetailsLoader />}>
          <Await resolve={carDetails} errorElement={<GenericError />}>
            {(carDetails) => {
              return (
                <>
                  <Card flex={2}>
                    <Image
                      src={
                        carDetails?.images?.length ? carDetails.images[0] : ""
                      }
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
                              Wanna Trade-in? Sign in
                            </Text>
                            <GoogleLogin
                              onSuccess={(credentialResponse) => {
                                setAuthToken(credentialResponse.credential);
                                onOpen();
                              }}
                              onError={() => {}}
                            />
                          </Stack>
                        </>
                      )}
                    </CardFooter>
                  </Card>
                </>
              );
            }}
          </Await>
        </React.Suspense>
      </Stack>
    </Box>
  );
}
