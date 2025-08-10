"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
					Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
					Universal Goodwill Industries Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
					At Universal Goodwill Industries Limited, we are dedicated to delivering innovative software solutions while maintaining the highest standards of privacy protection and customer satisfaction.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "termsOfUse"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("termsOfUse")}
					>
						Terms of use
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "privacyPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("privacyPolicy")}
					>
						Privacy Policy
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "deliveryReturn"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("deliveryReturn")}
					>
						Delivery & Return
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "refundPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("refundPolicy")}
					>
						Refund Policy
					</button>
					</div>
				</section>
				
				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
					<div id='termsOfUse' className='text-[#667085]'>
						<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
						Terms of Use - Universal Goodwill Industries Limited
						</h4>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						By accessing and using Universal Goodwill Industries Limited's software applications and services, you agree to be bound by these comprehensive terms and conditions:
						</p>

						<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>Software Solutions:</span> Universal Goodwill Industries specializes in enterprise-grade software applications designed for business efficiency and productivity. All software is licensed under our standard End User License Agreement (EULA) with specific usage rights and restrictions clearly defined.
						</li>
						<li>
							<span className='font-medium'>License Types:</span> We offer individual, business, and enterprise licenses with varying features and usage limits. Multi-user licenses require proper user management and compliance with seat allocations. Unauthorized license sharing or redistribution is strictly prohibited.
						</li>
						<li>
							<span className='font-medium'>User Eligibility:</span> Software purchasers must be 18 years or older, or represent a legally registered business entity. Educational institutions and non-profit organizations may qualify for special licensing terms and discounted rates.
						</li>
						<li>
							<span className='font-medium'>Account Management:</span> Users are responsible for securing their account credentials, license keys, and activation codes. Account sharing is prohibited except within authorized multi-user licenses. Suspicious account activity will result in temporary suspension pending investigation.
						</li>
						<li>
							<span className='font-medium'>Payment & Billing:</span> All software licenses require payment prior to activation. Subscription services are billed in advance with automatic renewal unless cancelled 30 days before renewal date. Payment failures may result in service interruption.
						</li>
						<li>
							<span className='font-medium'>Software Delivery:</span> Digital delivery typically occurs within 1-6 hours of payment verification. Physical media delivery available for enterprise customers at additional cost. All installations include comprehensive documentation and setup assistance.
						</li>
						<li>
							<span className='font-medium'>Technical Support:</span> Complimentary technical support included for 12 months from purchase date. Support covers installation, basic configuration, and troubleshooting. Advanced customization and integration services available at premium rates.
						</li>
						<li>
							<span className='font-medium'>Software Updates:</span> Regular updates include security patches, bug fixes, and feature enhancements. Major version upgrades may require additional licensing fees. Beta testing programs available for qualifying customers.
						</li>
						<li>
							<span className='font-medium'>Data Protection:</span> Our software implements end-to-end encryption and complies with international data protection standards. Users maintain ownership of their data processed through our applications with full export capabilities.
						</li>
						</ul>

						<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Compliance & Legal:</span> Universal Goodwill Industries software complies with Nigerian software regulations and international standards. Violation of licensing terms may result in license termination and legal action.
						</p>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Terms Updates:</span> These terms may be updated periodically with notice provided via email and website announcement. Continued use of software constitutes acceptance of updated terms.
						</p>
					</div>
					)}

					{activeTab === "privacyPolicy" && (
					<div id='privacyPolicy' className='text-[#667085]'>
						<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
						PRIVACY POLICY - UNIVERSAL GOODWILL INDUSTRIES LIMITED
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Universal Goodwill Industries Limited is committed to protecting the privacy and security of our software users. This comprehensive policy explains our data collection, processing, and protection practices for all our software applications and services.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						DATA COLLECTION FOR SOFTWARE APPLICATIONS
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
						<li>User identification data (name, email, company information, job title)</li>
						<li>Software licensing information (license keys, activation data, purchase history)</li>
						<li>System specifications and hardware configurations for compatibility optimization</li>
						<li>Software usage patterns and feature utilization statistics</li>
						<li>Technical support interactions and issue resolution records</li>
						<li>Application performance data and error logs for improvement purposes</li>
						<li>Payment processing information for license management</li>
						<li>Communication preferences for software updates and support</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						HOW WE UTILIZE YOUR DATA
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
						<li>To deliver and manage software licenses and activations</li>
						<li>To provide personalized technical support and troubleshooting</li>
						<li>To develop and improve software features based on user feedback</li>
						<li>To ensure software security and prevent unauthorized usage</li>
						<li>To process payments and maintain accurate billing records</li>
						<li>To communicate important software updates and security alerts</li>
						<li>To offer relevant software upgrades and complementary products</li>
						<li>To conduct user satisfaction surveys and product research</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						ENTERPRISE DATA SECURITY MEASURES
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						We employ enterprise-grade security infrastructure including 256-bit AES encryption, secure cloud storage with redundant backups, and multi-factor authentication for sensitive operations. Our software applications feature built-in security modules that protect user data during processing and transmission. Regular security audits ensure compliance with international cybersecurity standards.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						DATA SHARING & THIRD PARTIES
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Universal Goodwill Industries never sells user data to third parties. We may share anonymized usage statistics with technology partners for software improvement purposes. Payment processing is handled by certified financial service providers under strict confidentiality agreements. Law enforcement requests are handled according to Nigerian legal requirements with user notification where legally permitted.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						USER RIGHTS & DATA CONTROL
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						You have complete control over your data including rights to access, modify, or delete personal information. Software usage data can be exported in standard formats. You may opt-out of non-essential communications while maintaining access to critical security updates. For comprehensive data management requests, contact our Privacy Team at privacy@universalgoodwill.com.ng.
						</p>
					</div>
					)}

					{activeTab === "deliveryReturn" && (
					<div id='deliveryReturn' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						SOFTWARE DELIVERY & RETURN POLICY - UNIVERSAL GOODWILL INDUSTRIES LIMITED
						</h3>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Universal Goodwill Industries Limited ensures seamless software delivery and comprehensive support services to maximize your investment in our enterprise software solutions.
						</p>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Digital Software Delivery
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Enterprise software delivered within 1-6 hours via secure download portal</li>
							<li>Multi-platform installers provided for Windows, macOS, and Linux systems</li>
							<li>Comprehensive installation packages include setup wizards and configuration tools</li>
							<li>License keys and activation codes delivered through encrypted email</li>
							<li>Download access maintained for 30 days with unlimited retrieval rights</li>
							<li>Emergency replacement downloads available 24/7 for registered users</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Enterprise Support Services
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Dedicated support team for enterprise customers with priority response</li>
							<li>Remote installation assistance and system configuration support</li>
							<li>On-site deployment services available for large implementations</li>
							<li>Custom integration support for existing business systems</li>
							<li>User training programs and certification courses included</li>
							<li>24/7 emergency support hotline: +234-801-234-5002</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Software Updates & Maintenance
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Automatic update notifications through software dashboard</li>
							<li>Critical security patches deployed within 12 hours of availability</li>
							<li>Feature updates included free for first 18 months</li>
							<li>Beta access program for early feature testing and feedback</li>
							<li>Version rollback support for compatibility requirements</li>
							<li>Extended maintenance contracts available for legacy systems</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Return & Exchange Policies
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>45-day satisfaction guarantee with full refund option</li>
							<li>Free software edition upgrades within 30 days of purchase</li>
							<li>License downgrades available with prorated refund calculation</li>
							<li>Enterprise license transfers permitted with administrative approval</li>
							<li>Trial-to-paid conversions with seamless data migration</li>
							<li>Bulk licensing adjustments for changing organizational needs</li>
						</ul>
						</div>

					</div>
					)}

					{activeTab === "refundPolicy" && (
					<div id='refundPolicy' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						REFUND POLICY - UNIVERSAL GOODWILL INDUSTRIES LIMITED
						</h3>
						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Effective Date: {new Date().toLocaleDateString('en-GB')}
						</p>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						At Universal Goodwill Industries Limited, we stand behind the quality of our software applications and are committed to ensuring customer satisfaction through our comprehensive refund policy designed specifically for enterprise and individual software users.
						</p>

						<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>1. Standard Software Refund Terms</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>45-day money-back guarantee for all software licenses</li>
							<li>Full refund if software fails to meet published performance specifications</li>
							<li>Compatibility issues with supported operating systems qualify for refunds</li>
							<li>Technical problems unresolved within 72 hours are eligible for refunds</li>
							<li>License deactivation required before refund processing begins</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>2. Enterprise License Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>90-day evaluation period for enterprise licenses over ₦500,000</li>
							<li>Partial refunds available for unused license seats in volume purchases</li>
							<li>Custom development components subject to milestone-based refund terms</li>
							<li>Integration failure refunds available if compatibility requirements aren't met</li>
							<li>Priority refund processing for enterprise customers (2-3 business days)</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>3. Non-Refundable Services</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Custom software development after final acceptance and delivery</li>
							<li>Training services and certification programs already completed</li>
							<li>Software licenses used beyond the guarantee period without issues</li>
							<li>Third-party software components and integrations</li>
							<li>Promotional licenses and special discount purchases (clearly marked)</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>4. Refund Request Process</span>
							<p className='mt-1'>To initiate a refund request:</p>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Submit original purchase documentation and license information</li>
							<li>Provide detailed explanation of refund grounds</li>
							<li>Complete software usage assessment and deactivation process</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>5. Refund Processing & Timeline</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Standard refund requests reviewed within 3 business days</li>
							<li>Enterprise refunds prioritized with 2-day review process</li>
							<li>Technical verification completed within 5 business days</li>
							<li>Approved refunds processed within 7-14 business days</li>
							<li>International payments may require additional processing time</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>6. Alternative Resolution Options</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Software edition downgrades with partial refund calculation</li>
							<li>License suspension with future reactivation option</li>
							<li>Credit towards alternative software solutions in our portfolio</li>
							<li>Extended trial periods for evaluation completion</li>
							<li>Customized payment plans for enterprise customers</li>
							</ul>
						</li>
						</ul>

					</div>
					)}
				</div>
				</main>
		</AppLayout>
	);
};

export default Page;
