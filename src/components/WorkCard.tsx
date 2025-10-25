import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import type { Work } from '@/types/fanfic';

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const formattedDate = new Date(work.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleClick = (e: React.MouseEvent) => {
    if (work.isExternal && work.externalUrl) {
      e.preventDefault();
      window.open(work.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Link 
      to={work.isExternal ? '#' : `/work/${work.slug}`}
      onClick={handleClick}
    >
      <Card className="group overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in">
        <div className="aspect-[3/4] relative overflow-hidden bg-accent">
          <img 
            src={work.coverUrl} 
            alt={work.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {work.isExternal && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2">
              <Icon name="ExternalLink" size={16} className="text-primary" />
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {work.title}
            </h3>
            <Badge variant={work.status === 'Complete' ? 'default' : 'secondary'} className="shrink-0">
              {work.status === 'Complete' ? 'Завершён' : 'В процессе'}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {work.summary}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            {work.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>{work.words.toLocaleString()} слов</span>
              <span className="flex items-center gap-1">
                <Icon name="Eye" size={14} />
                {work.views}
              </span>
            </div>
            <span>{formattedDate}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default WorkCard;
