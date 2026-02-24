import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "motion/react";
import { useEffect } from "react";

export default function CustomCursor() {
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }
  
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

  const isHovering = useMotionValue(0);
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
        const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;

        if (!element) return;

        if (
        element.closest("a, button, input, textarea, select, [data-cursor='hover']")
        ) {
        isHovering.set(1);
        } else {
        isHovering.set(0);
        }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    }, [isHovering]);

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
  const hoverScale = useTransform(isHovering, [0, 1], [1, 1.2]);

  const finalScale = useTransform(
    [scale, hoverScale],
    ([s, h]: [number, number]) => s * h
  );
  const stretchX = useTransform(speed, [0, 1500], [1, 1.3]);
  const stretchY = useTransform(speed, [0, 1500], [1, 0.85]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#3A8D86] pointer-events-none z-[9999] blur-[1px] shadow-[0_0_20px_rgba(58,141,134,0.6)]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        scale : finalScale,
        scaleX: stretchX,
        scaleY: stretchY
      }}
    />
  );
}