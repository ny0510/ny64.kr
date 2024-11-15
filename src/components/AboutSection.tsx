const AboutSection = () => {
	return (
		<section id="about" className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
			<div className="text-xl font-semibold md:w-1/3">
				<h2>About</h2>
			</div>
			<div className="flex flex-col gap-y-3 md:w-2/3">
				<p className="text-neutral-300">
					안녕하세요 <span className="font-bold">NY64</span> 라는 이름으로 활동하고 있는 김가온 입니다.
				</p>
			</div>
		</section>
	);
};

export default AboutSection;
