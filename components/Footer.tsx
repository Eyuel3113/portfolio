import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import Container from './ui/Container';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0f172a] text-slate-600 dark:text-muted-foreground footer-wrapper">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} Eyuel Endale. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com/Eyuel3113" target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://linkedin.com/in/eyuel-endale-a85073227" target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://t.me/Eyuel_Endale" target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground transition-colors">
              <FaTelegram size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;  
