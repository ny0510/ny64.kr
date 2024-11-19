import { useState, useEffect } from 'react';
import { Github, Mail, Coffee, Rss } from 'lucide-react';
import Profile from '../assets/profile.webp';

const birthday = new Date('2007-02-06');

const ProfileLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
	<a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 p-2 font-medium transition duration-200 hover:opacity-70">
		<Icon size={22} />
	</a>
);

const ProfileSection = () => {
	const [afterBirth, setAfterBirth] = useState<string>('');
	const [tenThousands, setTenThousands] = useState<number>(0);
	const [animate, setAnimate] = useState<boolean>(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const elapsed = new Date().getTime() - birthday.getTime();
			setAfterBirth(elapsed.toLocaleString());

			const newTenThousands = Math.floor(elapsed / 10000);
			if (newTenThousands !== tenThousands) {
				setTenThousands(newTenThousands);
				setAnimate(true);
				setTimeout(() => setAnimate(false), 200);
			}
		}, 1);

		return () => clearInterval(interval);
	}, [tenThousands]);

	return (
		<div className="flex flex-col items-center justify-center h-full gap-1">
			<img src={Profile} alt="Profile" className="rounded-full h-32 w-32 hover:animate-spin-fast" />
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-3xl font-bold mt-4">NY64</h1>
				<div className="flex flex-row items-center rounded-3xl px-4 py-2 text-sm border border-neutral-800 hover:border-neutral-500 transition duration-500 gap-1">
					<span className="font-bold">태어난지</span>
					<span className={`tabular-nums transition duration-200 ease-in-out ${animate ? 'text-neutral-100' : 'text-neutral-400'}`}>{afterBirth} ms</span>
				</div>
				<div className="text-center">
					<ProfileLink href="https://github.com/ny0510" icon={Github} />
					<ProfileLink href="mailto:me@ny64.kr" icon={Mail} />
					<ProfileLink href="https://paypal.me/ny64" icon={Coffee} />
					<ProfileLink href="https://blog.ny64.kr/" icon={Rss} />
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
