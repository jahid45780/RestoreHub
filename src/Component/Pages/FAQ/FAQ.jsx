import { motion } from "framer-motion";
import React from "react";

// Custom animation variants
const faqVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1]  // Custom cubic-bezier easing
    }
  }
};

const summaryVariants = {
  initial: {
    color: "#000"
  },
  hover: {
    color: "#6D28D9", // Dark violet on hover
    transition: {
      duration: 0.3
    }
  }
};

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <section className="bg-white  dark:text-black mt-10">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-center">Popular Frequently Asked Questions</h2>
        <p className="mt-4 mb-8 text-center text-[#656565] ">
       <span className=" text-green-500  text-2xl font-bold" >  Simply Good Food </span> prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?
        </p>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full shadow-lg "
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <motion.summary
                className="px-4 py-6 text-lg font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-violet-600 dark:focus-visible:ring-violet-300"
                initial="initial"
                whileHover="hover"
                variants={summaryVariants}
              >
                {item.question}
              </motion.summary>

              <motion.div
                initial="closed"
                animate={expanded === index ? "open" : "closed"}
                variants={faqVariants}
              >
                <motion.p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  {item.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ data
const faqItems = [
  {
    question: "What is the best way to get started with your services?",
    answer: "To get started, sign up on our platform and select the service that fits your needs."
  },
  {
    question: "How can I track my order status?",
    answer: "You can track your order in real-time through your account dashboard or email updates."
  },
  {
    question: "What is your refund and return policy?",
    answer: "We offer a 30-day refund policy on all purchases. Contact us for more information."
  },
  {
    question: "Can I upgrade my plan at any time?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "What are the foods like Steel Yat? How does the mail plan work?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "How Do I Eat Fresh and Lean?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "How long do my meals last?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "What if I don't eat them all at once?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "What if I don't eat them all at once?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  },
  {
    question: "What are the foods like Steel Yat? How does the mail plan work?",
    answer: "Yes, you can upgrade your plan at any time via your account settings."
  }
];

export default FAQ;
