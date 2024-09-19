import React, { useEffect, useState } from "react"
import { Container, MainContainer } from "./style"
import Vec from "../../../assets/Addition.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Faq() {
    useEffect(() => {
        Aos.init({
           offset: 120,
           easing: "ease",
           duration: 500,
           once: true,
           mirror: false,
           anchorPlacement: "top-bottom",
        });
     }, []);
    const [openIndex, setOpenIndex] = useState(null)
    const toogle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const faqData = [
        {
            question: ' So, what exactly is Vynt?',
            answer: "Great question! Vynt is Africa's premier thrift fashion marketplace, where you can score amazing second-händ fashion finds, from unique thrifted pieces to trendy accessories.Think of it as the ultimate digital treasure hunt for sustainable fashion lovers."
        },
        {
            question: 'How does Vynt work?',
            answer: "Super easy! Sellers list their pre-loved (or brand new!) fashion items, and buyers browse, shop, and get these gems delivered to their door. It's a win-win - less waste, more style! Just download the app, and let the thrifting adventure begin!"
        },
        {
            question: 'When can I start shopping on Vynt?',
            answer: "Hold tight! We're putting the final touches on your dream thrifting experience. Sign up for our waitlist, and you'll be the FIRST to know when we launch. You won't want to miss it!"
        },
        {
            question: 'Why should I thrift on Vynt instead of buying new?',
            answer: "Glad you asked! Thrifting on Vynt is not only kinder on your wallet, but also kinder on the planet. By shopping second-hand, you're reducing fashion waste, supporting a circular Activate Wideconomy, and getting one-of-a-kind pieces that you won't find in regular stores."
        },
        {
            question: 'How do I sign up for the waitlist?',
            answer: "Easy! Just drop your email in the sign-up box above, and you're all set! You'll be the first to know when we launch, and we might even throw in some exclusive goodies for early birds."
        },
        {
            question: 'What can I sell on Vynt?',
            answer: "You can sell pre-loved (or even brand new!) clothing, shoes, accessories, and all things fashion. Got a vintage jacket, trendy sneakers, or a quirky hat that needs a new home? Vynt's the place to list it!"
        },
        {
            question: 'Do I have to sell only second-hand stuff?',
            answer: "Nope! While we're all about sustainability, we also love a good brand-new piece. So if you've got tags-still-on items or clothes you bought but never wore (we've all been there ©), go ahead and list them. As long as it's fashion-related, you can sell it!"
        }
         
    ]
    return(
        <MainContainer>
            <Container data-aos="fade-up" data-aos-delay="200">
                <div>
                    <h1>Frequently Asked Questions</h1>
                    <p>Find questions and answers related to the design system, purchase, updates, and support.</p>
                </div>
                <div>
                {
                    faqData.map((qa, index) => (
                        <div className='qa_container' key={index}>
                            <div className='question'>
                                <h2 onClick={() => toogle(index)}>{qa.question}</h2>
                                <button onClick={() => toogle(index)} className='faq_icon'>
                                    {openIndex === index ? <span>-</span> : <img src={Vec} alt="" /> }
                                </button>
                            </div>
                            {openIndex === index && <div className='answer'><p>{qa.answer}</p></div>}
                        </div>
                    ))
                }
                </div>
            </Container>
        </MainContainer>
    )
}

export default Faq