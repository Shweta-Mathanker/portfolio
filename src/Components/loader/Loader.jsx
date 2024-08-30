import React, { useState, useEffect } from 'react';

const words = ["Hello...", "Hey...", "नमस्ते...", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ...", "Vanakkam..."];

const Loader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLifting, setIsLifting] = useState(false);

  // Handle word changes every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  // Delay the start of lifting animation by 3 seconds
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLifting(true);
    }, 3000); // 3 seconds delay before animation starts

    return () => clearTimeout(timerId); // Cleanup on component unmount
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-zinc-950 z-50 transition-transform duration-1000 ${
        isLifting ? 'animate-lift' : ''
      }`}
    >
      <div className='absolute text-center text-3xl text-white font-bold'>
        {words[currentWordIndex]}
      </div>
    </div>
  );
};

export default Loader;
