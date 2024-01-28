import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

export default function CarTradingForm() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    price: "",
    images: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form Data Submitted:", formData);
      toast({
        title: "Form submitted.",
        description: "We've received your car information.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    const currentYear = new Date().getFullYear();
    if (
      formData.year &&
      (formData.year < 1885 || formData.year > currentYear)
    ) {
      errors.year = `Year must be between 1885 and ${currentYear}`;
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Make</FormLabel>
          <Input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Model</FormLabel>
          <Input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired isInvalid={formErrors.year}>
          <FormLabel>Year</FormLabel>
          <NumberInput>
            <NumberInputField
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </NumberInput>
          <FormErrorMessage>{formErrors.year}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Mileage (in miles)</FormLabel>
          <NumberInput>
            <NumberInputField
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Condition</FormLabel>
          <Select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >
            <option value="">Select condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Asking Price ($)</FormLabel>
          <NumberInput>
            <NumberInputField
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Images</FormLabel>
          <Input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
