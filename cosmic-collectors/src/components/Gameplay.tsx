import { FaGamepad, FaCoins, FaUsersCog } from 'react-icons/fa'

const Gameplay = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron gradient-text text-center lg:text-left">
              Experience the Adventure
            </h2>
            <p className="text-gray-400 mb-8 text-center lg:text-left">
              Dive into a rich universe filled with challenges, rewards, and endless possibilities.
              Your NFT collection directly impacts your gameplay experience.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FaGamepad className="text-purple-300" />,
                  bg: 'bg-purple-900',
                  title: 'Interactive Gameplay',
                  desc: 'Control your ship, engage in battles, and explore new galaxies with intuitive controls.',
                },
                {
                  icon: <FaCoins className="text-pink-300" />,
                  bg: 'bg-pink-900',
                  title: 'Earn While Playing',
                  desc: 'Every mission completed and enemy defeated earns you valuable rewards.',
                },
                {
                  icon: <FaUsersCog className="text-blue-300" />,
                  bg: 'bg-blue-900',
                  title: 'Upgrade System',
                  desc: 'Combine and upgrade your NFTs to create even more powerful assets.',
                },
              ].map((f, i) => (
                <div key={i} className="flex items-start">
                  <div className={`rounded-full p-3 mr-4 ${f.bg}`}>{f.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image + Overlay */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-500 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1632&auto=format&fit=crop"
                alt="Gameplay"
                className="w-full h-64 sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1">Space Battle Arena</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  Engage in epic 3D space battles with your collected NFTs
                </p>
                <div className="progress-bar w-full h-1 bg-purple-600 rounded-full" />
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-900 opacity-20 -z-10" />
            <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-pink-900 opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gameplay
