import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactDetail {
  text: string;
  href?: string;
}

interface ContactCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: ContactDetail[];
}

const ContactSection: React.FC = () => {
  const contactInfo: ContactCard[] = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        { text: "+244 931 281 875", href: "tel:+244931281875" },
        { text: "+244 931 281 619", href: "tel:+244931281619" },
      ],
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: [
        { text: "+244 948 615 915", href: "https://wa.me/244948615915" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "geral@intelidadosconsulting.com", href: "mailto:geral@intelidadosconsulting.com" },
      ],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: [
        { text: "Segunda - Sexta: 8h00 - 18h00" },
        { text: "Sábado: 8h00 - 14h00" },
      ],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        { text: "Kinaxixi, Edifício ESCOM, 4.º andar" },
        { text: "Luanda, Angola" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-cyan-500">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar os seus dados em decisões estratégicas?
            A nossa equipa está aqui para ajudar a sua empresa a crescer.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl mr-4 flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h4>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) =>
                      detail.href ? (
                        <a
                          key={idx}
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-gray-600 hover:text-cyan-600 transition-colors"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <p key={idx} className="text-gray-600">
                          {detail.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-2xl text-white mt-6"
        >
          <h4 className="text-xl font-bold mb-4">InteliDados Consultoria</h4>
          <div className="space-y-2 text-blue-100">
            <p>NIF: 5002473151</p>
            <p>Especialistas em Transformação Digital</p>
            <p>Soluções de Dados e IA para Angola</p>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-400">
            <p className="text-sm text-blue-100">
              "Da informação à ação: descomplique os seus dados connosco"
            </p>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gray-100 h-64 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">Kinaxixi, Edifício ESCOM, 4.º andar</p>
              <p className="text-sm">Luanda, Angola</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
