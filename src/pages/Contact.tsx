import { Box, Button, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { email, phoneNumber, phoneNumberText } from '../config';

const Contact = () => {
  return (
    <Box id="contact" py={16} textAlign="center" bg="gray.50">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Contact Us
        </Heading>
        <Text>
          <strong>Phone:</strong> <a href={`tel:${phoneNumber}`}>{phoneNumberText}</a>
        </Text>
        <Heading as="h3" size="md" mb={4} mt={8}>Business Hours</Heading>
        <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
        <Text>Saturday: 9:00 AM - 4:00 PM</Text>
        <Text>Sunday: Closed</Text>
        <Button as={"a"} colorScheme="red" size="lg" mt={8} href={`mailto:${email}`}>
          Contact Us for a Free Quote!
        </Button>
        <Flex justify="center" mt={8}>
          <Link href="#" mx={2}>Facebook</Link>
          <Link href="#" mx={2}>Instagram</Link>
          <Link href="#" mx={2}>Twitter</Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact