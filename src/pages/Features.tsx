import { motion } from "motion/react";
import { Link } from "react-router-dom";
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
  ArrowRight
} from "lucide-react";

export function Features() {
  const sections = [
    {
      id: "emotion",
      title: "Emotion in Motion",
      subtitle: "Emotional Expression Engine",
      icon: Smile,
      description: "LUMA features a dynamic animation engine capable of displaying a wide range of expressive states — joy, curiosity, shyness, excitement, tiredness, and more — designed to feel fluid and lifelike.",
      points: [
        "High frame-rate animation system",
        "Context-aware emotional states",
        "Idle behaviors and micro-expressions",
        "Mood shifts based on interaction"
      ],
      color: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      id: "touch",
      title: "Interactive by Design",
      subtitle: "Touch Interaction",
      icon: Hand,
      description: "LUMA responds to touch with subtle reactions and expressive feedback, creating a sense of physical presence.",
      points: [
        "Capacitive touch response",
        "Reactive animations",
        "Behavioral variation based on interaction frequency"
      ],
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      id: "utility",
      title: "Connected, Yet Minimal",
      subtitle: "Smart Utility Integration",
      icon: Clock,
      description: "LUMA integrates essential smart utilities without overwhelming the experience.",
      points: [
        "Time and weather display",
        "Alarm and timer",
        "Calendar reminders",
        "Birthday animations",
        "Mood-based battery indicator"
      ],
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      id: "personalization",
      title: "Made to Reflect You",
      subtitle: "Personalization System",
      icon: Palette,
      description: "LUMA adapts to your style and preferences through app-based customization.",
      points: [
        "Theme and color customization",
        "Font adjustments",
        "Name and date memory",
        "Special occasion animations"
      ],
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      id: "audio",
      title: "Sound Meets Expression",
      subtitle: "Audio & Ambient Modes",
      icon: Music,
      description: "LUMA can integrate audio experiences with synchronized animations for a richer emotional presence.",
      points: [
        "Music playback mode",
        "Dance animations",
        "Ambient/ASMR mode",
        "Expressive reactions during sound playback"
      ],
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      id: "ai",
      title: "Intelligence That Grows",
      subtitle: "AI & Knowledge Layer",
      icon: BrainCircuit,
      description: "LUMA is designed to evolve with advanced intelligence capabilities.",
      points: [
        "Dictionary-style queries",
        "Conversational AI potential",
        "Context-aware responses",
        "Cloud-connected intelligence framework"
      ],
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      id: "communication",
      title: "Stay Connected",
      subtitle: "Communication Integration",
      icon: MessageSquare,
      description: "LUMA can integrate with your phone to extend communication interaction.",
      points: [
        "Bluetooth call support",
        "Expressive speaking animations",
        "Subtle notification presence"
      ],
      color: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
      id: "modular",
      title: "Designed to Evolve",
      subtitle: "Modular Design Ecosystem",
      icon: Layers,
      description: "LUMA features a modular outer shell system, allowing physical customization without replacing core electronics.",
      points: [
        "Swappable 3D-printed shells",
        "Limited edition designs",
        "Standardized internal core",
        "Upgrade-friendly architecture"
      ],
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      id: "precision",
      title: "Engineered with Intention",
      subtitle: "Built with Precision",
      icon: Settings,
      description: "Compact form factor engineered for balance between visibility, portability, and performance.",
      points: [
        "Fist-sized body",
        "Optimized internal architecture",
        "Durable structure",
        "Battery-efficient system"
      ],
      color: "bg-slate-50 text-slate-600 border-slate-200"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2F5] relative">
      {/* Subtle technical grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] bg-[length:40px_40px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A3D9D3]/20 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative inline-block"
          >
            {/* Luma Placeholder Render */}
            <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              
              {/* Face Screen */}
              <div className="w-40 h-28 bg-black rounded-3xl shadow-inner relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  className="flex gap-6"
                  animate={{ 
                    y: [0, -3, 0, 3, 0],
                    scaleY: [1, 0.95, 1, 1.05, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-6 h-10 bg-[#A3D9D3] rounded-full blur-[2px] shadow-[0_0_15px_rgba(163,217,211,0.8)]" />
                  <div className="w-6 h-10 bg-[#A3D9D3] rounded-full blur-[2px] shadow-[0_0_15px_rgba(163,217,211,0.8)]" />
                </motion.div>
              </div>

              {/* Mechanical details */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-200 rounded-full" />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gray-300 rounded-full" />
            </div>
            
            {/* Floating animation */}
            <motion.div
              className="absolute -inset-4 border border-[#A3D9D3]/30 rounded-[3rem] -z-10"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 7,
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
            Designed to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8AC7C0] to-blue-400">
              Feel Alive.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LUMA combines emotional expression, physical interaction, and intelligent utility in a compact, evolving desktop companion.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <motion.div 
                key={section.id}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.01 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${section.color} transition-colors duration-300`}>
                  <section.icon size={28} strokeWidth={1.5} />
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">{section.subtitle}</div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl group-hover:text-[#6BB5AC] transition-colors">{section.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {section.description}
                </p>
                
                <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A3D9D3] flex-shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
