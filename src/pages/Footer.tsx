import { Box, Container, Link, Text } from '@chakra-ui/react';
import { businessName } from '../config';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Container maxW="container.xl" textAlign="center">
        <Text>
          © {new Date().getFullYear()} {businessName} | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer