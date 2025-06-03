
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Trophy, Users, Calendar, Star } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Trophy, label: "Матчей в FTCL", value: "50+" },
    { icon: Users, label: "Активных фанатов", value: "1000+" },
    { icon: Calendar, label: "Лет истории", value: "5+" },
    { icon: Star, label: "Рейтинг", value: "★★★★★" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Logo and Title */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-4xl font-bold text-white">A</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              АТАЛАНТА
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 text-cyan-200 font-light tracking-wide">
              РОФЛ-ФУТБОЛЬНЫЙ КЛУБ
            </p>
            
            <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Легендарная команда Football Telegram Champions League с богатой историей и непоколебимым духом
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://t.me/RegataFTCL', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Телеграм-канал
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              О клубе
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Наши достижения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            О клубе
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p className="transform hover:scale-105 transition-all duration-300">
              <strong className="text-cyan-400">Аталанта</strong> — это больше чем просто рофл-футбольный клуб. 
              Это семья единомышленников, объединённых любовью к футболу и здоровому юмору.
            </p>
            
            <p className="transform hover:scale-105 transition-all duration-300">
              Мы выступаем в престижной лиге <strong className="text-blue-400">FTCL (Football Telegram Champions League)</strong>, 
              где сражаемся с лучшими командами телеграм-сообщества.
            </p>
            
            <p className="transform hover:scale-105 transition-all duration-300">
              Наша философия проста: играть красиво, болеть искренне, шутить остроумно. 
              Присоединяйтесь к нашему каналу и станьте частью легенды!
            </p>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://t.me/RegataFTCL', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Подписаться на канал
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            АТАЛАНТА FTCL
          </div>
          <p className="text-slate-400 mb-4">
            Рофл-футбольный клуб • Football Telegram Champions League
          </p>
          <div className="flex justify-center space-x-2 text-slate-500">
            <span>Создано с ❤️ для FTCL сообщества</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
