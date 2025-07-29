'use client'

import Image from 'next/image'
import themeColors from '@/lib/utils/theme_colors'

const CarCard = ({ car }) => {
  return (
    <div className="border shadow-sm rounded-sm overflow-hidden bg-white">
      {/* Image */}
      <div className="relative w-full aspect-video"> {/* 16:9 Aspect Ratio */}
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{car.description}</p>

        {/* Bottom: Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="text-sm font-semibold text-white px-4 py-2 rounded transition-all duration-300 hover:brightness-110 hover:shadow-lg"
            style={{ backgroundColor: themeColors.primary }}
          >
            View Detail
          </button>
          <span className="text-lg font-bold">${car.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

export default CarCard
