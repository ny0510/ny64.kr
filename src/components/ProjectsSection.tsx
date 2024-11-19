const ProjectsData: { title: string; description: string; url: string; image?: string }[] = [{ title: 'NM', description: 'Discord music bot with Discord.js + Lavalink', url: 'https://github.com/NY0510/NM-New' }];

const ProjectsSection = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
			<div className="text-xl font-semibold md:w-1/4">
				<h2>Projects</h2>
			</div>
			<div className="flex flex-col gap-y-3 md:w-3/4">
				<div className="grid grid-cols-1 gap-4 smm:grid-cols-1 sm:grid-cols-2 auto-rows-fr">
					{ProjectsData.map((data, index) => (
						<ProjectCard key={index} title={data.title} description={data.description} link={data.url} image={data.image} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, link, image, index }: { title: string; description: string; link: string; image?: string; index: number }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`w-full flex flex-col rounded-lg border border-neutral-800 bg-neutral-900 transition-all hover:border-neutral-500 hover:shadow-sm ${image ? 'row-span-2' : ''} ${ProjectsData.length % 2 !== 0 && index === ProjectsData.length - 1 ? 'col-span-2' : ''}`}>
			{image && <div className="flex-auto bg-center bg-cover rounded-t-lg" style={{ backgroundImage: `url(${image})` }} />}
			<div className="flex flex-col gap-y-0.5 px-5 py-4">
				<h1 className="text-lg font-medium">{title}</h1>
				<p className="text-neutral-300">{description}</p>
			</div>
		</a>
	);
};

export default ProjectsSection;
