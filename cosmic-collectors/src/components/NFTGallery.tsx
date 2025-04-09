import Image from 'next/image'

type NFTItem = {
  title: string
  description: string
  price: string
  rating: number
  tag: string
  tagColor: string
  image: string
}

const nftList: NFTItem[] = [
  {
    title: 'Cosmic Warrior',
    description: 'A powerful warrior from the Andromeda galaxy with enhanced combat abilities.',
    price: '0.25 ETH',
    rating: 4.9,
    tag: 'Legendary',
    tagColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Nebula Ship',
    description: 'A high-speed spacecraft capable of traveling through wormholes.',
    price: '0.18 ETH',
    rating: 4.7,
    tag: 'Epic',
    tagColor: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1632&auto=format&fit=crop',
  },
  {
    title: 'Quantum Crystal',
    description: "A mysterious crystal that enhances your ship's energy capabilities.",
    price: '0.12 ETH',
    rating: 4.5,
    tag: 'Rare',
    tagColor: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1706783630015-433ce9ef4398?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Alien Artifact',
    description: 'An ancient relic from a lost civilization with unknown powers.',
    price: '0.08 ETH',
    rating: 4.2,
    tag: 'Uncommon',
    tagColor: 'bg-yellow-600',
    image: 'https://plus.unsplash.com/premium_photo-1720582560666-aae5128dba43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const NFTGallery = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-orbitron gradient-text">Featured NFTs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Collect these rare cosmic artifacts to power up your gameplay
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nftList.map((nft, index) => (
            <div key={index} className="nft-card">
              <div className="nft-card-inner bg-gray-800 rounded-xl overflow-hidden card-glow">
                <div className="relative">
                   <Image
                    src={nft.image}
                    alt={nft.title}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover rounded-xl"
                    />

                  <div className={`absolute top-4 right-4 text-white text-xs font-bold px-2 py-1 rounded ${nft.tagColor}`}>
                    {nft.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{nft.title}</h3>
                    <div className="flex items-center text-yellow-400">
                      <i className="fas fa-star"></i>
                      <span className="ml-1">{nft.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{nft.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Current Price</p>
                      <p className="text-purple-400 font-bold">{nft.price}</p>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full border border-gray-700 transition">
            View All NFTs
          </button>
        </div>
      </div>
    </section>
  )
}

export default NFTGallery
