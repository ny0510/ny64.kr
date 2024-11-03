import ProfileSection from '../components/ProfileSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import TimelineSection from '../components/TimelineSection.tsx';

const Home = () => {
	return (
		<div className="flex w-full flex-col gap-y-10">
			<ProfileSection />
			<AboutSection />
			<ProjectsSection />
			<TimelineSection />
		</div>
	);
};

export default Home;
