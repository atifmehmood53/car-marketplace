import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

function ListingLoader() {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Skeleton height="200px" />
      <Stack mt="4">
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
        <SkeletonText noOfLines={3} spacing="4" />
      </Stack>
    </Box>
  );
}

export default ListingLoader;
