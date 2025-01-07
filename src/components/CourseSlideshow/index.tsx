import { ChevronDown } from 'lucide-react';
import { courseModules } from './Modules';

export function CourseProgram() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">Программа курса</h2>
      <div className="space-y-4">
        {courseModules.map((module, moduleIndex) => (
          <details key={moduleIndex} className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-medium">{module.title}</span>
              <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="p-4 text-gray-600">
              <ul className="list-disc pl-5">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="mb-2">
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}