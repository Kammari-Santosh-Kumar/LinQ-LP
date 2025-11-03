const CoreFeatures = () => {
  const features = [
    {
      title: "Smart HubSpots™",
      gradient: "from-[#00E676] to-[#00C9FF]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Create and join dedicated travel hubs for your college or workplace",
      benefits: [
        "Connect with verified co-travelers from your institution",
        "View all rides to and from your hub",
        "Organize regular commute groups",
        "Track hub-specific statistics and impact"
      ],
      showcase: [
        {
          label: "Active Hubs",
          value: "50+"
        },
        {
          label: "Daily Hub Rides",
          value: "10+"
        }
      ]
    },
    {
      title: "Pro-Women Safety",
      gradient: "from-[#FF69B4] to-[#FF1493]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Enhanced safety features designed specifically for women travelers",
      benefits: [
        "Women-only ride matching option",
        "Real-time location sharing with trusted contacts",
        "24/7 dedicated women safety support",
        "Verified women-only community groups"
      ],
      showcase: [
        {
          label: "Women Travelers",
          value: "7K+"
        },
        {
          label: "Safety Rating",
          value: "4.9★"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
            Exclusive Features
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Core Unique Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience travel innovations that put safety and convenience first
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Decorative background blur */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 blur-2xl rounded-3xl group-hover:opacity-10 transition-opacity`} />
              
              {/* Main content */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-1 ${index === 0 ? 'text-[#00E676]' : 'text-[#FF1493]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  {feature.showcase.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          
          <p className="mt-4 text-sm text-gray-500">
            Available to all verified users. Safety features enabled by default.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;