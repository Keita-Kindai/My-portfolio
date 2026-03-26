import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    frontend: true,
  });

  const getLevelColor = (level: string): string => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'text-green-500';
      case 'intermediate':
        return 'text-yellow-500';
      case 'advanced':
        return 'text-red-500';
      default:
        return 'text-white';
    }
  };

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      years: '2 years',
      skills: [
        { name: 'HTML', level: 'Advanced', description: '1年生の頃から開発経験あります' },
        { name: 'CSS', level: 'Advanced', description: '同様に1年生の頃から経験あります' },
        { name: 'JavaScript', level: 'Intermediate', description: 'JavaScriptを使い動的なサイトを作成できます' },
        { name: 'React', level: 'Intermediate', description: '2025年から学び始め、いくつか開発に使いました' },
        { name: 'Tailwind CSS', level: 'Advanced', description: '基本的にTailwindCSSを使いデザインをしています' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      years: '6 months',
      skills: [
        { name: 'Python', level: 'Intermediate', description: 'APIを使ったものから機械学習に頻繁に利用しています' },
        { name: 'PostgreSQL', level: 'Intermediate', description: 'こちらは2年生終わりの時に学び始め、基礎的な操作は一通りできます' },
        { name: 'Flask', level: 'Beginner', description: 'ほとんど開発経験がありませんが、基礎的な使い方は理解しています' },
        { name: 'FastAPI', level: 'Intermediate', description: '開発経験があります' },
        { name: 'C++', level: 'Beginner', description: '競技プログラミグで使用している言語です' },
      ],
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      years: '6 months',
      skills: [
        { name: 'PyTorch', level: 'Intermediate', description: '識別器の作成や最近は強化学習の勉強に使っています' },
        { name: 'YOLO', level: 'Beginner', description: '一度だけYOLOを使って交通量の多さを測るプログラムを作成したことがあります' },
      ],
    },
  ];

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
          <p className="text-blue-600 dark:text-blue-400 text-lg">My Technical Expertise</p>
        </div>

        {/* Skills Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ({category.years})
                  </span>
                </div>
                <FiChevronDown
                  className={`transition-transform ${
                    expandedCategories[category.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {expandedCategories[category.id] && (
                <div className="accordion-open px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
