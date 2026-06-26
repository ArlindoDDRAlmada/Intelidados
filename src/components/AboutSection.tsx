import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Buscamos sempre as mais avançadas tecnologias para entregar soluções inovadoras."
    },
    {
      icon: Heart,
      title: "Ética com Dados",
      description: "Tratamos dados com responsabilidade, transparência e conformidade regulatória."
    },
    {
      icon: Target,
      title: "Transformação com Propósito",
      description: "Focamos em mudanças que geram impacto real nos negócios dos nossos clientes."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Mantemos os mais altos padrões de qualidade em todos os nossos projetos."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Construímos soluções personalizadas que atendem às necessidades específicas."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Sobre a <span className="text-cyan-500">InteliDados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em transformar dados em insights estratégicos, 
            ajudando empresas angolanas a prosperarem na era digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Company Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={`${import.meta.env.BASE_URL}building.png`}
              alt="InteliDados Consultoria - Escritório"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-2xl" />
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500 p-3 rounded-lg mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ajudar empresas angolanas a transformar dados em decisões estratégicas, 
                impulsionando eficiência e inovação através de soluções de análise de dados 
                e preparando o terreno para a adoção de inteligência artificial.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal referência em consultoria de dados e IA em Angola até 2030, 
                contribuindo para a transformação digital do país e o fortalecimento de uma 
                economia baseada em conhecimento.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que orientam cada projeto e relacionamento que construímos.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            InteliDados Consultoria (IC)
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-2">NIF</div>
              <div className="text-blue-100">5002473151</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Localização</div>
              <div className="text-blue-100">Luanda, Kinaxixi, Edifício ESCOM, 4.º andar</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Contactos</div>
              <div className="text-blue-100">
                931281875 / 931281619<br />
                geral@intelidadosconsulting.com
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
