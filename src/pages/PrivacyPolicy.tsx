import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';
import { businessName, email, phoneNumber, phoneNumberText } from '../config';

function PrivacyPolicy() {
  return (
    <Box py={16} px={16} bg="gray.100">
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={4}>Privacy Policy</Heading>
        <Text mb={4}>
          Welcome to {businessName}'s Privacy Policy. Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected by {businessName} Auto Detailing and how it is used.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Information We Collect</Heading>
        <Text mb={4}>
          We collect information to provide better services to our users. Here are the types of information we collect:
        </Text>
        <Text mb={2}><strong>Personal Information:</strong> When you contact us, book an appointment, or request a quote, we may collect personal information such as your name, email address, phone number, and vehicle details.</Text>
        <Text mb={2}><strong>Non-Personal Information:</strong> We may collect non-personal information about how you interact with our website. This information may include your browser type, language preference, referring site, and the date and time of each visitor request.</Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>How We Use Information</Heading>
        <Text mb={4}>
          We use the information we collect in the following ways:
        </Text>
        <Text mb={2}><strong>To Provide Services:</strong> We use your personal information to schedule appointments, provide quotes, and offer our detailing services.</Text>
        <Text mb={2}><strong>To Improve Our Services:</strong> Non-personal information helps us understand how our website is used and improve our service offerings.</Text>
        <Text mb={2}><strong>To Communicate:</strong> We may use your contact information to send you updates, promotions, and information about our services.</Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Information Sharing</Heading>
        <Text mb={4}>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. We may share information to comply with legal obligations, protect our rights, or in the following situations:
        </Text>
        <Text mb={2}><strong>With Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery, hosting services, and customer service.</Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Data Security</Heading>
        <Text mb={4}>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Cookies</Heading>
        <Text mb={4}>
          We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Your Choices</Heading>
        <Text mb={4}>
          You can choose to disable cookies through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Third-Party Links</Heading>
        <Text mb={4}>
          Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Children's Privacy</Heading>
        <Text mb={4}>
          Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Changes to This Privacy Policy</Heading>
        <Text mb={4}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Contact Us</Heading>
        <Text mb={4}>
          If you have any questions about this Privacy Policy, please contact us:
        </Text>
        <Text mb={2}><strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link></Text>
        <Text mb={2}><strong>Phone:</strong> <Link href={`tel:${phoneNumber}`}>{phoneNumberText}</Link></Text>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
