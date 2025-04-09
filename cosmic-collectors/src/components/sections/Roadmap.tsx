'use client'

import { FaCheckCircle, FaSpinner } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'

const Roadmap = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-orbitron gradient-text">Development Roadmap</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey to build the ultimate NFT gaming experience
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 -ml-0.5" />

          <div className="flex flex-col gap-y-12 relative z-10">
            {/* Phase 1 */}
            <div className="md:flex justify-between items-start md:items-center">
              <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 text-left md:text-right">
                <div className="bg-gray-800 rounded-xl p-6 card-glow">
                  <div className="flex justify-start md:justify-end mb-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">Completed</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Phase 1: Foundation</h3>
                  <ul className="text-gray-400 space-y-2">
                    {['Core game mechanics', 'Initial NFT collection', 'Basic marketplace'].map((item) => (
                      <li key={item} className="flex items-center justify-start md:justify-end">
                        <FaCheckCircle className="text-green-500 ml-2" />
                        <span className="ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900">
                  Q1
                </div>
              </div>

              <div className="md:w-5/12" />
            </div>

            {/* Mobile arrow between Phase 1 & 2 */}
            <div className="md:hidden flex flex-col items-center -mt-2 mb-2">
              <div className="w-1 h-10 bg-purple-500 rounded-full" />
              <div className="w-2 h-2 rotate-45 bg-pink-500" />
            </div>

            {/* Phase 2 */}
            <div className="md:flex justify-between items-start md:items-center">
              <div className="md:w-5/12 hidden md:block" />

              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900">
                  Q2
                </div>
              </div>

              <div className="md:w-5/12 md:pl-12 text-left">
                <div className="bg-gray-800 rounded-xl p-6 card-glow">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">In Progress</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Phase 2: Expansion</h3>
                  <ul className="text-gray-400 space-y-2">
                    {['Guild system', 'New galaxy maps', 'Enhanced marketplace'].map((item) => (
                      <li key={item} className="flex items-center">
                        <FaSpinner className="text-blue-400 mr-2 animate-spin" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile arrow between Phase 2 & 3 */}
            <div className="md:hidden flex flex-col items-center -mt-2 mb-2">
              <div className="w-1 h-10 bg-purple-500 rounded-full" />
              <div className="w-2 h-2 rotate-45 bg-pink-500" />
            </div>

            {/* Phase 3 */}
            <div className="md:flex justify-between items-start md:items-center">
              <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 text-left md:text-right">
                <div className="bg-gray-800 rounded-xl p-6 card-glow">
                  <div className="flex justify-start md:justify-end mb-4">
                    <span className="bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded-full">Upcoming</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Phase 3: Evolution</h3>
                  <ul className="text-gray-400 space-y-2">
                    {['3D space battles', 'NFT breeding', 'Mobile version'].map((item) => (
                      <li key={item} className="flex items-center justify-start md:justify-end">
                        <FaClock className="text-gray-500 ml-2" />
                        <span className="ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-2/12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900">
                  Q3
                </div>
              </div>

              <div className="md:w-5/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
