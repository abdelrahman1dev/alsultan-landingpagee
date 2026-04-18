import React from 'react';
import Link from 'next/link';

function Cta() {
  return (
    <section className="w-[80%] min-h-fit flex mt-20 flex-col gap-20 p-8 rounded-4xl items-center justify-center bg-[#e6d3a3]/10">
      <h1 className="text-6xl font-bold text-center mt-10 mb-5 text-[#E5E5E5]">
        انضم الأن الي زملاءك في منصه السلطان
      </h1>
      <Link href={'/signup'}>
        <button className="w-full px-6 mb-5 py-4 rounded-xl text-xl font-semibold bg-[#e6d3a3] hover:bg-[#d4c38c] text-[#1C1C18] shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer max-w-md mx-auto">
          انشيء حسابك الأن !
        </button>
      </Link>
    </section>
  );
}

export default Cta;
