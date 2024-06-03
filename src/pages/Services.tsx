import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const Services = () => {
  return (
    <Box id="services" py={16} textAlign="center">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Our Services
        </Heading>
        <Stack spacing={8} direction={{base: 'column', md: 'row'}}>
          <ServiceItem title="Exterior Detailing">
            Thorough cleaning, polishing, and protection for your car's exterior.
          </ServiceItem>
          <ServiceItem title="Interior Detailing">
            Deep cleaning, conditioning, and deodorizing of your vehicle's interior.
          </ServiceItem>
          <ServiceItem title="Paint Protection">
            Advanced coatings to keep your paint job looking fresh and new.
          </ServiceItem>
          <ServiceItem title="Engine Cleaning">
            Professional cleaning to keep your engine in top shape.
          </ServiceItem>
          <ServiceItem title="Headlight Restoration">
            Clear and restore foggy or yellowed headlights.
          </ServiceItem>
          <ServiceItem title="Ceramic Coating">
            Long-lasting protection with a glossy finish.
          </ServiceItem>
        </Stack>
      </Container>
    </Box>
  );
}

function ServiceItem({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Box w={{base: "auto", md: "300px"}}>
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text>{children}</Text>
    </Box>
  );
}

export default Services