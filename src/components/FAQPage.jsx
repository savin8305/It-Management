import React, { useState } from "react";
import logo from "../Assests/logo.png"; // Replace with your company logo

const FAQPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6">
          {/* Left side: Company Logo */}
          <div className="md:w-1/3 p-4">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right side: FAQ */}
          <div className="md:w-2/3 mt-8 md:mt-0">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {/* single Faq */}
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <button
              className="w-full p-4 bg-white text-left focus:outline-none"
              onClick={() => toggleTab(index)}
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              {activeTab === index ? (
                <svg
                  className="h-6 w-6 text-gray-500 transform rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === index && (
              <div className="p-4">
                <p className="text-base text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you're returning the item.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only offer shipping within the United States.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, PayPal, and offer cash on delivery as a payment method.",
  },
];

export default FAQPage;
