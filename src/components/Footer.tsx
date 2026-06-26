import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram,
  Twitter,
  ArrowUp,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Consultoria em Ciência de Dados",
    "Desenvolvimento de Soluções",
    "Transformação Digital",
    "Modelos Preditivos",
    "Análise de Dados",
    "Integração de Sistemas"
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Processo", href: "#processo" },
    { name: "Contacto", href: "#contato" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23ffffff' points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              <img
                src={`${import.meta.env.BASE_URL}logoIntelidados.jpg`}
                alt="InteliDados Consultoria"
                className="h-16 w-auto"
              />
              
              <p className="text-gray-300 leading-relaxed">
                Especialistas em transformação digital e análise de dados, 
                ajudando empresas angolanas a prosperarem na era digital.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">Mártires, rua 8, escritório n° 21B<br />Luanda, Angola</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">+244 931 281 875 / +244 931 281 619</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">intelidadosconsultoria@outlook.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-lg transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left text-sm">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left text-sm flex items-center"
                    >
                      {link.name}
                      {link.href === "#" && <ExternalLink className="w-3 h-3 ml-1" />}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Newsletter</h3>
              <p className="text-gray-300 text-sm">
                Receba insights sobre dados, IA e transformação digital 
                diretamente no seu email.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                  Subscrever
                </button>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Contacto Directo</h4>
                <p className="text-cyan-400 font-semibold">NIF: 5002473151</p>
                <p className="text-gray-300 text-sm mt-2">
                  "Da informação à ação: descomplique seus dados connosco"
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2024 InteliDados Consultoria. Todos os direitos reservados.
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>Feito com</span>
                  <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                  <span>em Angola</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Política de Privacidade
                </button>
                <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Termos de Uso
                </button>
                
                {/* Back to Top */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded-lg transition-colors duration-300"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
