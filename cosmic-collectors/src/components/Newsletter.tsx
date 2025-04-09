const Newsletter = () => {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-6 sm:p-10 md:p-12 card-glow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-orbitron gradient-text">
                  Stay Updated
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Subscribe to our newsletter to get the latest news about game updates, NFT drops, and special events.
                </p>
              </div>
  
              {/* Form */}
              <div className="md:w-1/2 w-full">
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-gray-700 border border-gray-600 rounded-full px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 sm:py-4 rounded-full hover:opacity-90 transition font-bold"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  