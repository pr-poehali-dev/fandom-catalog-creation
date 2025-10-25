import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold mb-6">Обо мне</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Привет! Я автор фанфиков, пишу истории по любимым фандомам уже несколько лет.
            </p>
            
            <p>
              Моя цель — создавать интересные и качественные работы, которые будут радовать читателей.
              Я уделяю внимание проработке персонажей, сюжету и атмосфере оригинальных вселенных.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Мои фандомы
            </h2>
            
            <p>
              Больше всего я люблю писать по вселенным Гарри Поттера, Marvel и Шерлока.
              Каждый фандом открывает уникальные возможности для творчества и позволяет
              исследовать разные жанры — от лёгких романтических историй до серьёзных драм.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Любимые жанры
            </h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Драма и психология персонажей</li>
              <li>Романтика с проработанными отношениями</li>
              <li>Детективы и триллеры</li>
              <li>Альтернативные вселенные (AU)</li>
            </ul>
            
            <p className="mt-8">
              Всегда рада обратной связи и общению с читателями. Пишите мне через контакты,
              буду рада узнать ваше мнение о моих работах!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
