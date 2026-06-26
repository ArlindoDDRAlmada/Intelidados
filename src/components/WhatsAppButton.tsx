import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '244931281875';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de saber mais sobre os serviços da InteliDados.'
);

// Floating WhatsApp button — the primary contact channel in Angola.
const WhatsAppButton: React.FC = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
  >
    <FaWhatsapp className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
