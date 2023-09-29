import React, { useState, useEffect } from "react";

const CookieConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Save the user's consent in local storage
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 ${
        showPopup ? "block" : "hidden"
      } bg-white p-4 shadow-md border-t border-gray-300`}
    >
      <div className="max-w-screen-md mx-auto text-center">
        <p className="text-gray-800">
          This website uses cookies to ensure you get the best experience on our
          website.
        </p>
        <button
          onClick={handleAcceptCookies}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
