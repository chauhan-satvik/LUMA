import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "motion/react";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Smooth follow
  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  // Velocity detection
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

    const speed = useTransform(
    [velocityX, velocityY],
    ([vx, vy]: [number, number]) => {
        return Math.sqrt(vx * vx + vy * vy);
    }
    );
  // Scale based on speed
  const scale = useTransform(speed, [0, 1500], [1, 1.6]);
  const stretchX = useTransform(speed, [0, 1500], [1, 1.3]);
  const stretchY = useTransform(speed, [0, 1500], [1, 0.85]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#A3D9D3] pointer-events-none z-[9999] blur-[1px] shadow-[0_0_20px_rgba(163,217,211,0.8)]"
      style={{
        x: smoothX,
        y: smoothY,
        scale,
        scaleX: stretchX,
        scaleY: stretchY
      }}
    />
  );
}