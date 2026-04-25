function CoursesLoading() {
  return (
    <div className="w-full min-h-screen flex mt-20 flex-col gap-20 p-5 items-center justify-center">
      <h1 className="text-6xl font-bold text-center mt-10 mb-5 text-[#E5E5E5]">
        الكورسات
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-[#1a1a1a] animate-pulse"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-700" />

            {/* Content */}
            <div className="p-6 space-y-4 bg-[#e6d3a3]/10 backdrop-blur-md">
              {/* Title */}
              <div className="h-6 bg-gray-600 rounded w-3/4" />

              {/* Description */}
              <div className="h-4 bg-gray-600 rounded w-full" />
              <div className="h-4 bg-gray-600 rounded w-5/6" />

              {/* Price */}
              <div className="h-5 bg-gray-500 rounded w-1/4 ml-auto" />

              {/* Button */}
              <div className="h-12 bg-[#d6c08d] rounded-xl w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesLoading;
