import { useState, useContext } from "react";
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
import { AuthContext } from "../contexts/AuthContext";

export default function CarTradingForm({ onSubmitSuccess }) {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    make: "",
    name: user.name,
    email: user.email,
    contact: "",
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
      toast({
        position: "top",
        title: "Form submitted.",
        description:
          "We've received your car information. We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onSubmitSuccess();
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

    if (formData.images.length === 0) {
      errors.images = "Please upload at least one image of the car.";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired isInvalid={formErrors.contact}>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Simple pattern for a phone number like 123-456-7890
            placeholder="123-456-7890"
          />
          {formErrors.contact && (
            <FormErrorMessage>{formErrors.contact}</FormErrorMessage>
          )}
        </FormControl>

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

        <FormControl isRequired isInvalid={formErrors.images}>
          <FormLabel>Images</FormLabel>
          <Input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            accept="image/*"
          />
          {formErrors.images && (
            <FormErrorMessage>{formErrors.images}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
