import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Rocket,
  CheckCircle,
  Star
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
      title: "Equipe Especializada",
      description: "Profissionais qualificados com experiência internacional em ciência de dados e IA.",
      highlight: "Experts Certificados"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Track record de sucesso com mais de 100 projetos entregues para empresas líderes.",
      highlight: "100+ Projetos"
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

  const stats = [
    {
      number: "50+",
      label: "Empresas Atendidas",
      description: "Clientes satisfeitos em diversos sectores"
    },
    {
      number: "100+",
      label: "Projetos Concluídos",
      description: "Soluções entregues com sucesso"
    },
    {
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Clientes que recomendam nossos serviços"
    },
    {
      number: "24/7",
      label: "Suporte Técnico",
      description: "Disponibilidade para assistência contínua"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      position: "Directora de TI",
      company: "Banco Nacional",
      quote: "A InteliDados transformou completamente nossa abordagem aos dados. Os insights gerados revolucionaram nossas decisões estratégicas.",
      rating: 5
    },
    {
      name: "João Pereira",
      position: "CEO",
      company: "RetailMax Angola",
      quote: "Profissionalismo exemplar e resultados excepcionais. Recomendo fortemente para qualquer empresa que busque excelência em dados.",
      rating: 5
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
            Por que Escolher a <span className="text-cyan-500">InteliDados</span>?
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
                  <span className="text-sm font-semibold">Garantido</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Falam por Si
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Resultados concretos que demonstram nossa capacidade de entregar excelência.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-blue-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que Dizem Nossos Clientes
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de empresas que transformaram seus negócios conosco.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-cyan-600 font-semibold">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
