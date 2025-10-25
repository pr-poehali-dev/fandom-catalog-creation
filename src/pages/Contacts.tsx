import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'author@example.com',
      href: 'mailto:author@example.com'
    },
    {
      icon: 'Send',
      label: 'Telegram',
      value: '@username',
      href: 'https://t.me/username'
    },
    {
      icon: 'Globe',
      label: 'VK',
      value: 'vk.com/username',
      href: 'https://vk.com/username'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold mb-6">Контакты</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Свяжитесь со мной любым удобным способом. Буду рада обратной связи,
            предложениям и просто общению!
          </p>

          <div className="grid gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={contact.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-lg">{contact.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-accent/50 border-0">
            <div className="flex gap-4">
              <Icon name="Info" size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Время ответа</h3>
                <p className="text-sm text-muted-foreground">
                  Стараюсь отвечать на все сообщения в течение 1-2 дней.
                  Если не получили ответ — возможно, письмо попало в спам.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
