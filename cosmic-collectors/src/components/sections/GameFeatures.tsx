import { FaMedal, FaShieldAlt, FaUsers } from 'react-icons/fa'

const GameFeatures = () => {
  const features = [
    {
      icon: <FaMedal className="text-2xl text-purple-400" />,
      title: 'Play to Earn',
      description:
        'Earn valuable NFTs and cryptocurrency by completing missions and defeating enemies.',
      bg: 'bg-purple-900',
    },
    {
      icon: <FaShieldAlt className="text-2xl text-pink-400" />,
      title: 'Battles & Quests',
      description:
        'Engage in epic space battles and complete quests to unlock rare collectibles.',
      bg: 'bg-pink-900',
    },
    {
      icon: <FaUsers className="text-2xl text-blue-400" />,
      title: 'Guild System',
      description:
        'Join forces with other players to conquer galaxies and earn exclusive rewards.',
      bg: 'bg-blue-900',
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-orbitron gradient-text">
            Game Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what makes Cosmic Collectors the most exciting NFT game in the metaverse
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 card-glow flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-full ${f.bg} flex items-center justify-center mb-6`}
              >
                {f.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameFeatures
