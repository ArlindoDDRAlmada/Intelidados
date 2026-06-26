import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Shuffle, 
  TrendingUp, 
  Database, 
  Settings, 
  GraduationCap, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Soluções Tecnológicas",
      description: "Criamos plataformas digitais, softwares e aplicações móveis sob medida para o seu negócio.",
      features: ["Plataformas Web", "Apps Mobile", "Sistemas Personalizados"]
    },
    {
      icon: Brain,
      title: "Consultoria em Ciência de Dados e IA",
      description: "Especialistas em inteligência artificial, machine learning e análise estatística avançada.",
      features: ["Machine Learning", "IA Aplicada", "Análise Estatística"]
    },
    {
      icon: Shuffle,
      title: "Transformação Digital",
      description: "Estudos e implementação completa de processos de transformação digital empresarial.",
      features: ["Diagnóstico Digital", "Estratégia de Transformação", "Implementação"]
    },
    {
      icon: TrendingUp,
      title: "Modelos Preditivos",
      description: "Desenvolvemos soluções baseadas em dados para previsão de tendências e comportamentos.",
      features: ["Análise Preditiva", "Forecasting", "Modelos Estatísticos"]
    },
    {
      icon: Database,
      title: "Gestão e Análise de Dados",
      description: "Coleta, tratamento, análise e visualização de dados para insights estratégicos.",
      features: ["Data Mining", "Visualização", "Business Intelligence"]
    },
    {
      icon: Settings,
      title: "Integração e Automação",
      description: "Integração de sistemas, automação de processos e soluções em nuvem.",
      features: ["Cloud Computing", "Automação", "Integração de Sistemas"]
    },
    {
      icon: GraduationCap,
      title: "Cursos e Treinamentos",
      description: "Programas de capacitação em tecnologia, dados e transformação digital.",
      features: ["Workshops", "Cursos Online", "Treinamento Corporativo"]
    },
    {
      icon: ShoppingCart,
      title: "Produtos e Conteúdos Digitais",
      description: "Comercialização de produtos digitais e conteúdos especializados em dados.",
      features: ["E-books", "Templates", "Ferramentas Digitais"]
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
    <section id="servicos" className="py-20 bg-white">
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
            Nossos <span className="text-cyan-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de soluções em dados e tecnologia 
            para impulsionar a transformação digital da sua empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="group/btn flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-300">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para Transformar Seus Dados?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco e descubra como podemos ajudar a sua empresa 
              a aproveitar todo o potencial dos seus dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center">
                Consulta Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                Ver Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
