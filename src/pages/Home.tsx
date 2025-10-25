import { useState } from 'react';
import Header from '@/components/Header';
import FandomCard from '@/components/FandomCard';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { mockFandoms } from '@/data/mockData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFandoms = mockFandoms.filter(fandom =>
    fandom.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fandom.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Библиотека фанфиков
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Коллекция авторских работ по любимым фандомам
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Поиск по фандомам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {filteredFandoms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFandoms.map((fandom) => (
              <FandomCard key={fandom.id} fandom={fandom} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-lg text-muted-foreground">
              Фандомы не найдены
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
