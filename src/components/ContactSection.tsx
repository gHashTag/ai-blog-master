export function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 relative">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-700">Контакты</h2>
        <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6 text-lg">
            У вас есть вопросы или хотите узнать больше? Свяжитесь с нашим менеджером, и мы с радостью поможем вам!
          </p>
          <a
            href="https://t.me/neuro_sage"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all inline-block text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}