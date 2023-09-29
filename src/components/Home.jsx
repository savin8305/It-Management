import React from "react";
import heroImage from "../Assests/home.jpg"; // Replace with your actual image paths
import Services from "./Services";
import About from "./About";
import FAQPage from "./FAQPage";

const Home = () => {
  // Testimonial data
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      author: "Leroy Jenkins",
    },
    {
      text: "Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.",
      author: "Leroy Jenkins",
    },
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      author: "Leroy Jenkins",
    },
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      author: "Leroy Jenkins",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover mt-4  rounded-3xl  bg-center h-screen flex items-center text-white"
        // style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-blue-400 font-bold mb-4">Welcome to Our IT Company</h1>
          <p className="text-lg text-green-400 mb-8">
            We provide innovative solutions for your digital needs.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-500 hover:bg-indigo-700 py-2 px-6 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <About />
          <a
            href="#services"
            className="text-indigo-500 hover:underline font-medium text-lg"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16" id="services">
        <Services />
      </section>
      
      {/* Testimonial Section */}
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} text={testimonial.text} author={testimonial.author} />
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-indigo-500" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
          <p className="text-lg mb-8 text-white">
            Ready to start a project with us? Reach out to our team.
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-500 hover:bg-indigo-700 py-2 px-6 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

// Reusable Testimonial Component
const Testimonial = ({ text, author }) => (
  <div className="flex flex-col items-center mx-12 lg:mx-0">
    <div className="relative text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="absolute top-0 left-0 w-8 h-8 text-gray-700"
      >
        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
      </svg>
      <p className="px-6 py-1 text-lg italic">{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="absolute bottom-0 right-0 w-8 h-8 text-gray-700"
      >
        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
      </svg>
    </div>
    <span className="w-12 h-1 my-2 rounded-lg bg-violet-400"></span>
    <p>{author}</p>
  </div>
);

export default Home;
