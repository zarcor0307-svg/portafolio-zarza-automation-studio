import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0d1117]/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#161b22] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#161b22] z-10">
              <h2 className="text-2xl font-bold text-white">Política de Privacidad</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto text-slate-300 space-y-6 leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold text-white mb-2">1. Información General</h3>
                <p>
                  Zarza Automation Studio, liderado por Sergi Zarza Cortés, con contacto en zarcor0307@outlook.es, se compromete a proteger la privacidad de sus usuarios. Esta política describe cómo se maneja la información recopilada a través de este sitio web.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">2. Recopilación de Datos</h3>
                <p>
                  Solo recopilamos información que usted proporciona voluntariamente al agendar una consultoría a través de Calendly o al contactarnos directamente. Esto puede incluir su nombre, correo electrónico y detalles sobre su negocio.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">3. Finalidad del Tratamiento</h3>
                <p>
                  Los datos se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Gestionar las citas y consultorías solicitadas.</li>
                  <li>Responder a consultas y proporcionar información sobre servicios de automatización.</li>
                  <li>Mejorar la experiencia del usuario en el sitio web.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">4. Terceros</h3>
                <p>
                  Utilizamos servicios de terceros como Calendly para la gestión de citas. Le recomendamos revisar sus respectivas políticas de privacidad. No vendemos ni cedemos sus datos a terceros para fines comerciales.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">5. Sus Derechos</h3>
                <p>
                  Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales en cualquier momento enviando un correo a zarcor0307@outlook.es.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">6. Cookies</h3>
                <p>
                  Este sitio utiliza cookies técnicas mínimas para el funcionamiento básico y análisis anónimo de tráfico.
                </p>
              </section>

              <div className="pt-6 text-sm text-slate-500 border-t border-white/5">
                Última actualización: Marzo 2026
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
