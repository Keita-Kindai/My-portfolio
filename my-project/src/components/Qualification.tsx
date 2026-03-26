import { useState } from 'react';

export default function Qualification() {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

  return (
    <section id="qualification" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Qualification</h2>
          <p className="text-blue-600 dark:text-blue-400 text-lg">My Personal Journey</p>
        </div>

        {/* Tabs */}
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-8 mb-12 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('education')}
              className={`pb-4 font-semibold transition-colors ${
                activeTab === 'education'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              📚 Education
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`pb-4 font-semibold transition-colors ${
                activeTab === 'work'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              💼 Work Experience
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'education' && (
              <div className="space-y-8">
                {/* Education Item 1 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mb-4"></div>
                    <div className="w-1 h-24 bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      近畿大学附属高等学校 - 英語特化コース
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Kinki University High School</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">High School Program</p>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      近畿大学 - 情報学部（知能システムコース） 
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Kinki University - Computer Science</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor's Degree (3rd Year)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'work' && (
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Work Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">インターンなどをした際に記載しようと思います</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
