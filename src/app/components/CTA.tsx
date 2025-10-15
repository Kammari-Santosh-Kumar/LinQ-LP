import Link from "next/link";
export default function CTA() {
  return (
    <section className="text-center py-24 px-6 md:px-12 bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-400 text-white rounded-3xl mx-6 md:mx-20 mt-16 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Ride Smarter?</h2>
        <p className="text-lg md:text-xl mb-8 text-indigo-50/95">
          Be part of a community that travels better together. Join our <strong className="font-semibold">30K+ LINQ family</strong> driving positive change every day.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="https://forms.gle/EK6ScmSd65bBH2X5A" passHref>
          <button className="bg-white text-indigo-700 px-10 py-4 rounded-full font-semibold shadow-md hover:-translate-y-1 transform transition">
            JOIN FOR FREE
          </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
