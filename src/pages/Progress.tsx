import { motion } from "motion/react";
import { CheckCircle2, CircleDashed, Circle, Clock, ArrowRight, Activity } from "lucide-react";

export function Progress() {
  const timeline = [
    { title: "Concept Defined", status: "completed", progress: 100, desc: "Initial sketches, emotional goals, and core feature set locked." },
    { title: "Architecture Designed", status: "completed", progress: 100, desc: "System architecture, component selection, and PCB layout." },
    { title: "Hardware Prototyping", status: "in-progress", progress: 65, desc: "3D printing shells, testing actuators, and refining the screen." },
    { title: "Firmware Development", status: "in-progress", progress: 40, desc: "Writing the animation engine and touch sensor drivers." },
    { title: "Mechanical Refinement", status: "upcoming", progress: 0, desc: "Optimizing for mass manufacturing and durability." },
    { title: "Testing Phase", status: "upcoming", progress: 0, desc: "Beta units sent to early supporters for real-world feedback." },
    { title: "Manufacturing Preparation", status: "upcoming", progress: 0, desc: "Tooling, supply chain setup, and final quality assurance." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A3D9D3]/20 text-[#6BB5AC] font-medium text-sm mb-6">
            <Activity size={16} /> Live Updates
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
            Building LUMA in Public
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in transparency. Follow our journey from early prototypes to the final product on your desk.
          </p>
        </motion.div>

        {/* Current Focus */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3D9D3]/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#A3D9D3] animate-pulse" />
                <span className="font-mono text-sm tracking-widest uppercase text-[#A3D9D3]">Current Focus</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Optimizing the Animation Engine
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
                We're currently fine-tuning the procedural animation system to ensure LUMA's expressions feel fluid and lifelike at a consistent 60fps, even while processing background tasks.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Target Framerate</div>
                  <div className="text-2xl font-mono font-bold text-white">60 FPS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Battery Impact</div>
                  <div className="text-2xl font-mono font-bold text-[#A3D9D3]">-15%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12">Development Timeline</h2>
          
          <div className="relative border-l-2 border-gray-100 ml-6 md:ml-8 space-y-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                className="relative pl-10 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Status Icon */}
                <div className="absolute -left-[17px] top-1 bg-white p-1 rounded-full">
                  {item.status === "completed" ? (
                    <CheckCircle2 className="text-[#6BB5AC] fill-[#A3D9D3]/20" size={24} />
                  ) : item.status === "in-progress" ? (
                    <CircleDashed className="text-blue-500 animate-spin-slow" size={24} />
                  ) : (
                    <Circle className="text-gray-300" size={24} />
                  )}
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-display font-bold text-gray-900">{item.title}</h3>
                    <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                      item.status === "completed" ? "bg-green-50 text-green-600" :
                      item.status === "in-progress" ? "bg-blue-50 text-blue-600" :
                      "bg-gray-50 text-gray-500"
                    }`}>
                      {item.status.replace("-", " ")}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 mb-6">{item.desc}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${
                        item.status === "completed" ? "bg-[#A3D9D3]" :
                        item.status === "in-progress" ? "bg-blue-400" :
                        "bg-transparent"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <div className="text-right mt-2 text-xs font-mono text-gray-400">
                    {item.progress}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roadmap Overview */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Roadmap Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { phase: "Phase 1", title: "Core Experience", items: ["Basic Animations", "Touch Sensors", "Companion App v1"] },
              { phase: "Phase 2", title: "Smart Integration", items: ["Weather API", "Calendar Sync", "Notification Hooks"] },
              { phase: "Phase 3", title: "AI Expansion", items: ["Contextual Awareness", "Voice Recognition", "Personality Evolution"] }
            ].map((phase, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-200/50">
                <div className="text-sm font-mono text-[#6BB5AC] mb-2">{phase.phase}</div>
                <h4 className="font-display font-bold text-gray-900 mb-4 text-lg">{phase.title}</h4>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Community Engagement */}
        <section className="text-center bg-white border border-gray-100 rounded-[3rem] p-12 shadow-sm">
          <div className="w-16 h-16 bg-[#A3D9D3]/20 text-[#6BB5AC] rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Join Early Supporters</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get exclusive behind-the-scenes updates, vote on upcoming features, and secure early access to LUMA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A3D9D3] focus:border-transparent transition-all"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 flex-shrink-0">
              Sign Up <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">We respect your inbox. Updates sent bi-weekly.</p>
        </section>
      </div>
    </div>
  );
}
