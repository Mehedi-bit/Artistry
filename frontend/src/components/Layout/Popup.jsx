import React, { useEffect, useState } from 'react';

const company = "Haven Team👋";

const popupMessages = [
  "Stylish bags, fresh arrivals! 👜",
  "New jewelry just dropped! 💎",
  "Exclusive handmade dresses now available! 👗",
  "Crafted purses for every occasion! 🛍️",
  "Beautiful ceramics in stock! 🏺",
  "Handwoven scarves are here! 🌸",
  "Unique mirrors, handmade with love! 🤍",
  "Elegant pottery just arrived! 🍶",
  "Handcrafted necklaces, perfect for gifting! ✨",
  "All-new handmade wallets! 🖐️",
  "Holiday gifts crafted with care! 🎁",
  "Eco-friendly bags just in! 🌿",
  "Spring collection is here—shop now! 💐",
  "Autumn specials: cozy handmade wraps! 🍂",
  "Custom ceramics now available! 🛠️",
  "New crochet designs in stock! 🧶",
  "Hand-tied bows, now in vibrant colors! 🎀",
  "Artisan embroidery bags now available! 🧵",
  "Connect artisans—shop handmade today! ❤️",
  "Handmade for your unique style! 🌟"
];


const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    // Randomly select a message
    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * popupMessages.length);
      return popupMessages[randomIndex];
    };

    setCurrentMessage(getRandomMessage());

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000); // Hide after 20 seconds

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-10 right-10 z-50 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="relative rounded-lg shadow-lg bg-black text-white cursor-pointer">
          <button
            onClick={closePopup}
            className="absolute -end-2 -top-2 rounded-full bg-white p-2"
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex items-center gap-4 p-4">
            <img
              alt=""
              src="https://img.freepik.com/premium-vector/traditional-arabic-man-head-icon-vector-avatar_55610-6301.jpg"
              className="w-12 h-12 rounded-lg object-cover"
            />

            <div>
              <p className="font-medium"> {company} </p>

              <p className="line-clamp-1 text-sm">
                {currentMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
