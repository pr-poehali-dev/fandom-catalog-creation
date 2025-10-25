import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import type { Fandom } from '@/types/fanfic';

interface FandomCardProps {
  fandom: Fandom;
}

const FandomCard = ({ fandom }: FandomCardProps) => {
  const formattedDate = new Date(fandom.updatedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Link to={`/fandom/${fandom.slug}`}>
      <Card className="group overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in">
        <div className="aspect-square relative overflow-hidden bg-accent">
          <img 
            src={fandom.coverUrl} 
            alt={fandom.title}
            className="w-full h-full object-cover object-[center_20%] transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-2xl font-bold text-white">{fandom.title}</h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {fandom.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {fandom.worksCount} {fandom.worksCount === 1 ? 'работа' : 'работ'}
            </span>
            <span className="text-xs text-muted-foreground">
              {formattedDate}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FandomCard;