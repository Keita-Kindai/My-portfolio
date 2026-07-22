import { FiGithub } from 'react-icons/fi';
import { SiKaggle, SiQiita, SiZenn } from 'react-icons/si';
import { socialLinks } from '../data/socialLinks';

const socialProfiles = [
  { label: 'GitHub', href: 'https://github.com/Keita-Kindai', icon: FiGithub },
  { label: 'Qiita', href: socialLinks.qiita, icon: SiQiita },
  { label: 'Zenn', href: socialLinks.zenn, icon: SiZenn },
  { label: 'Kaggle', href: socialLinks.kaggle, icon: SiKaggle },
];

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
              {socialProfiles.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}のプロフィールを開く`}
                  title={label}
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
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
