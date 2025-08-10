import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import HeroSection from "@src/components/PageFragments/HeroSection";

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
		<AppLayout className="className='pt-5 mx-auto  mt-18 sm:mt-24">
			<HeroSection/>
			<div className="className='container max-w-[1440px] pt-2 mx-auto px-8 md:px-16 lg:px-20">
				{/* <AllCategorySection /> */}
				<div className='mt-4 sm:mt-10'>
					<SortedProducts />
				</div>
			</div>
		</AppLayout>
	);
};

export default page;
