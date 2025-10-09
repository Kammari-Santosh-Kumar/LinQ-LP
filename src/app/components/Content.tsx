export default function Content() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-visible">
      {/* decorative gradient circles */}
      <div className="pointer-events-none absolute -right-24 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-[#00E676]/20 to-[#00C9FF]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left content column */}
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-600 leading-tight mb-4">
              What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] to-[#00C9FF]">LINQ</span>?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              A smarter way to commute — LINQ connects people, shares costs, and
              builds trusted, community-first rides. From smart matching to women-only pools,
              we make everyday travel safer, greener and more affordable.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                <strong className="block text-sm text-gray-800">30K+</strong>
                <span className="text-xs text-gray-500">followers</span>
              </div>

              <div className="px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                <strong className="block text-sm text-gray-800">5K</strong>
                <span className="text-xs text-gray-500">daily users</span>
              </div>

              <div className="px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                <strong className="block text-sm text-gray-800">4.8★</strong>
                <span className="text-xs text-gray-500">avg rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#00E676] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <div className="text-gray-800 font-medium">Smart matching</div>
                  <div className="text-gray-500 text-sm">Connect with riders that match your route and schedule.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#00C9FF] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v2" />
                  </svg>
                </span>
                <div>
                  <div className="text-gray-800 font-medium">Fair payments</div>
                  <div className="text-gray-500 text-sm">Automatic cost splitting and transparent fare breakdowns.</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A86B] to-[#0077CC] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                JOIN FOR FREE
              </button>
            </div>
          </div>

          {/* Right creative mosaic */}
          <div className="lg:w-1/2 relative z-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="translate-y-8">
                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00A86B] text-white mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l2-2a4 4 0 015.657 0L13 11l3-3 3 3" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Smart Pooling</h4>
                    <p className="text-gray-600 text-sm">Match with riders nearby and reduce empty seats.</p>
                  </div>
                </div>

                <div className="-translate-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00E676] text-white mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h3l3 8 4-16 3 12h3" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Eco Impact</h4>
                    <p className="text-gray-600 text-sm">Lower emissions and track community impact.</p>
                  </div>
                </div>

                <div className="translate-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0077CC] text-white mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Rewards</h4>
                    <p className="text-gray-600 text-sm">Earn LINQ Points for sharing rides.</p>
                  </div>
                </div>

                <div className="-translate-y-2">
                  <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00C9FF] text-white mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Trusted Community</h4>
                    <p className="text-gray-600 text-sm">Verified profiles and in-app support keep rides secure.</p>
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -left-6 -top-6 bg-gradient-to-r from-[#00E676] to-[#00C9FF] text-white px-4 py-2 rounded-xl shadow-xl text-sm">
                Community-first mobility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
