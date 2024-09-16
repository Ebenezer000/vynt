import Footer from "./layout/footer/main/main"
import Navbar from "./layout/header/nav/main"
import Faq from "./layout/Landing/Faq/main"
import Hero from "./layout/landing/home/hero"
import JoinUs from "./layout/Landing/joinus/main"
import Testimonials from "./layout/Landing/testimonials/main"


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <JoinUs/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
