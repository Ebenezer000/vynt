import Footer from "./layout/footer/main/main"
import Navbar from "./layout/header/nav/main"
import Faq from "./layout/landing/Faq/main"
import Hero from "./layout/landing/home/hero"
import JoinUs from "./layout/landing/joinus/main"
import Testimonials from "./layout/landing/testimonials/main"


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
