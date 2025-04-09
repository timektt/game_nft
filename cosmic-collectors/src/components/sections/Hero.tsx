import { FaPlay, FaStore } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-70" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop')",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron mb-6 leading-tight">
            <span className="gradient-text">Collect</span> Unique{' '}
            <span className="gradient-text">Cosmic</span> NFTs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Embark on an intergalactic adventure, collect rare NFTs, battle space pirates, and build your cosmic empire.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:opacity-90 transition font-bold text-lg flex items-center justify-center">
              <FaPlay className="mr-2" /> Start Adventure
            </button>
            <button className="bg-gray-800 bg-opacity-60 border border-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition font-bold text-lg flex items-center justify-center">
              <FaStore className="mr-2" /> Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
