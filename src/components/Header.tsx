import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="https://cdn.poehali.dev/projects/efdf6b54-320c-462c-937f-cde5c2cbee6a/files/1b858e7d-b144-4865-a9f9-7c10655045bd.jpg" 
            alt="Аватар автора"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
          />
          <span className="text-xl font-semibold">Каталог работ</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            Обо мне
          </Link>
          <Link to="/contacts" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="mailto:author@example.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Icon name="Mail" size={20} />
          </a>
          <a 
            href="https://t.me/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Telegram"
          >
            <Icon name="Send" size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;