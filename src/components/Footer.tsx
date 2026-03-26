import { FiGithub } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Keita</h3>
            <p className="text-sm text-gray-400">Web Developer & Student</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#qualification" className="hover:text-blue-400 transition-colors">
                  qualification
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            Made with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
