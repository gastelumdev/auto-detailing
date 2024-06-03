import { Box, Container, Heading, Text, Link } from '@chakra-ui/react';
import { businessName, email, phoneNumber, phoneNumberText } from '../config';

function TermsOfService() {
  return (
    <Box py={16} bg="gray.100">
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={4}>Terms of Service</Heading>
        <Text mb={4}>
          Welcome to {businessName}'s Terms of Service. These terms and conditions outline the rules and regulations for the use of {businessName} Auto Detailing's website.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Introduction</Heading>
        <Text mb={4}>
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use {businessName}'s website if you do not accept all of the terms and conditions stated on this page.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>License</Heading>
        <Text mb={4}>
          Unless otherwise stated, {businessName} and/or its licensors own the intellectual property rights for all material on {businessName}. All intellectual property rights are reserved. You may view and/or print pages from [website URL] for your own personal use subject to restrictions set in these terms and conditions.
        </Text>
        <Text mb={2}>You must not:</Text>
        <Text mb={2}>- Republish material from [website URL]</Text>
        <Text mb={2}>- Sell, rent, or sub-license material from [website URL]</Text>
        <Text mb={2}>- Reproduce, duplicate, or copy material from [website URL]</Text>
        <Text mb={2}>- Redistribute content from {businessName} (unless content is specifically made for redistribution).</Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>User Comments</Heading>
        <Text mb={4}>
          This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. {businessName} does not screen, edit, publish, or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of {businessName}, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
        </Text>
        <Text mb={4}>
          {businessName} reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Hyperlinking to Our Content</Heading>
        <Text mb={4}>
          The following organizations may link to our website without prior written approval:
        </Text>
        <Text mb={2}>- Government agencies;</Text>
        <Text mb={2}>- Search engines;</Text>
        <Text mb={2}>- News organizations;</Text>
        <Text mb={2}>- Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and</Text>
        <Text mb={2}>- System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website.</Text>
        
        <Text mb={4}>
          These organizations may link to our home page, to publications, or to other website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Content Liability</Heading>
        <Text mb={4}>
          We shall have no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising out of or based upon your website. No link(s) may appear on any page on your website or within any context containing content or materials that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Reservation of Rights</Heading>
        <Text mb={4}>
          We reserve the right at any time and in our sole discretion to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our website, you agree to be bound to and abide by these linking terms and conditions.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Removal of Links from Our Website</Heading>
        <Text mb={4}>
          If you find any link on our website or any linked website objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Disclaimer</Heading>
        <Text mb={4}>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill). Nothing in this disclaimer will:
        </Text>
        <Text mb={2}>- Limit or exclude our or your liability for death or personal injury resulting from negligence;</Text>
        <Text mb={2}>- Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</Text>
        <Text mb={2}>- Limit any of our or your liabilities in any way that is not permitted under applicable law; or</Text>
        <Text mb={2}>- Exclude any of our or your liabilities that may not be excluded under applicable law.</Text>
        <Text mb={4}>
          The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence), and for breach of statutory duty.
        </Text>
        <Text mb={4}>
          To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
        </Text>

        <Heading as="h2" size="xl" mb={4} mt={8}>Contact Us</Heading>
        <Text mb={4}>
          If you have any questions about these Terms of Service, please contact us:
        </Text>
        <Text mb={2}><strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link></Text>
        <Text mb={2}><strong>Phone:</strong> <Link href={`tel:${phoneNumber}`}>{phoneNumberText}</Link></Text>
      </Container>
    </Box>
  );
}

export default TermsOfService;
