import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  CheckCircle
} from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Expertise Local",
      description: "Conhecimento profundo do mercado angolano e suas especificidades empresariais.",
      highlight: "100% Angolano"
    },
    {
      icon: Users,
      title: "Equipa Especializada",
      description: "Profissionais qualificados com experiência internacional em ciência de dados e IA.",
      highlight: "Experts Certificados"
    },
    {
      icon: Award,
      title: "Foco em Resultados",
      description: "Metodologias orientadas a resultados, focadas em gerar valor real e mensurável para o seu negócio.",
      highlight: "Orientado a Valor"
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade.",
      highlight: "Agilidade"
    },
    {
      icon: Shield,
      title: "Segurança de Dados",
      description: "Protocolos rigorosos de segurança e conformidade com padrões internacionais.",
      highlight: "Dados Seguros"
    },
    {
      icon: Rocket,
      title: "Inovação Constante",
      description: "Sempre atualizados com as mais recentes tecnologias e tendências do mercado.",
      highlight: "Tecnologia de Ponta"
    }
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
    <section id="porque-escolher" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Porquê escolher a <span className="text-cyan-500">InteliDados</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos expertise técnica com conhecimento local para entregar
            soluções que realmente fazem a diferença no seu negócio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon & Highlight */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Check Icon */}
                <div className="mt-6 flex items-center text-cyan-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">Compromisso</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
