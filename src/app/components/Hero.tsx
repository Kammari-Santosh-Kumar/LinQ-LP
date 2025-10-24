// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-2 bg-white pt-[-20] md:pt-20">
//       {/* Background gradients */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,233,255,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,230,118,0.06),transparent_40%)] pointer-events-none"></div>

//       <div className="z-10">
//         {/* Heading */}
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-xl sm:max-w-3xl leading-tight text-gray-900">
//           Drive Together,<br /> Save Together, <br />
//           <span className="bg-gradient-to-r from-[#007A3D] to-[#0077CC] bg-clip-text text-transparent">
//             India's #1 Open Travel Sharing Platform.
//           </span>
//         </h2>

//         {/* Paragraph */}
//         <p className="mt-3 sm:mt-6 text-gray-600 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
//           We’re already a thriving community — over{" "}
//           <span className="text-[#00E676] font-semibold">30K+ followers</span> and{" "}
//           <span className="text-[#00C9FF] font-semibold">5K daily active users</span> 
//           — united by one goal: smarter, cleaner, affordable commuting.
//         </p>

//         {/* Button */}
//         <Link href="https://forms.gle/EK6ScmSd65bBH2X5A" passHref>
//           <button className="mt-5 sm:mt-10 bg-gradient-to-r from-[#00A86B] to-[#0077CC] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-[0_0_20px_rgba(0,119,204,0.18)] transition">
//             JOIN FOR FREE
//           </button>
//         </Link>

//         {/* Small note */}
//         <p className="mt-2 sm:mt-4 text-sm sm:text-md text-gray-500 max-w-xs sm:max-w-full mx-auto px-2">
//           Register for early access and get 3 months of free cost-sharing connections.
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById("fireworks") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      color: string;
      angle: number;
      speed: number;
      life: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = Math.random() * 2 * Math.PI;
        this.speed = Math.random() * 5 + 2;
        this.life = 100;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.speed *= 0.95;
        this.life -= 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Firework {
      x: number;
      y: number;
      targetY: number;
      color: string;
      trail: { x: number; y: number }[];
      done: boolean;

      constructor() {
        this.x = Math.random() * w;
        this.y = h;
        this.targetY = Math.random() * (h / 2);
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.trail = [];
        this.done = false;
      }

      update(particles: Particle[]) {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 8) this.trail.shift();
        this.y -= 10;

        if (this.y <= this.targetY) {
          this.done = true;
          for (let i = 0; i < 30; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        for (let i = this.trail.length - 1; i >= 0; i--) {
          ctx.lineTo(this.trail[i].x, this.trail[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }

    const fireworks: Firework[] = [];
    const particles: Particle[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, w, h);

      if (Math.random() < 0.05) fireworks.push(new Firework());

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update(particles);
        fireworks[i].draw(ctx);
        if (fireworks[i].done) fireworks.splice(i, 1);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-2 bg-black overflow-hidden pt-24 md:pt-28">
      {/* Fireworks Canvas */}
      <canvas
        id="fireworks"
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Hero Content */}
      <div className="z-10 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-xl sm:max-w-3xl leading-tight">
          Commute. Connect. <br />
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FF4500] bg-clip-text text-transparent">
            Telangana’s First Open Travel Platform.
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-gray-200 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg">
          Trusted by{" "}
          <span className="text-[#FFD700] font-semibold">30K+ users</span> and{" "}
          <span className="text-[#FF9100] font-semibold">5K+ daily commuters</span>{" "}
          — driving sustainability, saving fuel, and building community.
        </p>

        <p className="mt-5 text-lg font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFB300] to-[#FFA000] bg-[length:200%_auto] bg-clip-text text-transparent">
          🎁 Be our early-access beta users and get a chance to win a Silver Coin!
        </p>

        <Link href="https://forms.gle/EK6ScmSd65bBH2X5A" passHref>
          <button className="mt-6 sm:mt-10 bg-gradient-to-r from-[#FF6F00] to-[#FFD740] text-black font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-[0_0_30px_rgba(255,200,0,0.6)] transition-all">
            🪔 JOIN FOR FREE
          </button>
        </Link>

        <p className="mt-2 sm:mt-4 text-sm sm:text-md text-gray-300 max-w-xs sm:max-w-full mx-auto px-2">
          Register now and enjoy 3 months of free cost-sharing connections.
        </p>

        {/* Winners Announcement Box */}
        <div className="mt-6 pt-4 pb-6 md:p-6 border border-gray-300 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-center shadow-lg mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            🎉 Winners Will Be Announced Soon!
          </h3>
          <p className="mt-2 text-base md:text-lg text-white">
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
}

