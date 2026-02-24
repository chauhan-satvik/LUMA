import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  Smile, 
  Hand, 
  Wifi, 
  Palette, 
  Layers, 
  HeartPulse,
  ArrowRight,
  Cpu,
  Sparkles
} from "lucide-react";

export function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { stiffness: 800, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 800, damping: 15 });

  const eyeX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const eyeY = useTransform(smoothY, [-1, 1], [-15, 15]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A3D9D3]/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative inline-block"
          >
            {/* Luma Placeholder Render */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-[3rem] shadow-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              
              {/* Face Screen */}
              <div className="w-48 h-32 bg-black rounded-3xl shadow-inner relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  className="flex gap-8"
                  style={{ x: eyeX, y: eyeY }}
                >
                  <motion.div 
                    animate={{ scaleY: [1, 0.9, 1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-8 h-12 bg-[#A3D9D3] rounded-full blur-[0.5px] shadow-[0_0_15px_rgba(163,217,211,0.6)]" 
                  />
                  <motion.div 
                    animate={{ scaleY: [1, 0.9, 1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-8 h-12 bg-[#A3D9D3] rounded-full blur-[0.5px] shadow-[0_0_15px_rgba(163,217,211,0.6)]" 
                  />
                </motion.div>
              </div>

              {/* Mechanical details */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full" />
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full" />
            </div>
            
            {/* Floating animation */}
            <motion.div
              className="absolute -inset-4 border border-[#A3D9D3]/30 rounded-[3.5rem] -z-10"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A Companion That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AC7C0] to-blue-400">
              Feels Alive.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LUMA is a compact emotional desk companion that reacts, adapts, and grows with you. 
            Designed to bring warmth to your workspace.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/features" 
                className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Explore LUMA <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/progress" 
                className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                View Progress
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is LUMA? */}
      <section id="features" className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">What is LUMA?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              More than just a smart display. LUMA combines expressive animation with tactile interaction to create a genuine sense of presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Smile, title: "Emotional Expressions", desc: "Reacts to your presence and environment." },
              { icon: Hand, title: "Touch Interaction", desc: "Responds to gentle taps and strokes." },
              { icon: Wifi, title: "Smart Connection", desc: "Syncs with your calendar, weather, and tasks." },
              { icon: Palette, title: "Customization", desc: "Personalize faces, colors, and behaviors." },
              { icon: Sparkles, title: "Personality Design", desc: "Evolves based on how you interact." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A3D9D3]/20 text-[#6BB5AC] flex items-center justify-center mb-4">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LUMA Exists */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                <HeartPulse size={14} /> Our Purpose
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
                Designed for the <br/> lonely hours at the desk.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We spend countless hours staring at screens, isolated in our digital worlds. LUMA was created to provide a minimal, intelligent presence—a subtle companion that makes your workspace feel a little less empty.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Perfect for students, creators, and remote workers.",
                "Non-intrusive companionship that respects your focus.",
                "A physical anchor in a purely digital workflow."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#A3D9D3]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#6BB5AC]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2.5rem] bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 overflow-hidden flex items-center justify-center"
          >
            {/* Abstract representation of a desk setup */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent" />
            <div className="w-64 h-8 bg-white/50 backdrop-blur-md rounded-full absolute bottom-20 shadow-lg" />
            <div className="w-32 h-32 bg-white rounded-3xl shadow-xl z-10 flex items-center justify-center border border-gray-100">
              <div className="w-24 h-16 bg-black rounded-xl flex items-center justify-center">
                <div className="w-12 h-2 bg-[#A3D9D3] rounded-full blur-[1px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Engineered with precision, designed with emotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Smile, title: "Emotional Animation Engine", desc: "Fluid, 60fps procedural animations that give LUMA lifelike reactions." },
              { icon: Hand, title: "Capacitive Touch", desc: "Sensors embedded in the shell detect strokes, taps, and holds." },
              { icon: Cpu, title: "Smart Utility Integration", desc: "Connects to APIs for weather, Pomodoro timers, and notifications." },
              { icon: Palette, title: "Customizable Themes", desc: "Change eye colors, shapes, and UI accents via the companion app." },
              { icon: Layers, title: "Swappable Shell Ecosystem", desc: "Magnetic outer shells allow you to change LUMA's physical look." },
              { icon: HeartPulse, title: "Mood-Based Behavior", desc: "Adapts its energy levels based on time of day and interaction history." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#A3D9D3]/10 group-hover:border-[#A3D9D3]/30 transition-colors">
                  <feature.icon size={24} className="text-gray-600 group-hover:text-[#6BB5AC] transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Design Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative h-[600px] rounded-[2.5rem] bg-[#1C1E21] overflow-hidden p-8 flex flex-col"
          >
            {/* Technical Illustration */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]" />
            
            <div className="relative z-10 flex-grow flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square border border-gray-700/50 rounded-full relative flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-gray-600/50 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border border-[#A3D9D3]/30 rounded-full flex items-center justify-center bg-[#A3D9D3]/5 backdrop-blur-sm">
                    <Cpu className="text-[#A3D9D3] opacity-80" size={32} />
                  </div>
                </div>
                
                {/* Orbiting elements */}
                <motion.div 
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-8 border-t border-gray-800 flex justify-between text-xs font-mono text-gray-500 uppercase tracking-wider">
              <span>SYS.ARCH.v1</span>
              <span>EMOTION_CORE_ACTIVE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-6">
                The Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe technology should feel less like a tool and more like a companion. Every curve, animation, and interaction is designed with intention.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Emotion First", desc: "Before adding utility, we ensure every interaction feels delightful and natural." },
                { title: "Minimalism", desc: "No unnecessary buttons or complex menus. Just intuitive touch and visual feedback." },
                { title: "Evolvability", desc: "Hardware that lasts, software that grows. LUMA gets smarter over time." },
                { title: "Physical Presence", desc: "Designed to be interacted with physically, reducing reliance on companion apps." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#A3D9D3] pl-6 py-1">
                  <h4 className="font-display font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#A3D9D3]/10" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Join the Journey</h2>
          <p className="text-xl text-gray-600 mb-10">
            We're building LUMA in public. Follow our development, give feedback, and be the first to know when we launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                to="/progress" 
                className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto inline-block"
              >
                Track Our Progress
              </Link>
            </motion.div>
            <div className="relative w-full sm:w-auto flex-grow max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A3D9D3] focus:border-transparent transition-all"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-full transition-colors"
              >
                Stay Updated
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
