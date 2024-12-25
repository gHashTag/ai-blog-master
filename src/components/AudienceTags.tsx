import { Sparkles, Instagram, Briefcase, Palette, PenTool, GraduationCap, Lightbulb } from 'lucide-react';

type AudienceTag = {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
};

const audienceTags: AudienceTag[] = [
  {
    icon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Для новичков",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-700"
  },
  {
    icon: <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Без опыта",
    bgColor: "bg-amber-100",
    textColor: "text-amber-700"
  },
  {
    icon: <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Начинающим",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700"
  },
  {
    icon: <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Для блогеров",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700"
  },
  {
    icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Для бизнеса",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700"
  },
  {
    icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Дизайнерам",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700"
  },
  {
    icon: <PenTool className="w-3 h-3 sm:w-4 sm:h-4" />,
    text: "Копирайтерам",
    bgColor: "bg-green-100",
    textColor: "text-green-700"
  },
];

export function AudienceTags() {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-3 md:gap-4 px-1 sm:px-4">
      {audienceTags.map((tag, index) => (
        <span
          key={index}
          className={`inline-flex items-center gap-1 sm:gap-2 ${tag.bgColor} ${tag.textColor} 
            px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium
            hover:shadow-sm transition-all duration-300 cursor-pointer select-none`}
        >
          {tag.icon}
          <span className="truncate max-w-[80px] sm:max-w-none">{tag.text}</span>
        </span>
      ))}
    </div>
  );
}