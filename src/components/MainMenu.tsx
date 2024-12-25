import { Link } from 'react-router-dom';

export function MainMenu() {
  const tabs = [
    { name: "Главная", href: "/" },
    { name: "Программа курса", href: "/course" },
    { name: "Частые вопросы", href: "/faq" },
    { name: "Тарифы", href: "/price" },
    { name: "Контакты", href: "/contacts" },

  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-pink-600">НейроБлогер</div>
          <div className="space-x-4">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.href}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 