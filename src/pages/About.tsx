import { motion } from "motion/react";
import { Users, Target, Zap, Rocket, Instagram } from "lucide-react";
import satvikImg from "../assets/Satvik.png";
import heetImg from '../assets/Heet.jpeg'
import utsavImg from "../assets/Utsav.jpeg"
import { image } from "framer-motion/client";
export function About() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are a small team of engineers, designers, and dreamers building the future of emotional computing.
          </p>
        </motion.div>

        {/* Our Mission */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#A3D9D3]/20 flex items-center justify-center text-[#6BB5AC]">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Why are we building LUMA? Because the devices we interact with every day are cold, utilitarian, and demanding. They beep, they buzz, they demand our attention.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              We believe there's room on your desk for something that just <span className="text-[#6BB5AC]">exists with you</span>. A companion that blends emotion with engineering to create a subtle, comforting presence.
            </p>
          </div>
        </section>

        {/* The Team */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-500">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900">The Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Satvik Chauhan", role: "Technical Architect & Operations Lead", desc: "Leads system architecture, firmware development, and cross domain integration to ensure seamless hardware–software alignment.", image : satvikImg, instagram : "@heheshashi" },
              { name: "Heet Sorathia", role: "Hardware & Mechanical Lead", desc: "Oversees product engineering, 3D design, and structural development, ensuring manufacturability and mechanical precision.", image : heetImg, instagram : "@heet_so_" },
              { name: "Utsav Raj", role: "Experience & Identity Lead", desc: "Directs product identity, user experience, and visual design, shaping LUMA’s emotional presence and interaction model.", image : utsavImg, instagram : "@activolreta" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-white shadow-md mb-6 overflow-hidden relative">
                  <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500" /> */}
                  {/* Placeholder avatar graphic */}
                  {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gray-400 rounded-t-full opacity-50" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-400 rounded-full opacity-50" /> */}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#6BB5AC] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>

                <a 
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors mt-auto"
                >
                  <Instagram size={18} />
                  <span className="text-sm font-medium">{member.instagram}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900">Our Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Iterative Building", desc: "We prototype rapidly, testing physical models weekly to refine the form factor." },
              { title: "User-First Design", desc: "Every feature is tested against the question: 'Does this feel natural?'" },
              { title: "Emotional Testing", desc: "We measure success not just by utility, but by the smiles LUMA generates." },
              { title: "Engineering Discipline", desc: "Under the cute exterior is a robust, repairable, and extensible architecture." }
            ].map((approach, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-display font-semibold text-gray-900 mb-2">{approach.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{approach.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
              <Rocket size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900">Vision</h2>
          </div>
          
          <div className="relative rounded-[2.5rem] bg-gray-900 text-white p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3D9D3]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-display font-medium leading-relaxed mb-8">
                LUMA is just the beginning. We envision a future where technology adapts to our emotional state, creating an ecosystem of devices that feel less like tools and more like companions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                <div>
                  <h5 className="text-[#A3D9D3] font-semibold mb-2">Ecosystem</h5>
                  <p className="text-gray-400 text-sm">Seamless integration with your existing workflow.</p>
                </div>
                <div>
                  <h5 className="text-[#A3D9D3] font-semibold mb-2">Personalization</h5>
                  <p className="text-gray-400 text-sm">A companion that truly reflects your personality.</p>
                </div>
                <div>
                  <h5 className="text-[#A3D9D3] font-semibold mb-2">AI Expansion</h5>
                  <p className="text-gray-400 text-sm">Future updates bringing deeper contextual awareness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
