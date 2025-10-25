import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Icon name="BookOpen" size={24} className="text-primary" />
          <span className="text-xl font-semibold">Fanfic Library</span>
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
