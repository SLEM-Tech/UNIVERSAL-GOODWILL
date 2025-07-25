import React from "react";
import { Search, ShoppingBag, User, ChevronRight } from "lucide-react";
import Link from "@node_modules/next/link";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  image,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
    >
      <Link href={"/category"}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-white text-3xl max-md:text-2xl font-bold leading-tight mb-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white text-3xl max-md:text-medium font-bold leading-tight">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 group-hover:bg-opacity-30 transition-all duration-300">
              <Link href={"/category"}>
                <ChevronRight className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const EcommerceHomepage: React.FC = () => {
  return (
    <div className="bg-gray-50 mt-14">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

        {/* Navigation */}
        <nav className="border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 overflow-x-auto">
              {[
                "NEW ARRIVAL",
                "MOST PICKED",
                // "SALE",
                // "WOMEN",
                // "MEN",
                // "SNEAKERS",
                "GADGETS",
                "APPLIANCES",
                "CONTACT US"
              ].map((item) => (
                <a
                  key={item}
                  href={`${item === "CONTACT US" ? "/contact-us" : "/category"}`}
                  className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex max-md:flex-col lg:grid-cols-2 gap-6 max-md:gap-3 h-auto lg:h-[600px]">
          {/* Winter Arrival - Large Card */}
          <CategoryCard
            title="Winter Arrival"
            subtitle="Of Outfit"
            image="/images/winterofarrival.png"
            className="w-2/3 max-md:w-full lg:row-span-2"
          />

          {/* Top Cosmetics */}
          <CategoryCard
            title="Top"
            subtitle="Cosmetics"
            image="/images/topcosmetics.png"
            className="w-1/3 max-md:w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-md:gap-3 mt-6">
          {/* Gadgets On The Go */}
          <CategoryCard
            title="Gadgets"
            subtitle="On The Go"
            image="/images/gadgets.png"
            className="h-[300px]"
          />

          {/* Sport Footwear */}
          <CategoryCard
            title="Sport"
            subtitle="Footwear"
            image="/images/sportfootwear.png"
            className="h-[300px]"
          />
        </div>
      </main>
    </div>
  );
};

export default EcommerceHomepage;
