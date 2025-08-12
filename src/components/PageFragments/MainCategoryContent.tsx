"use client";
import React from "react";
import { useCategories } from "../lib/woocommerce";
import SubCategoryCard from "../Cards/SubCategoryCard";

const MainCategoryContent = () => {
	// WooCommerce API Category
	const {
		data: categories,
		isLoading: categoryWpIsLoading,
		isError: categoryIsError,
	} = useCategories("");

	const Categories: CategoryType[] = categories;

	// Loading skeleton component
	const LoadingSkeleton = () => (
		<section className='mb-8'>
			<div className='space-y-4'>
				<div className='h-8 bg-gray-200 rounded-md animate-pulse w-48' />
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'>
					{Array.from({ length: 8 }).map((_, index) => (
						<div
							key={index}
							className='bg-gray-200 rounded-lg animate-pulse h-[200px] sm:h-[250px]'
						/>
					))}
				</div>
			</div>
		</section>
	);

	// Error state component
	const ErrorState = () => (
		<section className='mb-8'>
			<div className='text-center py-12'>
				<div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
					<svg
						className='w-8 h-8 text-red-600'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</div>
				<h3 className='text-lg font-medium text-gray-900 mb-2'>
					Unable to load categories
				</h3>
				<p className='text-gray-500 mb-4'>
					There was an error loading the categories. Please try again later.
				</p>
				<button
					onClick={() => window.location.reload()}
					className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'
				>
					Try Again
				</button>
			</div>
		</section>
	);

	// Empty state component
	const EmptyState = () => (
		<section className='mb-8'>
			<div className='text-center py-12'>
				<div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
					<svg
						className='w-8 h-8 text-gray-400'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
						/>
					</svg>
				</div>
				<h3 className='text-lg font-medium text-gray-900 mb-2'>
					No categories found
				</h3>
				<p className='text-gray-500'>
					There are currently no categories available to display.
				</p>
			</div>
		</section>
	);

	// Render loading state
	if (categoryWpIsLoading) {
		return <LoadingSkeleton />;
	}

	// Render error state
	if (categoryIsError) {
		return <ErrorState />;
	}

	// Render empty state
	if (!Categories || Categories.length === 0) {
		return <EmptyState />;
	}

	// Main content render
	return (
		<section className='mb-8'>
			<div className='space-y-6'>
				{/* Header Section */}
				<div className='flex items-center justify-between'>
					<div>
						<h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
							All Categories
						</h2>
						<p className='text-gray-600 text-sm sm:text-base'>
							Discover our wide range of product categories
						</p>
					</div>
					<div className='hidden sm:flex items-center text-sm text-gray-500'>
						<span className='bg-gray-100 px-3 py-1 rounded-full'>
							{Categories.length} {Categories.length === 1 ? 'Category' : 'Categories'}
						</span>
					</div>
				</div>

				{/* Categories Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
					{Categories.map((data) => (
						<div
							key={data.id}
							className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'
						>
							<SubCategoryCard
								name={data?.name}
								id={data?.id?.toString()}
								image={data?.image?.src}
							/>
						</div>
					))}
				</div>

				{/* Mobile Category Count */}
				<div className='sm:hidden flex justify-center'>
					<span className='bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600'>
						{Categories.length} {Categories.length === 1 ? 'Category' : 'Categories'}
					</span>
				</div>
			</div>
		</section>
	);
};

export default MainCategoryContent;