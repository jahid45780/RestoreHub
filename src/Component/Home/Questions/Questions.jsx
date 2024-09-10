import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there any special discounts or promotions available during the event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "What are the dates and locations for the product launch events?",
      answer: "Content for question 2",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Content for question 3",
    },
    {
      question: "How can I register for the event?",
      answer: "Content for question 4",
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Content for question 5",
    },
    {
      question: "How can I contact the event organizers?",
      answer: "Content for question 6",
    },
  ];

  return (
    <div className="font-[sans-serif] divide-y rounded-lg max-w-7xl   px-4 mx-auto">

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mt-7"> Popular Frequently Asked Questions </h2>
        <p className=' text-lg text-center mt-6' > Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service? </p>
      </div>
      {faqs.map((faq, index) => (
        <div 
        key={index} role="accordion">
          <button
          data-aos="fade-up"
           data-aos-duration="3000"
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center justify-center mx-auto"
            onClick={() => toggleFAQ(index)}
          >
            <span className="mr-4">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 fill-current ml-auto shrink-0"
              viewBox="0 0 42 42"
            >
              <path
                d={openIndex === index ? "M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" 
                : "M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                }
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="py-4">
              <p className="text-sm text-gray-800">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
