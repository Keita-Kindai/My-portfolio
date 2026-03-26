import { FiChevronDown, FiGithub } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com/ritemosu1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://twitter.com/ritemosu1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub />
              </a>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Keita
            </h1>
            <h3 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              Student
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              TOEIC: 890 (L: 475, R: 415) <br />
              IELTS: 7.0 (L: 7.5, R: 8.0, S: 6.5, W: 6.0) <br />
              AtCoder Algorithm: 973 <br />
              Frontend: HTML/CSS/JavaScript(React, Nextjs) <br />
              Backend: Python(Flask, FastAPI, PyTorch)
            </p>
          </div>

          {/* Image with Blob */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Profile Image */}
              <img
                src="/img/selfie_1.jpg"
                alt="Keita"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => handleScroll('about')}
            className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
          >
            <span className="text-sm font-semibold">Scroll down</span>
            <FiChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
