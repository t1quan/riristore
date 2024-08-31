function Hero() {
	return (
		<section className="my-5">
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
				<div className="rounded-lg bg-gray-800 min-h-[200px] lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2"></div>
				<div className="rounded-lg bg-gray-800 min-h-[200px] lg:col-start-3 lg:col-span-2"></div>
				<div className="rounded-lg bg-gray-800 min-h-[200px] hidden md:block"></div>
				<div className="rounded-lg bg-gray-800 min-h-[200px] hidden md:block"></div>
			</div>
		</section>
	);
}

export default Hero;
