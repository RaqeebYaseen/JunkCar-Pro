'use client'

import CarCard from './car_card'
import Button from "@/components/ui/button"
import themeColors from '@/lib/utils/theme_colors'

const carList = [
  {
    title: '2024 Luxury Sedan',
    description: 'A sleek and stylish sedan with advanced features and superior comfort.',
    image: '/images/inventory/img0.png',
    price: 25000,
  },
  {
    title: '2024 Family SUV',
    description: 'Spacious and safe SUV, perfect for family trips and everyday driving.',
    image: '/images/inventory/img1.png',
    price: 30000,
  },
  {
    title: '2024 Sport Coupe',
    description: 'Experience the thrill of driving with this high-performance coupe.',
    image: '/images/inventory/img2.png',
    price: 35000,
  },
  {
    title: '2024 Utility Truck',
    description: 'Reliable and powerful truck for all your hauling needs.',
    image: '/images/inventory/img3.png',
    price: 40000,
  },
  {
    title: '2024 Convertible',
    description: 'Enjoy the open road with this stylish convertible.',
    image: '/images/inventory/img4.png',
    price: 45000,
  },
  {
    title: '2024 Hybrid Sedan',
    description: 'Combine fuel efficiency with modern features in this eco-friendly sedan.',
    image: '/images/inventory/img5.png',
    price: 28000,
  },
  {
    title: '2024 Family SUV',
    description: 'Spacious and safe SUV, perfect for family trips and everyday driving.',
    image: '/images/inventory/img1.png',
    price: 30000,
  },
  {
    title: '2024 Luxury Sedan',
    description: 'A sleek and stylish sedan with advanced features and superior comfort.',
    image: '/images/inventory/img0.png',
    price: 25000,
  },
]

const InventorySection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-bold mb-10 text-center">Inventory</h2> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {carList.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          {/* <button className="border border-black text-black px-6 py-2 font-semibold rounded hover:bg-black hover:text-white transition-colors">
            View More
          </button> */}
               <Button
                            size="md"
                            textColor={themeColors.secondary}
                            borderColor={themeColors. secondary}
                            hoverBorderColor={themeColors. secondary}
                            hoverFillColor={themeColors. secondary}
                            hoverTextColor='#ffffff'
                        >
                            View More
                        </Button>
        </div>
      </div>
    </section>
  )
}

export default InventorySection
