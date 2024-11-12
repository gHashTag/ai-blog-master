import { Sparkles, Instagram, Briefcase, Palette, PenTool, Users } from 'lucide-react';

interface AudienceTag {
  icon: JSX.Element;
  text: string;
  bgColor: string;
  textColor: string;
}

const audienceTags: AudienceTag[] = [
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Для новичков",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-700"
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    text: "Для блогеров",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700"
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    text: "Для предпринимателей",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700"
  },
  {
    icon: <Palette className="w-4 h-4" />,
    text: "Для дизайнеров",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700"
  },
  {
    icon: <PenTool className="w-4 h-4" />,
    text: "Для копирайтеров",
    bgColor: "bg-green-100",
    textColor: "text-green-700"
  },
  {
    icon: <Users className="w-4 h-4" />,
    text: "Для SMM-специалистов",
    bgColor: "bg-teal-100",
    textColor: "text-teal-700"
  }
];

export function AudienceTags() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {audienceTags.map((tag, index) => (
        <span
          key={index}
          className={`inline-flex items-center gap-2 ${tag.bgColor} ${tag.textColor} 
            px-4 py-2 rounded-full text-sm font-medium
            hover:shadow-md transition-all duration-300 cursor-pointer`}
        >
          {tag.icon}
          {tag.text}
        </span>
      ))}
    </div>
  );
} 