import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
          <p className="text-blue-600 dark:text-blue-400 text-lg">Contact Information</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FiMail className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">Get in touch via email</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">Available for inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Japan</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/ritemosu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/takeuchi__1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
                >
                  <FiInstagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCIViC_EJe38md0pPc74QReg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
                >
                  <FiYoutube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always interested in learning about new projects and opportunities. Feel free to reach out!
            </p>
            <a
              href="https://www.youtube.com/channel/UCIViC_EJe38md0pPc74QReg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Visit My YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
