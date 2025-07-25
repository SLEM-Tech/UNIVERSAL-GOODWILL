import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import Picture from "@src/components/picture/Picture";
import CategoryCard from "@src/components/CategoryCard";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: title,
  description: description,
  icons: SEODATA.defaultOGImage,
  openGraph: {
    images: [
      {
        url: SEODATA.defaultOGImage,
      },
    ],
  },
};

const page = () => {
  return (
    <AppLayout className="w-screen mx-auto overflow-hidden">
      {/* <Picture
        src="/images/BG.png"
        alt={"hero-image"}
        className="w-full object-cover bg-primaryColor-300/40 mt-40"
      /> */}
      <CategoryCard />
      <div className="pt-2 mx-auto max-w-[1256px]">
        <AllCategorySection />
        <div className="mt-4 sm:mt-10">
          <SortedProducts />
        </div>
      </div>
    </AppLayout>
  );
};

export default page;
