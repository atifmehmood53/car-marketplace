import { Box } from "@chakra-ui/react";
import { FiTrendingUp, FiCalendar } from "react-icons/fi";
import { MdInvertColors } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import CarFeature from "./CarFeature";

export default function CarInfo({ carDetails }) {
  return (
    <>
      <Box flex={1} mr={2}>
        <CarFeature
          label="Mileage"
          value={carDetails.mileage}
          icon={FiTrendingUp}
        />
        <CarFeature label="Year" value={carDetails.year} icon={FiCalendar} />
        <CarFeature
          label="Color"
          value={carDetails.color}
          icon={MdInvertColors}
        />
      </Box>
      <Box flex={1}>
        <CarFeature
          label="Fuel Type"
          value={carDetails.fuelType}
          icon={BsFuelPump}
        />
        <CarFeature
          label="Transmission"
          value={carDetails.transmission}
          icon={GiGearStickPattern}
        />
      </Box>
    </>
  );
}
