"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function CareersCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          launchConfetti();
        }
      },
      { threshold: 0.4 } // triggers when ~40% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const launchConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FF6B00", "#FFD700", "#FF1493", "#00FFFF"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FF6B00", "#FFD700", "#FF1493", "#00FFFF"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <section
      ref={sectionRef}
      className="text-center py-24 px-6 md:px-12 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white rounded-3xl mx-6 md:mx-20 mt-16 shadow-lg relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md text-center">
      LinQ is Growing this Diwali🎆
    </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          This festive season, we're expanding our{" "}
          <strong className="font-semibold">LinQ Team</strong>!  
          Join a passionate crew shaping the future of smarter, connected travel.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScCsaBXeMS_FCF_LIyGpQsWoagHuDv-FWoSEa_ul5dRpem1Qw/viewform?usp=dialog" passHref>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold shadow-md hover:-translate-y-1 hover:shadow-xl transform transition duration-300">
              APPLY NOW
            </button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/80">
          Exciting roles. Real impact. Celebrate Diwali with new beginnings at LinQ. ✨
        </p>
      </div>
    </section>
  );
}

















