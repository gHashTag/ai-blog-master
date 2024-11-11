



export function Projects() {
    const projects = [
      {
        title: "Личный ИИ-аватар",
        description: "Создадите своего цифрового двойника с уникальным голосом и внешностью",
        tools: ["ElevenLabs", "FLUX 1", "CapCat"]
      },
      {
        title: "Автоматическая нейроворонка",
        description: "Настроите систему автоматического создания и публикации контента",
        tools: ["ChatGPT", "Midjourney", "Buffer"]
      },
      {
        title: "Клиентский кейс",
        description: "Проведете полную настройку системы для реального клиента",
        tools: ["Все изученные инструменты"]
      }
    ];
  
    return (
      <div className="bg-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Практические проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all">
              <h3 className="font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="space-y-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="inline-block bg-white px-3 py-1 rounded-full text-sm text-pink-600 mr-2 mb-2">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }