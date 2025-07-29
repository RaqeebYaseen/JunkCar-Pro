'use client'

import Image from "next/image"
import features from "@/lib/data/features"

const WhyChooseSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* 🔹 Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/features/features_bg.png"
          alt="Why Choose Junk Car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-end px-6 lg:px-12 py-16">
        <div className="text-white w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">
            Why Choose Junk Car?
          </h2>
          <p className="text-md md:text-lg mb-10 text-right">
            Experience unparalleled service and exceptional vehicle quality with features designed to make your car-buying journey seamless and enjoyable.
          </p>

        <div className="flex flex-col items-center gap-6">
  {/* Row 1: 3 cards */}
  {/* <div className="flex flex-wrap justify-center gap-6">
    {features.slice(0, 3).map((item, i) => (
      <div
        key={i}
        className="w-[300px] min-h-[250px] bg-white/10 backdrop-blur-md rounded-lg p-6 text-center text-white shadow-md transition-transform hover:scale-105 hover:shadow-xl"
      >
        <div className="mb-4 flex justify-center">
          <img src={item.icon} alt={item.title} className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.description}</p>
      </div>
    ))}
  </div> */}

  {/* Row 2: 2 cards centered */}
  <div className="flex justify-center gap-6">
    {features.slice(0, 3).map((item, i) => (
      <div
        key={i}
        className="w-[250px] min-h-[150px] bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white shadow-md transition-transform hover:scale-105 hover:shadow-xl"
      >
        <div className="mb-4 flex justify-center">
          <img src={item.icon} alt={item.title} className="w-14 h-14" />
        </div>
        <h3 className="text-base font-semibold mb-2">{item.title}</h3>
        <p className="text-xs text-gray-200">{item.description}</p>
      </div>
    ))}
  </div>
  <div className="flex justify-center gap-6">
    {features.slice(3, 5).map((item, i) => (
      <div
        key={i+3}
        className="w-[250px] min-h-[150px] bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white shadow-md transition-transform hover:scale-105 hover:shadow-xl"
      >
        <div className="mb-4 flex justify-center">
          <img src={item.icon} alt={item.title} className="w-14 h-14" />
        </div>
        <h3 className="text-base font-semibold mb-2">{item.title}</h3>
        <p className="text-xs text-gray-200">{item.description}</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>

      {/* 🔻 Bottom-left white shape */}
      <div
        className="absolute bottom-0 left-0 w-48 h-48 bg-white z-10"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  )
}

export default WhyChooseSection
