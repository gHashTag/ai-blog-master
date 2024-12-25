import { ChevronDown } from 'lucide-react';
import { modules } from './Modules';

export function CourseProgram() {
  

  return (
    <div className="bg-white rounded-2xl p-8">
    <h2 className="text-5xl font-bold mb-8 text-center">Программа курса</h2>
    <div className="space-y-4">
      {modules.map((module, index) => (
        <details key={index} className="group">
          <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
            <span className="font-medium">{module.title}</span>
            <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="p-4 text-gray-600">
            <p dangerouslySetInnerHTML={{ __html: module.description }}></p>
          </div>
        </details>
      ))}
    </div>
  </div>
  );
}