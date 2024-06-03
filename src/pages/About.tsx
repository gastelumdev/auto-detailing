import { Box, Container, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { businessName } from '../config';

const About = () => {
  return (
    <Box id="about" py={16} textAlign="center" bg="gray.50">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          About {businessName}
        </Heading>
        <Text mb={4}>
          We are passionate about cars and committed to providing the best detailing services in Los Angeles. With years of experience and a team of dedicated professionals, we take pride in making your vehicle look and feel like new.
        </Text>
        <Heading as="h3" size="md" mb={4}>Why Choose Us?</Heading>
        <List spacing={2} styleType="disc" textAlign="left" display="inline-block">
          <ListItem>Experienced and Skilled Technicians</ListItem>
          <ListItem>High-Quality Products and Equipment</ListItem>
          <ListItem>Exceptional Customer Service</ListItem>
          <ListItem>Satisfaction Guaranteed</ListItem>
        </List>
      </Container>
    </Box>
  );
}

export default About