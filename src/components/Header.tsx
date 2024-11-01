import { HashLink } from 'react-router-hash-link';

const scrollWithOffset = (el: HTMLElement) => {
	const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
	const yOffset = -80;
	window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const Header = () => {
	return (
		<>
			<header className="fixed top-0 left-0 w-full backdrop-blur z-50 border-b border-background">
				<div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-4 sm:px-10">
					<HashLink smooth to="/#" scroll={(el) => scrollWithOffset(el)}>
						<h1 className="inline-flex items-center gap-2 text-2xl font-medium tracking-tight">NY64</h1>
					</HashLink>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<Link to="/#about">About</Link>
							</li>
							<li>
								<Link to="/#projects">Projects</Link>
							</li>
							<li>
								<Link to="/#timeline">Timeline</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<div className="h-16"></div>
		</>
	);
};

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
	return (
		<HashLink smooth to={to} scroll={(el) => scrollWithOffset(el)} className="font-bold hover:opacity-70 cursor-pointer transition duration-200">
			{children}
		</HashLink>
	);
};

export default Header;
