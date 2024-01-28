import { Box, Skeleton, Stack, SkeletonText } from "@chakra-ui/react";

export default function LoadingSkeleton() {
  return (
    <>
      <Skeleton height="400px" width={{ base: "100%", md: "50%" }} />
      <Stack spacing="5" width={{ base: "100%", md: "50%" }}>
        <Skeleton height="20px" width="70%" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Stack>
    </>
  );
}
