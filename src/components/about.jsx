import React from 'react';
import themeColors from '@/lib/utils/theme_colors'
import Button from "@/components/ui/button"


const AboutSection = () => {
  return (
    <section className=" bg-white container mx-auto px-16 py-16 font-sans">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 rounded-md">
            About Junk Car
          </h2>
          <p className="text-lg text-gray-700 mb-8 rounded-md">
            Committed to providing exceptional car-buying experiences since 2000
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 rounded-md">
            Founded in 2025, Junk Car has been a trusted name in the automotive industry for over two decades. We started with a simple mission: to make car buying easy, transparent, and enjoyable for our customers. Over the years, we've grown from a small local dealership to a renowned automotive hub, offering a wide range of services and an extensive inventory of vehicles.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8 rounded-md">
            What sets us apart from other dealerships is our unwavering commitment to customer satisfaction. We offer a wide selection of vehicles, competitive pricing, flexible financing options, and comprehensive after-sales support. When you choose Junk Car, you can be confident that you're making a smart and informed decision.
          </p>

          {/* <button color={themeColors. secondary} className="hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out">
            Read More
          </button> */}
               <Button
                            size="md"
                            textColor={themeColors. secondary}
                            borderColor={themeColors. secondary}
                            hoverBorderColor={themeColors. secondary}
                            hoverFillColor={themeColors. secondary}
                            hoverTextColor='#ffffff'
                        >
                            Read More
                        </Button>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 w-full lg:w-1/2 rounded-md overflow-hidden shadow-xl">
          <img
            src="/images/about_section.png" // Placeholder image URL
            alt="Luxury car"
            className="w-full h-auto object-cover rounded-md"
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop
              e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
