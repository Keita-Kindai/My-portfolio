import networkImg from '../../public/img/network.png';
import englishWebImg from '../../public/img/english_web.png';
import bookShareImg from '../../public/img/book-share.png';
import presentationImg from '../../public/img/presantation.jpeg';
import contestImg from '../../public/img/contest.png';
import atcoderImg from '../../public/img/atcoder.png';
import giikuImg from '../../public/img/giiku.png';
import icpcResultImg from '../../public/img/ICPC_result.png';
import bookRecommenderImg from '../../public/img/book-recommender.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: '食べ物識別器',
      description: 'PyTorchを用いて写真をアップロードしたら寿司、ステーキ、ピザのどれかを判定しれくれるプログラム（モデル）です。',
      image: networkImg,
      link: 'https://huggingface.co/spaces/Litms/second_project',
    },
    {
      id: 2,
      title: '英会話教室ウェブサイト',
      description: '友人から依頼を受けた際に作成したものです。シンプルなホームページとなっています。',
      image: englishWebImg,
      link: 'https://be-and-me.jp/',
    },
    {
      id: 3,
      title: '読書感想共有サイト',
      description: '読んだ書籍の感想や情報を気軽に投稿でき、その人がどんな本を読んできたのかがわかります。',
      image: bookShareImg,
      link: 'https://github.com/Keita-Kindai/booksharing',
    },
    {
      id: 4,
      title: '近大ハッカソン近大共創賞受賞',
      description: '近畿大学でハッカソン（AIを用いたアイデアソン）が行われ、そこで賞を受賞しました。また、それに関してインタビューを受けました。',
      image: presentationImg,
      link: 'https://www.businessinsider.jp/article/2512-kinki-university-open-ai/'
    },
    {
      id: 5,
      title: '学内競技プログラミングコンテスト開催',
      description: '友人と二人でPolygonで問題作成をし、DockerとDOMJudgeを用いて学内コンテストを開催しました!',
      image: contestImg,
      link: 'https://github.com/hamikan/Kindai_contest'
    },
    {
      id: 6,
      title: 'AtCoderレーティング緑',
      description: '2025年に競技プログラミングを始め、現在は973に到達しました',
      image: atcoderImg,
      link: 'https://atcoder.jp/users/Litms'
    },
    {
      id: 7,
      title: '技育キャンプハッカソン参加',
      description: '去年の11月ごろに初めてハッカソンに参加しました。そこでは魅力的なToDoアプリを作成しました',
      image: giikuImg,
      link: 'https://github.com/hamikan/giiku-camp-team18#'
    },
    {
      id: 8,
      title: 'ICPC2025年参加',
      description: '去年の7月ごろに競技プログラミングのイベントの一つであるICPCにTeam Mikanで参加しました（結果は惨敗でしたが...）',
      image: icpcResultImg,
      link: 'https://icpc.jp/2025/domestic/results/'
    },
    {
      id: 9,
      title: '自然言語処理で書籍おすすめ',
      description: 'OpenAIのAPIを利用して埋め込みをし、文章を入力したら関連のあるものがお勧めされます。',
      image: bookRecommenderImg,
      link: 'https://github.com/Keita-Kindai/book-recommender'
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Portfolio</h2>
          <p className="text-blue-600 dark:text-blue-400 text-lg">最近の活動</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 opacity-55 md:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
