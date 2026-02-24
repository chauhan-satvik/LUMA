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
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gray-800 pointer-events-none z-[9999]"
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