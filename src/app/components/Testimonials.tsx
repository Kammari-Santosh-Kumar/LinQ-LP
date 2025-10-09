"use client";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [active, setActive] = useState<number | null>(null);
  const [items, setItems] = useState(() => [
    {
      quote:
        "LINQ transformed my commute — smart matching and friendly riders make every trip enjoyable.",
      name: "Anika Rao",
      
      color: "from-[#00E676] to-[#00C9FF]",
    },
    {
      quote: "Cost splitting is effortless — rides feel fair and transparent.",
      name: "Rahul Verma",
     
      color: "bg-[#FFB86B]",
    },
    {
      quote: "Women-only pools make me feel safe and confident every day.",
      name: "Priya Singh",
    
      color: "bg-[#7C3AED]",
    },
    {
      quote: "LINQ Points are a nice bonus. The app rewards regular sharers.",
      name: "Karan Patel",
     
      color: "bg-[#00A86B]",
    },
    {
      quote: "The community is warm and reliable — I recommend LINQ to colleagues.",
      name: "Meera N",
     
      color: "bg-[#FF6B6B]",
    },
  ]);

  const refs = useRef<Record<string, HTMLElement | null>>({});
  const animating = useRef(false);
  const intervalId = useRef<number | null>(null);

  useEffect(() => {
    // start automatic rotation every 3.5s
    intervalId.current = window.setInterval(() => {
      rotateOnce();
    }, 3500);
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // perform one rotation: move first item to end with FLIP animation
  const rotateOnce = () => {
    if (animating.current) return;
    const prevRects: Record<string, DOMRect> = {};
    Object.keys(refs.current).forEach((k) => {
      const el = refs.current[k];
      if (el) prevRects[k] = el.getBoundingClientRect();
    });

    // adjust active index to follow same item (shift left)
    setActive((prev) => {
      if (prev === null) return null;
      return prev === 0 ? items.length - 1 : prev - 1;
    });

    const newItems = [...items.slice(1), items[0]];
    animating.current = true;
    setItems(newItems);

    // after DOM updates, play FLIP
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.keys(refs.current).forEach((k) => {
          const el = refs.current[k];
          if (!el) return;
          const newRect = el.getBoundingClientRect();
          const prev = prevRects[k];
          if (!prev) return;
          const dx = prev.left - newRect.left;
          const dy = prev.top - newRect.top;
          if (dx || dy) {
            el.style.transition = "none";
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            // force reflow
            el.getBoundingClientRect();
            el.style.transition = "transform 520ms cubic-bezier(.22,.9,.32,1)";
            el.style.transform = "";
          }
        });

        // cleanup after animation
        setTimeout(() => {
          Object.keys(refs.current).forEach((k) => {
            const el = refs.current[k];
            if (!el) return;
            el.style.transition = "";
            el.style.transform = "";
          });
          animating.current = false;
        }, 600);
      });
    });
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl text-[#7a7b7c] font-extrabold">What our community says</h3>
          <p className="text-gray-500 mt-2">Real stories from riders across LINQ.</p>
        </div>

        <div className="relative">
          <div className="parallax-accent accent-a" aria-hidden />
          <div className="parallax-accent accent-b" aria-hidden />
          <div
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          onKeyDown={(e) => {
            // keyboard navigation: left/right to move active focus
            if (e.key === "ArrowLeft") {
              setActive((s) => (s === null ? 0 : Math.max(0, s - 1)));
            }
            if (e.key === "ArrowRight") {
              setActive((s) => (s === null ? 0 : Math.min(Testimonials.length - 1, s + 1)));
            }
          }}
          tabIndex={0}
        >
            {items.map((t, i) => {
            const isActive = active === null ? false : active === i;
            const transform = active === null ? undefined : isActive ? "scale(1.04)" : "scale(0.94)";
            const opacity = active === null ? 1 : isActive ? 1 : 0.82;
            const z = isActive ? 20 : 10;

            // tile size classes mirror original bento
            const sizeClass = i === 0 ? "md:col-span-3 row-span-2" : i === 1 ? "md:col-span-3" : i === 2 ? "md:col-span-2" : i === 3 ? "md:col-span-2" : "md:col-span-4";

            const delay = `${i * 80}ms`;
            return (
              <article
                key={i}
                data-id={t.name}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => {
                  if (animating.current) return;
                  // if clicking the front card, just toggle active
                  if (i === 0) {
                    setActive(active === i ? null : i);
                    return;
                  }
                  // perform FLIP swap: move clicked item to front
                  const id = t.name;
                  const prevRects: Record<string, DOMRect> = {};
                  Object.keys(refs.current).forEach((k) => {
                    const el = refs.current[k];
                    if (el) prevRects[k] = el.getBoundingClientRect();
                  });

                  const newItems = [t, ...items.filter((x) => x.name !== t.name)];
                  animating.current = true;
                  setItems(newItems);

                  // after DOM updates, play FLIP
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      Object.keys(refs.current).forEach((k) => {
                        const el = refs.current[k];
                        if (!el) return;
                        const newRect = el.getBoundingClientRect();
                        const prev = prevRects[k];
                        if (!prev) return;
                        const dx = prev.left - newRect.left;
                        const dy = prev.top - newRect.top;
                        if (dx || dy) {
                          el.style.transition = 'none';
                          el.style.transform = `translate(${dx}px, ${dy}px)`;
                          // force reflow
                          el.getBoundingClientRect();
                          el.style.transition = 'transform 520ms cubic-bezier(.22,.9,.32,1)';
                          el.style.transform = '';
                        }
                      });

                      // cleanup after animation
                      setTimeout(() => {
                        Object.keys(refs.current).forEach((k) => {
                          const el = refs.current[k];
                          if (!el) return;
                          el.style.transition = '';
                          el.style.transform = '';
                        });
                        animating.current = false;
                      }, 600);
                    });
                  });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(active === i ? null : i);
                }}
               ref={(el) => { refs.current[t.name] = el; }}

                className={`${sizeClass} p-6 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} rounded-2xl shadow-sm border card-appeal card-enter relative tilt ${isActive ? 'glow-border active' : ''} focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200`}
                style={{ transform, opacity, zIndex: z, ['--delay' as any]: delay }}
                onPointerMove={(e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
                  const py = (e.clientY - rect.top) / rect.height - 0.5;
                  const rx = py * 6; // rotateX
                  const ry = px * -10; // rotateY
                  const inner = (e.currentTarget as HTMLElement).querySelector('.tilt-inner') as HTMLElement | null;
                  if (inner) inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
                }}
                onPointerLeave={(e) => {
                  const inner = (e.currentTarget as HTMLElement).querySelector('.tilt-inner') as HTMLElement | null;
                  if (inner) inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                }}
              >
                <div className="tilt-inner">
                  {/* glossy translucent overlay when active */}
                  <div className={isActive ? "glossy-overlay active" : "glossy-overlay"} />
                  <p className={`text-gray-800 ${i === 0 || i === 4 ? "text-lg" : ""}`}>“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-semibold`}>{t.name[0]}</div>
                    <div>
                      <div className="font-medium text-gray-900">{t.name}</div>
                      
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
