import { MessageCircle, Mail, Instagram, Shield, FileText, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="https://t.me/neuro_blogger_bot" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Телеграм бот
              </a>
              <a href="mailto:reactnativeinitru@gmail.com" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a href="https://www.instagram.com/neuro_coder/" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a href="https://www.youtube.com/@neuro_coder_ai_bot" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </div>
          </div>

          {/* <div>
            <h3 className="font-bold text-lg mb-4">Документы</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Shield className="w-5 h-5" />
                Политика конфиденциальности
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <FileText className="w-5 h-5" />
                Договор оферты
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Shield className="w-5 h-5" />
                Условия возврата
              </a>
            </div>
          </div> */}

          <div>
            <h3 className="font-bold text-lg mb-4">О нас</h3>
            <p className="text-gray-400 mb-4">
              Мы помогаем блогерам и бизнесу автоматизировать их контент и увеличить охваты с помощью искусственного интеллекта и автоматизации.
            </p>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 НейроБлогер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}