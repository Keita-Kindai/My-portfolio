export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
          <p className="text-blue-600 dark:text-blue-400 text-lg">My Introduction</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/img/selfie_2.jpeg"
              alt="About me"
              className="max-w-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              近畿大学情報学部3年生の竹内慶大（けいた）といいます。ウェブアプリケーション開発からネットワーク、機械学習などいろいろなことを触れながら勉強を進めています。
              ウェブアプリケーション開発ではフロントでは主にReact、TailwindCSSを用いて開発し、バックエンド（データベース含む）ではPostgreSQLやPythonのFastAPIなどを
              活用した経験があります。機械学習ではPyTorchやYOLOを通して通行量の取得、画像識別器、強化学習のエージェントなどを作成した経験があります。
              また、英語でのコミュニケーションも問題なくすることができます。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">7</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">今までの開発数</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3.63</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">大学の通算GPA</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.0</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">IELTS Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
