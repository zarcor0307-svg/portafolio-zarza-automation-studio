/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring } from "motion/react";
import { Zap, MessageSquare, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Interactive Mouse Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-50"
        style={{
          background: `radial-gradient(600px at ${cursorX}px ${cursorY}px, rgba(37, 99, 235, 0.15), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/Gemini_Generated_Image_4qfok54qfok54qfo.png" 
              alt="Zarza Automation Studio Logo" 
              className="w-12 h-12 object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-xl font-bold tracking-tight text-white">Zarza <span className="text-blue-500">Automation Studio</span></span>
          </div>
          <button className="hidden md:block text-sm font-medium hover:text-blue-400 transition-colors">
            Servicios
          </button>
          <a 
            href="https://calendly.com/zarcor0307/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 overflow-hidden"
          >
            <span className="relative z-10">Consultoría Gratuita</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Tu negocio, trabajando <br className="hidden md:block" />
              mientras tú descansas.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
              Sustituyo tus tareas repetitivas por sistemas inteligentes. Libero a tu equipo de la carga administrativa y me aseguro de que te centres en lo que de verdad genera ingresos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                href="https://calendly.com/zarcor0307/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Consultoría Gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-20"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Resultados que transforman tu negocio
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Result 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group perspective-1000"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Zap className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Recupera tu tiempo</h3>
                <p className="text-slate-400 leading-relaxed">
                  Elimino las tareas repetitivas que te roban horas. Tu negocio fluye solo mientras tú te enfocas en lo que de verdad importa.
                </p>
              </motion.div>

              {/* Result 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group perspective-1000"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <MessageSquare className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Trabaja por ti 24/7</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tu empresa nunca cierra. Implemento sistemas inteligentes que captan clientes y gestionan citas incluso mientras duermes.
                </p>
              </motion.div>

              {/* Result 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: -5, rotateY: 5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group perspective-1000"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <FileText className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Escala sin límites</h3>
                <p className="text-slate-400 leading-relaxed">
                  Crece sin aumentar tus costes fijos. Multiplica tu capacidad operativa eliminando el error humano y la carga administrativa.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              Filosofía Zarza Automation Studio
            </div>
            <p className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
              "Si lo repites, lo automatizo. Zarza Automation Studio."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/Gemini_Generated_Image_4qfok54qfok54qfo.png" 
              alt="Zarza Automation Studio Logo" 
              className="w-8 h-8 object-contain rounded"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-lg font-bold text-white">Zarza Automation Studio</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Zarza Automation Studio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
