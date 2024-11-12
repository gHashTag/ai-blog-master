import { Instagram, TrendingUp } from "lucide-react";
import { HeroIntensive } from "./HeroIntensive";


export function Tags() {
  return (
 <section className="relative pt-20 pb-32 px-4 overflow-hidden">
 <div className="max-w-7xl mx-auto text-center relative">
   {/* Теги */}
   <div className="flex justify-center gap-4 mb-8">
     <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
       <Instagram className="w-4 h-4" />
       Для блогеров
     </span>
     <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
       <TrendingUp className="w-4 h-4" />
       Рост охватов в 3.5 раза
     </span>
   </div>

   <section className="py-5 px-4">
 <div className="max-w-7xl mx-auto">
 <HeroIntensive />
 </div>
</section>
  );
}