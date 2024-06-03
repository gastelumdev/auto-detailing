import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

const Hero = ({email}: {email: string}) => {
  return (
    <Box
      bgImage="url('/car.jpg')"
      bgPos="center"
      bgSize="cover"
      color="white"
      textAlign="center"
      py={20}
    >
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" mb={4}>
          Revitalize Your Ride with Our Expert Detailing Services
        </Heading>
        <Text fontSize="xl" mb={8}>
          Top-notch care for your vehicle, guaranteed satisfaction!
        </Text>
        <Button as="a" colorScheme="red" size="lg" href={`mailto:${email}`}>
          Book Your Appointment Today!
        </Button>
      </Container>
    </Box>
  );
}

export default Hero