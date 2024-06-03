import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { businessName } from '../config';

const Testimonials = () => {
  return (
    <Box id="testimonials" py={16} textAlign="center">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          What Our Customers Say
        </Heading>
        <VStack spacing={4}>
          <Testimonial>
            "Incredible service! My car looks brand new." - John D.
          </Testimonial>
          <Testimonial>
            "Highly recommend {businessName} for their attention to detail and professionalism." - Sarah K.
          </Testimonial>
          <Testimonial>
            "Best detailing service I've ever used!" - Michael P.
          </Testimonial>
        </VStack>
      </Container>
    </Box>
  );
}

function Testimonial({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Text fontStyle="italic">"{children}"</Text>
    </Box>
  );
}

export default Testimonials