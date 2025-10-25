import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import WorkCard from '@/components/WorkCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { mockWorks } from '@/data/mockData';

const WorkPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = mockWorks.find(w => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Работа не найдена</h1>
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

  const recommendedWorks = mockWorks
    .filter(w => 
      w.id !== work.id && 
      (w.fandomId === work.fandomId || w.tags.some(tag => work.tags.includes(tag)))
    )
    .slice(0, 4);

  const formattedDate = new Date(work.publishedAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to={`/fandom/${work.fandomId}`} 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться к {work.fandomTitle}
          </Link>

          <article className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-accent sticky top-24">
                  <img 
                    src={work.coverUrl} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold mb-3">{work.title}</h1>
                  <p className="text-muted-foreground mb-4">{work.summary}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Фандом:</span>
                    <p className="font-medium">{work.fandomTitle}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Рейтинг:</span>
                    <p className="font-medium">{work.rating}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Статус:</span>
                    <p className="font-medium">
                      {work.status === 'Complete' ? 'Завершён' : 'В процессе'}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Объём:</span>
                    <p className="font-medium">{work.words.toLocaleString()} слов</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Опубликовано:</span>
                    <p className="font-medium">{formattedDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Просмотры:</span>
                    <p className="font-medium">{work.views.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Icon name="Share2" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                  {work.isExternal && work.externalUrl && (
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(work.externalUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Открыть в Teletype
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {!work.isExternal && work.content && (
              <>
                <Separator className="my-8" />
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: work.content }}
                />
              </>
            )}
          </article>

          {recommendedWorks.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Рекомендуемые работы</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedWorks.map((recWork) => (
                  <WorkCard key={recWork.id} work={recWork} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default WorkPage;
