import React, { useState } from "react"
import { Container, MainContainer } from "./style"
import Vec from "../../../assets/Addition.svg";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null)
    const toogle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const faqData = [
        {
            question: 'What are the recent updates and enhancements in AlignUI?',
            answer: 'Udaralinks specializes in providing a wide range of financial services including money transfers, foreign exchange, virtual currency, and payment services.'
        },
        {
            question: 'QWhat are the recent updates and enhancements in AlignUI?',
            answer: 'Yes, Udaralinks is a licensed Money Services Business (MSB) in British Columbia, Canada. We operate under the regulatory guidelines and ensure compliance to provide safe and secure financial solutions to our clients.'
        },
        {
            question: 'What are the recent updates and enhancements in AlignUI?',
            answer: 'To transfer money, simply create an account on the Udaralinks website or mobile app. Once registered, you can initiate a transfer by providing the necessary details such as the recipient"s information and the desired amount. Our platform will guide you through the process step-by-step.'
        },
        {
            question: 'What are the recent updates and enhancements in AlignUI?',
            answer: 'The duration of a money transfer depends on various factors such as the destination country, the selected transfer method, and any additional security measures. However, we strive to ensure the fastest possible processing times and provide an estimated delivery time for each transfer.'
        },
        {
            question: 'What are the recent updates and enhancements in AlignUI?',
            answer: 'Absolutely. We prioritize the security and privacy of our users" information. Our platform utilizes encryption protocols and robust security measures to safeguard your personal and financial data.'
        },
        {
            question: 'Can I use AlignUI Design System for commercial projects?',
            answer: 'Yes, you can easily track the status of your money transfer by logging into your Udaralinks account. Our system provides real-time updates on the progress of your transaction.'
        }
    ]
    return(
        <MainContainer>
            <Container>
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