// import React, { useEffect, useRef, useState } from "react";

// /**
//  * Full-screen hero particle background:
//  * - BACK canvas: static white dots (always visible)
//  * - FRONT canvas: mouse-only line burst (fades in/out)
//  */
// export default function ParticleField({
//   dotColor = "rgba(255,255,255,0.9)",
//   lineColor = "rgba(255,255,255,0.45)",
//   density = 0.0011, // stars per px² (tweak 0.0008–0.0015)
//   linkRadius = 150, // mouse se kitni door tak lines
//   fadeOutMs = 600, // mouse ruke -> kitni der me hide
// }) {
//   const backRef = useRef(null); // static dots
//   const frontRef = useRef(null); // hover lines
//   const starsRef = useRef([]); // shared star positions
//   const rafRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0, active: false, lastMove: 0 });
//   const alphaRef = useRef(0);
//   const targetAlphaRef = useRef(0);

//   // create stars based on container size
//   const createStars = (w, h) => {
//     const count = Math.max(40, Math.floor(w * h * density));
//     const arr = new Array(count).fill(0).map(() => ({
//       x: Math.random() * w,
//       y: Math.random() * h,
//       r: 0.7 + Math.random() * 1.6,
//     }));
//     starsRef.current = arr;
//   };

//   const sizeCanvas = (canvas) => {
//     const parent = canvas.parentElement;
//     const w = parent.clientWidth;
//     const h = parent.clientHeight;
//     canvas.width = Math.floor(w * devicePixelRatio);
//     canvas.height = Math.floor(h * devicePixelRatio);
//     canvas.style.width = w + "px";
//     canvas.style.height = h + "px";
//     const ctx = canvas.getContext("2d");
//     ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
//     return { w, h, ctx };
//   };

//   const drawBackgroundDots = () => {
//     const c = backRef.current;
//     if (!c) return;
//     const { w, h, ctx } = sizeCanvas(c);
//     createStars(w, h);

//     // clear & draw dots once (static)
//     ctx.clearRect(0, 0, w, h);
//     ctx.fillStyle = dotColor;
//     for (const s of starsRef.current) {
//       ctx.beginPath();
//       ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//       ctx.fill();
//     }
//   };

//   useEffect(() => {
//     // init both canvases
//     drawBackgroundDots();
//     sizeCanvas(frontRef.current);

//     const onResize = () => {
//       drawBackgroundDots(); // redraw stars with new size
//       sizeCanvas(frontRef.current); // resize hover canvas
//     };
//     window.addEventListener("resize", onResize);

//     // mouse listeners on window (canvas has pointer-events:none)
//     const onMove = (e) => {
//       const rect = frontRef.current.getBoundingClientRect();
//       mouseRef.current.x = e.clientX - rect.left;
//       mouseRef.current.y = e.clientY - rect.top;
//       mouseRef.current.active = true;
//       mouseRef.current.lastMove = performance.now();
//       targetAlphaRef.current = 1; // show lines
//     };
//     const onLeave = () => {
//       mouseRef.current.active = false;
//       // fades after fadeOutMs
//     };
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseout", onLeave);

//     // animate only the hover lines layer
//     const tick = () => {
//       const c = frontRef.current;
//       const w = c.width / devicePixelRatio;
//       const h = c.height / devicePixelRatio;
//       const ctx = c.getContext("2d");
//       const mouse = mouseRef.current;

//       // fade logic
//       const now = performance.now();
//       if (!mouse.active && now - mouse.lastMove > fadeOutMs) {
//         targetAlphaRef.current = 0;
//       }
//       alphaRef.current += (targetAlphaRef.current - alphaRef.current) * 0.12;

//       // clear
//       ctx.clearRect(0, 0, w, h);

//       // nothing to draw if invisible
//       if (alphaRef.current > 0.02) {
//         ctx.strokeStyle = lineColor;
//         // lines from mouse -> nearby static stars
//         for (const s of starsRef.current) {
//           const dx = mouse.x - s.x;
//           const dy = mouse.y - s.y;
//           const d = Math.hypot(dx, dy);
//           if (d < linkRadius) {
//             ctx.globalAlpha = alphaRef.current * (1 - d / linkRadius);
//             ctx.beginPath();
//             ctx.moveTo(mouse.x, mouse.y);
//             ctx.lineTo(s.x, s.y);
//             ctx.stroke();
//           }
//         }
//         ctx.globalAlpha = 1;
//       }

