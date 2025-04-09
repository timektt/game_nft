import {
  FaRocket,
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaMedium,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <FaRocket className="text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text font-orbitron">Cosmic Collectors</h3>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate NFT adventure game set in a vast cosmic universe.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaDiscord, FaTelegram, FaMedium].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {[
            {
              title: 'Game',
              items: ['How to Play', 'Marketplace', 'Leaderboard', 'Whitepaper', 'Roadmap'],
            },
            {
              title: 'Resources',
              items: ['Blog', 'FAQ', 'Documentation', 'Tokenomics', 'Careers'],
            },
            {
              title: 'Support',
              items: ['Help Center', 'Contact Us', 'Terms of Service', 'Privacy Policy'],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-y-4">
            <p className="text-gray-500">
              &copy; 2023 Cosmic Collectors. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Terms', 'Privacy', 'Cookies'].map((link, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-purple-400 transition">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
