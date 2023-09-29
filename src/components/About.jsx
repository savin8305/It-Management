import React, { useRef } from "react";
import logo from "../Assests/left.webp";
const About = () => {
  const imageRef = useRef(null);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center p-4">
        {/* Left side: Image */}
        <div className="w-full sm:w-1/2 sm:pr-4">
          <img
            src={logo}
            alt="Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right side: Information */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">
            Innovative IT Solutions Tailored to Your Business Needs
          </h2>
          <p className="text-2Xl text-gray-600">
            <strong className="text-3xl text-yellow-300">UPSYS</strong> you are
            partnering with an IT company that not only understands technology
            but also understands your business. We're here to elevate your
            business to new heights through innovation, vision, and a relentless
            commitment to your success.
          </p>
          <p className="text-2Xl text-gray-600">
            <strong className="text-3xl text-yellow-300">Our Vision</strong> Our
            vision is to empower businesses of all sizes and industries by
            harnessing the full potential of technology. We believe that
            technology should be an enabler, not a barrier. Our vision is to
            create a world where businesses thrive in a digitally connected
            ecosystem, achieving unprecedented success through smart, scalable,
            and sustainable IT solutions.
          </p>
          <p className="text-2Xl text-gray-600">
          <strong className="text-3xl text-yellow-300">Our Approach</strong>we work closely with you to craft IT strategies and systems that
            align perfectly with your goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
