import React from 'react';
import { Mail, Phone } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

interface LegalModalProps {
  title: string;
  intro: string;
}

const EMAIL = 'intelidadosconsultoria@outlook.com';

// Placeholder modal for legal pages (Privacy Policy / Terms of Use).
// Shows an honest "being prepared" message plus clickable contact details
// until the real legal text is available — drop the wording into `intro` later.
const LegalModal: React.FC<LegalModalProps> = ({ title, intro }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
        {title}
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-gray-900">{title}</DialogTitle>
          <DialogDescription className="pt-2 text-gray-600 text-left">
            {intro}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm text-gray-700">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center hover:text-cyan-600 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2 text-cyan-600 flex-shrink-0" />
            {EMAIL}
          </a>
          <a
            href="tel:+244931281875"
            className="flex items-center hover:text-cyan-600 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-cyan-600 flex-shrink-0" />
            +244 931 281 875 / +244 931 281 619
          </a>
        </div>

        <DialogClose asChild>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Fale connosco
          </a>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
