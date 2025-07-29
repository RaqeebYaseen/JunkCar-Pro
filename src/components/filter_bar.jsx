'use client'

import { useState } from 'react'
import themeColors from '@/lib/utils/theme_colors'

const filters = [
  {
    label: 'Car Brand',
    value: 'All Cars',
    options: ['Toyota', 'Honda', 'Ford', 'Chevrolet'],
  },
  {
    label: 'Location',
    value: 'All Cities',
    options: ['New York', 'Los Angeles', 'Chicago', 'Miami'],
  },
  {
    label: 'Price Range',
    value: '$500–$2000',
    options: ['$0–$500', '$500–$2000', '$2000–$5000', '$5000+'],
  },
]

const FilterBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <div className="absolute bottom-0 left-0 w-full z-20">
      {/* Transparent bar */}
      <div className="w-full bg-transparent px-4 pb-4">
        <div className="max-w-7xl mx-auto flex justify-end gap-4 items-end">

         

          {/* 🔁 Filter Buttons */}
          {filters.map((filter, i) => (
            <div
              key={i}
              onClick={() =>
                setActiveDropdown(activeDropdown === i ? null : i)
              }
              className="relative bg-white text-black shadow-md skew-x-[-20deg] overflow-visible min-w-[160px] h-[72px] cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="py-3 px-5 skew-x-[20deg] text-center h-full flex flex-col justify-center">
                <p className="text-xs font-bold uppercase mb-1">
                  {filter.label} <span>▴</span>
                </p>
                <p className="text-sm text-gray-500">{filter.value}</p>
              </div>

              {/* 🔼 Drop-up list */}
              {activeDropdown === i && (
                <ul className="absolute bottom-full mb-2 left-0 w-full skew-x-[20deg] z-30 bg-white shadow-lg border">
                  {filter.options.map((option, j) => (
                    <li
                      key={j}
                      className="px-4 py-2 text-sm text-center hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
{/* ✅ RIGHT-WALL SEARCH BOX (square with clipped left edge) */}
<div
  className="relative min-w-[340px] h-[72px] bg-white shadow-md overflow-hidden"
  style={{
    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
  }}
>
  {/* Inner Orange Parallelogram Button */}
  <button
    className="absolute inset-0 m-auto w-[80%] h-[70%] skew-x-[-20deg] flex items-center justify-center text-white font-semibold text-sm transition-transform hover:scale-105"
    style={{ backgroundColor: themeColors.primary }}
  >
    Search
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
