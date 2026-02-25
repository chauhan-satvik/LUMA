import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  Smile, 
  Hand, 
  Clock, 
  Palette, 
  Music, 
  BrainCircuit, 
  MessageSquare, 
  Layers, 
  Settings,
  ArrowRight,
  Heart,
  Zap,
  Sparkles
} from "lucide-react";

export function Features() {
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

  const smoothX = useSpring(mouseX, { stiffness: 800, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 800, damping: 20 });

  const eyeX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const eyeY = useTransform(smoothY, [-1, 1], [-10, 10]);

  // Grouping features into a narrative structure makes it easier to understand
  const featureCategories = [
    {
      id: "feel",
      categoryTitle: "Feel",
      categorySubtitle: "The Emotional Core",
      categoryIcon: Heart,
      categoryColor: "text-rose-500",
      categoryBg: "bg-rose-50",
      description: "LUMA isn't just a screen. It's designed to express, react, and share your space with genuine presence.",
      features: [
        {
          title: "Emotion in Motion",
          subtitle: "Emotional Expression Engine",
          icon: Smile,
          desc: "A dynamic animation engine capable of displaying a wide range of expressive states — joy, curiosity, shyness, excitement, and tiredness.",
          tags: ["60fps Animations", "Context-Aware", "Micro-expressions", "Mood Shifts"],
          color: "bg-rose-100 text-rose-600 border-rose-200"
        },
        {
          title: "Interactive by Design",
          subtitle: "Touch Interaction",
          icon: Hand,
          desc: "LUMA responds to touch with subtle reactions and expressive feedback, creating a sense of physical presence.",
          tags: ["Capacitive Touch", "Reactive Feedback", "Behavioral Variation"],
          color: "bg-orange-100 text-orange-600 border-orange-200"
        },
        {
          title: "Sound Meets Expression",
          subtitle: "Audio & Ambient Modes",
          icon: Music,
          desc: "Integrates audio experiences with synchronized animations for a richer emotional presence.",
          tags: ["Music Mode", "Dance Animations", "ASMR/Ambient", "Sound Reactions"],
          color: "bg-amber-100 text-amber-600 border-amber-200"
        }
      ]
    },
    {
      id: "connect",
      categoryTitle: "Connect",
      categorySubtitle: "Smart & Seamless",
      categoryIcon: Zap,
      categoryColor: "text-blue-500",
      categoryBg: "bg-blue-50",
      description: "Essential utilities and intelligence, integrated so naturally they never break the illusion of life.",
      features: [
        {
          title: "Connected, Yet Minimal",
          subtitle: "Smart Utility Integration",
          icon: Clock,
          desc: "Integrates essential smart utilities without overwhelming the experience.",
          tags: ["Time & Weather", "Alarms & Timers", "Calendar Sync", "Battery Moods"],
          color: "bg-emerald-100 text-emerald-600 border-emerald-200"
        },
        {
          title: "Intelligence That Grows",
          subtitle: "AI & Knowledge Layer",
          icon: BrainCircuit,
          desc: "Designed to evolve with advanced intelligence capabilities, keeping interactions visionary but grounded.",
          tags: ["Dictionary Queries", "Conversational AI", "Context-Aware", "Cloud Framework"],
          color: "bg-blue-100 text-blue-600 border-blue-200"
        },
        {
          title: "Stay Connected",
          subtitle: "Communication Integration",
          icon: MessageSquare,
          desc: "Integrates with your phone to extend communication interaction into your physical space.",
          tags: ["Bluetooth Calls", "Speaking Animations", "Subtle Notifications"],
          color: "bg-indigo-100 text-indigo-600 border-indigo-200"
        }
      ]
    },
    {
      id: "evolve",
      categoryTitle: "Evolve",
      categorySubtitle: "Yours to Shape",
      categoryIcon: Sparkles,
      categoryColor: "text-purple-500",
      categoryBg: "bg-purple-50",
      description: "Hardware that lasts, software that adapts. LUMA is built to grow alongside you.",
      features: [
        {
          title: "Made to Reflect You",
          subtitle: "Personalization System",
          icon: Palette,
          desc: "Adapts to your style and preferences through deep app-based customization.",
          tags: ["Theme & Colors", "Font Adjustments", "Memory", "Special Occasions"],
          color: "bg-purple-100 text-purple-600 border-purple-200"
        },
        {
          title: "Designed to Evolve",
          subtitle: "Modular Design Ecosystem",
          icon: Layers,
          desc: "A modular outer shell system allows physical customization without replacing core electronics.",
          tags: ["Swappable Shells", "Limited Editions", "Standard Core", "Upgrade-Friendly"],
          color: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200"
        },
        {
          title: "Engineered with Intention",
          subtitle: "Built with Precision",
          icon: Settings,
          desc: "Compact form factor engineered for balance between visibility, portability, and performance.",
          tags: ["Fist-Sized", "Optimized Architecture", "Durable", "Battery-Efficient"],
          color: "bg-slate-200 text-slate-700 border-slate-300"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2F5] relative selection:bg-[#A3D9D3] selection:text-gray-900">
      {/* Subtle technical grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNCkiLz48L3N2Zz4=')] bg-[length:40px_40px] pointer-events-none fixed" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A3D9D3]/20 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 relative inline-block"
          >
            {/* Minimal Luma Render */}
            <div className="w-48 h-48 bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              
              {/* Face Screen */}
              <div className="w-32 h-24 bg-black rounded-2xl shadow-inner relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  className="flex gap-5"
                  style={{ x: eyeX, y: eyeY }}
                >
                  <motion.div 
                    animate={{ scaleY: [1, 0.95, 1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-5 h-8 bg-[#A3D9D3] rounded-full blur-[0.5px] shadow-[0_0_10px_rgba(163,217,211,0.6)]" 
                  />
                  <motion.div 
                    animate={{ scaleY: [1, 0.95, 1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-5 h-8 bg-[#A3D9D3] rounded-full blur-[0.5px] shadow-[0_0_10px_rgba(163,217,211,0.6)]" 
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Floating animation */}
            <motion.div
              className="absolute -inset-3 border border-[#A3D9D3]/40 rounded-[2.5rem] -z-10"
              animate={{ y: [0, -6, 0], rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AC7C0] to-blue-400">Feel Alive.</span>
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LUMA combines emotional expression, physical interaction, and intelligent utility in a compact, evolving desktop companion.
          </motion.p>
        </div>
      </section>

      {/* Narrative Features Layout */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-32">
          {featureCategories.map((category, index) => (
            <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Sticky Category Header */}
              <div className="lg:col-span-4 relative">
                <motion.div 
                  className="lg:sticky lg:top-32"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`w-16 h-16 rounded-2xl ${category.categoryBg} ${category.categoryColor} flex items-center justify-center mb-6 shadow-sm border border-white`}>
                    <category.categoryIcon size={32} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-2">
                    {category.categorySubtitle}
                  </h2>
                  <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
                    {category.categoryTitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {category.description}
                  </p>
                </motion.div>
              </div>

              {/* Feature Cards List */}
              <div className="lg:col-span-8 space-y-6">
                {category.features.map((feature, fIndex) => (
                  <motion.div 
                    key={fIndex}
                    className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: fIndex * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${feature.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <feature.icon size={28} strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">
                          {feature.subtitle}
                        </div>
                        <h4 className="font-display font-bold text-gray-900 text-2xl mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {feature.desc}
                        </p>
                        
                        {/* Tags instead of bullet points for a cleaner look */}
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag, tIndex) => (
                            <span 
                              key={tIndex} 
                              className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Divider */}
          <div className="flex items-center justify-center gap-4 mb-24">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow" />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#A3D9D3]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow" />
          </div>

          <div className="text-center bg-white border border-gray-100 rounded-[3rem] p-12 md:p-20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3D9D3]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Meet the Companion <br className="hidden sm:block" /> That's Always There.
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link 
                    to="/progress" 
                    className="px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2"
                  >
                    Explore Progress <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link 
                    to="/about" 
                    className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto inline-flex items-center justify-center"
                  >
                    Join the Journey
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
