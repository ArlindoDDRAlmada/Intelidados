import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Cog, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  BarChart3
} from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Análise e Diagnóstico",
      description: "Compreendemos profundamente o seu negócio, desafios e objectivos para identificar as melhores oportunidades de transformação.",
      details: [
        "Auditoria completa dos dados existentes",
        "Mapeamento de processos atuais",
        "Identificação de gaps e oportunidades",
        "Definição de KPIs e métricas de sucesso"
      ],
      duration: "1-2 semanas",
      deliverable: "Relatório de Diagnóstico Estratégico"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Estratégia e Planeamento",
      description: "Desenvolvemos uma estratégia personalizada e um roadmap detalhado para alcançar os seus objectivos de transformação digital.",
      details: [
        "Desenvolvimento de estratégia customizada",
        "Criação de roadmap de implementação",
        "Definição de arquitectura de solução",
        "Planeamento de recursos e timeline"
      ],
      duration: "2-3 semanas",
      deliverable: "Plano Estratégico de Transformação"
    },
    {
      icon: Cog,
      number: "03",
      title: "Implementação e Desenvolvimento",
      description: "Executamos o plano com metodologias ágeis, garantindo transparência total e entregas incrementais de valor.",
      details: [
        "Desenvolvimento iterativo com sprints",
        "Testes contínuos e validação",
        "Integração com sistemas existentes",
        "Treinamento da equipe interna"
      ],
      duration: "4-12 semanas",
      deliverable: "Solução Completa Implementada"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Monitorização e Otimização",
      description: "Fornecemos suporte contínuo, monitorização de performance e otimizações para garantir o máximo retorno do investimento.",
      details: [
        "Monitorização contínua de performance",
        "Suporte técnico especializado",
        "Otimizações baseadas em dados",
        "Relatórios regulares de ROI"
      ],
      duration: "Contínuo",
      deliverable: "Dashboard de Monitorização e Relatórios"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  return (
    <section id="processo" className="py-20 bg-white">
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
            Como <span className="text-cyan-500">Trabalhamos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso processo estruturado garante resultados excepcionais através 
            de metodologias comprovadas e acompanhamento personalizado.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-cyan-500 to-blue-600 origin-top"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    
                    {/* Step Number & Title */}
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xl font-bold w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-3 mb-6">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Deliverable */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-100">
                      <div className="flex items-center">
                        <BarChart3 className="w-5 h-5 text-cyan-600 mr-2" />
                        <span className="font-semibold text-gray-900 text-sm">Entregável:</span>
                      </div>
                      <p className="text-cyan-700 font-medium mt-1">{step.deliverable}</p>
                    </div>
                  </div>
                </div>

                {/* Step Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-xl"
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  {/* Connecting Circle */}
                  <div className="hidden lg:block absolute inset-0 bg-white rounded-2xl border-4 border-cyan-500 -z-10 scale-125" />
                </div>

                {/* Arrow (for mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden">
                    <ArrowRight className="w-6 h-6 text-cyan-500 transform rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23ffffff' points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para Começar Sua Transformação?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Nossa equipe está preparada para dar início ao seu projeto. 
                Agende uma consulta gratuita e descubra como podemos ajudar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Agendar Consulta Gratuita
                </button>
                <span className="text-gray-400">ou</span>
                <button className="border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                  Baixar Brochura
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
