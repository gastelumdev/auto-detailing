// src/App.tsx
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const businessName = "Corona Auto Detailing"

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
}

const navItems = [
  {href: "#services", title: "Services"},
  {href: "#about", title: "About Us"},
  {href: "#testimonials", title: "Testimonials"},
  {href: "#contact", title: "Contact"},
]

function Header() {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="md">
            {businessName}
          </Heading>
          <nav>
            <List display="flex" spacing={4}>
              {navItems.map((item) => {
                return <NavItem key={item.href} href={item.href} title={item.title} />
              })}
            </List>
          </nav>
        </Flex>
      </Container>
    </Box>
  );
}

function NavItem({href, title}: {href: string, title: string}) {
  return <ListItem px={"15px"} mt={"16px"}><Link href={href}>{title}</Link></ListItem>
}

function Hero() {
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
        <Button colorScheme="red" size="lg">
          Book Your Appointment Today!
        </Button>
      </Container>
    </Box>
  );
}

function Services() {
  return (
    <Box id="services" py={16} textAlign="center">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Our Services
        </Heading>
        <Stack spacing={8}>
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
    <Box>
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text>{children}</Text>
    </Box>
  );
}

function About() {
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

function Testimonials() {
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

function Contact() {
  return (
    <Box id="contact" py={16} textAlign="center" bg="gray.50">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Contact Us
        </Heading>
        <Text>
          <strong>Phone:</strong> [Phone Number]
        </Text>
        <Text>
          <strong>Email:</strong> [Email Address]
        </Text>
        <Heading as="h3" size="md" mb={4} mt={8}>Business Hours</Heading>
        <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
        <Text>Saturday: 9:00 AM - 4:00 PM</Text>
        <Text>Sunday: Closed</Text>
        <Button colorScheme="red" size="lg" mt={8}>
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

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Container maxW="container.xl" textAlign="center">
        <Text>
          © {new Date().getFullYear()} {businessName} | <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
        </Text>
      </Container>
    </Box>
  );
}

export default App;