//       rafRef.current = requestAnimationFrame(tick);
//     };

//     rafRef.current = requestAnimationFrame(tick);

//     return () => {
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseout", onLeave);
//       cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dotColor, lineColor, density, linkRadius, fadeOutMs]);

//   return (
//     <>
//       {/* BACK: static dots */}
//       <canvas ref={backRef} className="stars-canvas" aria-hidden="true" />
//       {/* FRONT: mouse-only lines */}
//       <canvas ref={frontRef} className="hover-canvas" aria-hidden="true" />
//     </>
//   );
// }
import React, { useEffect, useRef } from "react";

export default function ParticleField({
  dotColor = "rgba(255,255,255,0.9)",
  lineColor = "rgba(255,255,255,0.45)",
  density = 0.0011,
  linkRadius = 150,
  fadeOutMs = 600,
}) {
  const backRef = useRef(null);
  const frontRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);
  const rafBackRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, lastMove: 0 });
  const alphaRef = useRef(0);
  const targetAlphaRef = useRef(0);

  const createStars = (w, h) => {
    const count = Math.max(40, Math.floor(w * h * density));
    starsRef.current = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.7 + Math.random() * 1.6,
      dx: (Math.random() - 0.5) * 1.0, // 6–7x fast
      dy: (Math.random() - 0.5) * 1.0,
    }));
  };

  const sizeCanvas = (canvas) => {
    const parent = canvas.parentElement;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = Math.floor(w * devicePixelRatio);
    canvas.height = Math.floor(h * devicePixelRatio);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    return { w, h, ctx };
  };

  // animate stars (background)
  const animateBackground = () => {
    const c = backRef.current;
    if (!c) return;
    const { w, h, ctx } = sizeCanvas(c);

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = dotColor;

    for (const s of starsRef.current) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // update pos
      s.x += s.dx;
      s.y += s.dy;

      // wrap around edges
      if (s.x < 0) s.x = w;
      if (s.x > w) s.x = 0;
      if (s.y < 0) s.y = h;
      if (s.y > h) s.y = 0;
    }

    rafBackRef.current = requestAnimationFrame(animateBackground);
  };

  useEffect(() => {
    const { w, h } = sizeCanvas(backRef.current);
    createStars(w, h);
    animateBackground(); // start moving stars
    sizeCanvas(frontRef.current);

    const onResize = () => {
      const { w, h } = sizeCanvas(backRef.current);
      createStars(w, h);
      sizeCanvas(frontRef.current);
    };
    window.addEventListener("resize", onResize);

    const onMove = (e) => {
      const rect = frontRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
      mouseRef.current.lastMove = performance.now();
      targetAlphaRef.current = 1;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    const tick = () => {
      const c = frontRef.current;
      const w = c.width / devicePixelRatio;
      const h = c.height / devicePixelRatio;
      const ctx = c.getContext("2d");
      const mouse = mouseRef.current;

      const now = performance.now();
      if (!mouse.active && now - mouse.lastMove > fadeOutMs) {
        targetAlphaRef.current = 0;
      }
      alphaRef.current += (targetAlphaRef.current - alphaRef.current) * 0.12;

      ctx.clearRect(0, 0, w, h);

      if (alphaRef.current > 0.02) {
        ctx.strokeStyle = lineColor;
        for (const s of starsRef.current) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const d = Math.hypot(dx, dy);
          if (d < linkRadius) {
            ctx.globalAlpha = alphaRef.current * (1 - d / linkRadius);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(rafBackRef.current);
    };
  }, [dotColor, lineColor, density, linkRadius, fadeOutMs]);

  return (
    <>
      <canvas ref={backRef} className="stars-canvas" aria-hidden="true" />
      <canvas ref={frontRef} className="hover-canvas" aria-hidden="true" />
    </>
  );
}
