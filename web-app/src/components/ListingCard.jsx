import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  LinkBox,
  LinkOverlay,
  Box,
} from "@chakra-ui/react";
import CarInfo from "./CarInfo";
import { Link } from "react-router-dom";

export default function ListingCard({ carDetails }) {
  return (
    <LinkBox>
      <Card
        tabIndex={0}
        _hover={{
          shadow: "xl",
        }}
      >
        <CardBody>
          <Image
            src={carDetails?.images?.length ? carDetails.images[0] : ""}
            alt={`${carDetails.make}: ${carDetails.model}`}
            borderRadius="lg"
            width={"100%"}
            height={"225px"}
            objectFit="cover"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              <LinkOverlay as={Link} to={carDetails.id.toString()} href="#">
                {carDetails.make}: {carDetails.model}
              </LinkOverlay>
            </Heading>
            <Text>{carDetails.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {carDetails.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <CarInfo carDetails={carDetails} />
        </CardFooter>
      </Card>
    </LinkBox>
  );
}
