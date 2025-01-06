import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

export function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/" className="text-2xl font-bold text-pink-600">
            НейроБлогер
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
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
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-2">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.href}
                className="block text-gray-700 hover:text-pink-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}