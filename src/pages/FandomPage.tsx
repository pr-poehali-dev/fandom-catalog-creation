import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import WorkCard from '@/components/WorkCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { mockFandoms, mockWorks } from '@/data/mockData';
import type { StatusType, RatingType } from '@/types/fanfic';

const FandomPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<StatusType | 'all'>('all');
  const [selectedRating, setSelectedRating] = useState<RatingType | 'all'>('all');

  const fandom = mockFandoms.find(f => f.slug === slug);
  
  if (!fandom) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Фандом не найден</h1>
          <Link to="/">
            <Button>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  let filteredWorks = mockWorks.filter(work => work.fandomId === fandom.id);

  if (searchQuery) {
    filteredWorks = filteredWorks.filter(work =>
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  if (selectedStatus !== 'all') {
    filteredWorks = filteredWorks.filter(work => work.status === selectedStatus);
  }

  if (selectedRating !== 'all') {
    filteredWorks = filteredWorks.filter(work => work.rating === selectedRating);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться к фандомам
          </Link>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-3">{fandom.title}</h1>
            <p className="text-lg text-muted-foreground">{fandom.description}</p>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Поиск работ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Статус:</span>
              <div className="flex gap-2">
                <Badge
                  variant={selectedStatus === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedStatus('all')}
                >
                  Все
                </Badge>
                <Badge
                  variant={selectedStatus === 'Complete' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedStatus('Complete')}
                >
                  Завершён
                </Badge>
                <Badge
                  variant={selectedStatus === 'WIP' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedStatus('WIP')}
                >
                  В процессе
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Рейтинг:</span>
              <div className="flex gap-2">
                <Badge
                  variant={selectedRating === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedRating('all')}
                >
                  Все
                </Badge>
                {(['G', 'PG', 'PG-13', 'R'] as RatingType[]).map(rating => (
                  <Badge
                    key={rating}
                    variant={selectedRating === rating ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedRating(rating)}
                  >
                    {rating}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-lg text-muted-foreground">
              Работы не найдены
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Попробуйте изменить фильтры или поисковый запрос
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FandomPage;
