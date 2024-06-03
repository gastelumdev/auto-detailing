import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import { email, navItems } from '../config'
import Services from './Services'
import About from './About'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <Navbar links={navItems}>
      <Box>
        <Hero email={email} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </Navbar>
  )
}

export default Home