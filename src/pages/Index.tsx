import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время для согласования времени пробного урока.",
    });
    setFormData({ name: '', email: '', phone: '', age: '', message: '' });
  };

  const courses = [
    {
      title: "Python Scratch",
      age: "7-10 лет",
      emoji: "🐍",
      description: "Визуальное программирование для самых маленьких",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Web-разработка",
      age: "11-14 лет", 
      emoji: "💻",
      description: "Создание сайтов на HTML, CSS и JavaScript",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Python Pro",
      age: "13-17 лет",
      emoji: "🚀",
      description: "Продвинутое программирование и создание проектов",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Game Dev",
      age: "10-16 лет",
      emoji: "🎮",
      description: "Разработка игр на Unity и Unreal Engine",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      role: "Senior преподаватель Python",
      experience: "8 лет опыта",
      emoji: "👩‍💻"
    },
    {
      name: "Дмитрий Иванов",
      role: "Web-разработчик",
      experience: "6 лет опыта",
      emoji: "👨‍💻"
    },
    {
      name: "Елена Сидорова",
      role: "Game Developer",
      experience: "5 лет опыта",
      emoji: "👩‍🎓"
    }
  ];

  const reviews = [
    {
      name: "Мария, мама Саши (10 лет)",
      text: "Сын в восторге от занятий! За 3 месяца научился создавать игры в Scratch.",
      rating: 5
    },
    {
      name: "Алексей, папа Кати (12 лет)",
      text: "Отличная школа! Дочь создала свой первый сайт и теперь мечтает стать программистом.",
      rating: 5
    },
    {
      name: "Ольга, мама Максима (14 лет)",
      text: "Преподаватели умеют заинтересовать. Максим с нетерпением ждет каждого урока!",
      rating: 5
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "16:00-18:00", course: "Python Scratch" },
    { day: "Вторник", time: "17:00-19:00", course: "Web-разработка" },
    { day: "Среда", time: "16:00-18:00", course: "Python Pro" },
    { day: "Четверг", time: "17:00-19:00", course: "Game Dev" },
    { day: "Пятница", time: "16:00-20:00", course: "Все курсы" },
  ];

  const faqItems = [
    {
      question: "С какого возраста можно начинать?",
      answer: "Мы принимаем детей от 7 лет. Для каждого возраста есть специально адаптированная программа."
    },
    {
      question: "Нужен ли компьютер для занятий?",
      answer: "Да, необходим компьютер или ноутбук с доступом в интернет. Все программы бесплатные."
    },
    {
      question: "Сколько длится курс?",
      answer: "Базовый курс рассчитан на 6 месяцев при занятиях 2 раза в неделю по 1 часу."
    },
    {
      question: "Можно ли заниматься индивидуально?",
      answer: "Да, у нас есть индивидуальные занятия с персональным преподавателем."
    }
  ];

  const portfolio = [
    { project: "Игра 'Космические приключения'", author: "Саша, 10 лет", emoji: "🚀" },
    { project: "Сайт-портфолио", author: "Катя, 12 лет", emoji: "🌐" },
    { project: "Чат-бот для Telegram", author: "Максим, 14 лет", emoji: "🤖" },
    { project: "2D платформер", author: "Даша, 13 лет", emoji: "🎮" }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            КИДЛИД
          </h1>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-secondary to-orange-600 hover:opacity-90">
            Бесплатный урок
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-float">🚀</div>
          <div className="absolute top-40 right-20 text-5xl animate-float" style={{animationDelay: '1s'}}>⭐</div>
          <div className="absolute bottom-20 left-1/4 text-4xl animate-float" style={{animationDelay: '2s'}}>🎮</div>
          <div className="absolute bottom-40 right-1/4 text-5xl animate-float" style={{animationDelay: '1.5s'}}>💻</div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">Онлайн-школа • 2-10 класс</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
              ДЕТСКАЯ IT-ШКОЛА ОТ УСПЕШНЫХ...
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Школу основали эксперты с реальным опытом работы в IT. Научим программировать легко и весело! 🎯
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-orange-600 hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Попробовать бесплатно
            </Button>
          </div>
          <div className="animate-scale-in hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/files/e77e033c-45db-4dcd-8cfe-fb3546dddcca.jpg"
                alt="Счастливый ученик"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">✨</span>
              <h2 className="text-4xl font-heading font-bold">ПОДРОБНЕЕ О НАС</h2>
            </div>
            <p className="text-xl text-muted-foreground">Программы адаптированы под возраст и уровень</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4 animate-float`}>
                    {course.emoji}
                  </div>
                  <CardTitle className="font-heading text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">👨‍🏫</span>
              <h2 className="text-4xl font-heading font-bold">Наши преподаватели</h2>
            </div>
            <p className="text-xl text-muted-foreground">Практикующие IT-специалисты с опытом работы с детьми</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-5xl mb-4">
                    {teacher.emoji}
                  </div>
                  <CardTitle className="font-heading">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">{teacher.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">📅</span>
              <h2 className="text-4xl font-heading font-bold">Расписание занятий</h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex justify-between items-center p-6">
                  <div className="flex items-center gap-4">
                    <Icon name="Calendar" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-semibold font-heading">{item.day}</h3>
                      <p className="text-sm text-muted-foreground">{item.course}</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">{item.time}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">⭐</span>
              <h2 className="text-4xl font-heading font-bold">Отзывы родителей</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-heading">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🏆</span>
              <h2 className="text-4xl font-heading font-bold">Портфолио учеников</h2>
            </div>
            <p className="text-xl text-muted-foreground">Проекты наших студентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-5xl mb-2">{item.emoji}</div>
                  <CardTitle className="text-lg font-heading">{item.project}</CardTitle>
                  <CardDescription>{item.author}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">❓</span>
              <h2 className="text-4xl font-heading font-bold">Часто задаваемые вопросы</h2>
            </div>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="trial-form" className="py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Запись на бесплатный пробный урок</h2>
            <p className="text-xl text-blue-100">Оставьте заявку и мы свяжемся с вами в ближайшее время! 🚀</p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя ребенка *</Label>
                  <Input 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Введите имя"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Возраст ребенка *</Label>
                  <Input 
                    id="age" 
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="7-17 лет"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email родителя *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@mail.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите об интересах ребенка..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-secondary to-orange-600 hover:opacity-90 text-white font-bold text-lg py-6 rounded-xl shadow-xl"
                >
                  Отправить заявку 🎯
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@kidlead.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (939) 113-62-46</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-heading font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@kidlead_support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold mb-2">КИДЛИД</h3>
          <p className="text-blue-200">© 2025 Онлайн школа программирования для детей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
