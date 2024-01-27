import { Box, Text, Icon } from "@chakra-ui/react";

export default function CarFeature({ label, value, icon }) {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={icon} mr={2} w={5} h={5} />
      <Text fontWeight="semibold">{label}:</Text>
      <Text ml={1}>{value}</Text>
    </Box>
  );
}
