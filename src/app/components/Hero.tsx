import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-2 bg-white pt-[-20] md:pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,233,255,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,230,118,0.06),transparent_40%)] pointer-events-none"></div>

  <div className="z-10 text-center flex flex-col items-center">
        {/* Heading */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-xl sm:max-w-3xl leading-tight text-gray-900 text-center mx-auto">
          Connect. Commute.<br /> 
          <span className="bg-gradient-to-r from-[#007A3D] to-[#0077CC] bg-clip-text text-transparent">
          Telangana’s First Open Travel Platform.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-3 sm:mt-6 text-gray-600 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
          We’re already a thriving community — over{" "}
          <span className="text-[#00E676] font-semibold">30K+ followers</span> and{" "}
          <span className="text-[#00C9FF] font-semibold">5K daily active users</span> 
          — united by one goal: smarter, cleaner, affordable commuting.
        </p>
         <p className="mt-5 text-lg font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FFA000] bg-[length:200%_auto] bg-clip-text text-transparent">
          🎁 Be our early-access beta users and get a chance to win a Silver Coin!
        </p>

        {/* Button */}
        <Link href="https://forms.gle/EK6ScmSd65bBH2X5A" passHref>
          <button className="mt-5 sm:mt-10 bg-gradient-to-r from-[#00A86B] to-[#0077CC] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-[0_0_20px_rgba(0,119,204,0.18)] transition">
            JOIN FOR FREE
          </button>
        </Link>

        {/* Small note */}
        <p className="mt-2 sm:mt-4 text-sm sm:text-md text-gray-500 max-w-xs sm:max-w-full mx-auto px-2">
          Register for early access and get 3 months of free cost-sharing connections.
        </p>

         <div className="mt-6 pt-4 pb-6 md:p-6 border border-gray-300 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-center shadow-lg mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white">Silver Coin Winners</h3>
          <p className="mt-2 text-sm md:text-base text-white">Celebrating our winners</p>

          <div className="mt-4 grid grid-cols-3 gap-3 items-start">
            <img src="/Winner1.jpg" alt="Winner 1" className="w-full aspect-square object-cover rounded-lg shadow-sm" />
            <img src="/Winner2.jpg" alt="Winner 2" className="w-full aspect-square object-cover rounded-lg shadow-sm" />
            <img src="/Winner3.png" alt="Winner 3" className="w-full aspect-square object-cover rounded-lg shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
