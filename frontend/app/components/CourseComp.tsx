import Image from 'next/image';
import Link from 'next/link';
import ExpandableText from './EcalpsedTxt';
import CourseImage from './CourseImg';

type Course = {
  id: string;
  title: string;
  description: string;
  Loading: boolean;
  price: number;
  imageUrl: string | null;
};

function CourseComp({ imageUrl, title, id, description, price , Loading }: Course) {
  return (
    <div className="w-full max-h-fit flex flex-col text-right rounded-2xl bg-[#e6d3a3]/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-[#e6d3a3]/20">
      <div className="w-full h-64 relative">
        {
          Loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1C1C18]/50 z-10">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
            </div>
          )
        }
        {imageUrl && (
          <CourseImage  title={title} />
        )}
      </div>
      <div className="p-6 md:p-8 space-y-6 bg-[#e6d3a3]/10 backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#e6d3a3] leading-tight">
          {title}
        </h1>
        <ExpandableText text={description} />
        <p className="text-2xl font-bold text-white mb-6">{price} <span>جنيه</span></p>
        <Link href={`/user/courses/${id}`}>
          <button className="w-full px-6 mb-5 py-4 rounded-xl text-xl font-semibold bg-[#e6d3a3] hover:bg-[#d4c38c] text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            اشترك الآن
          </button>
        </Link>

      </div>
    </div>
  );
}

export default CourseComp;
