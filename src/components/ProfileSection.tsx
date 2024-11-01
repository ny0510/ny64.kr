import { useState, useEffect } from 'react';
import { Github, Mail, Coffee, Rss } from 'lucide-react';
import Profile from '../assets/profile.webp';

const birthday = new Date('2007-02-06');

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
			<img src={Profile} alt="Profile" className="rounded-full h-32 w-32" />
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-3xl font-bold mt-4">NY64</h1>
				<div className="flex flex-row items-center rounded-3xl px-4 py-2 text-sm border border-neutral-800 hover:border-neutral-500 transition duration-500 gap-1">
					<span className="font-bold">태어난지</span>
					<span className={`tabular-nums transition duration-200 ease-in-out ${animate ? 'text-neutral-100' : 'text-neutral-400'}`}>{afterBirth} ms</span>
				</div>
				<div className="text-center">
					<a href="https://github.com/ny0510" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 p-2 font-medium transition duration-200 hover:opacity-70">
						<Github size={22} />
					</a>
					<a href="mailto:me@ny64.kr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 p-2 font-medium transition duration-200 hover:opacity-70">
						<Mail size={22} />
					</a>
					<a href="https://paypal.me/ny64" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 p-2 font-medium transition duration-200 hover:opacity-70">
						<Coffee size={22} />
					</a>
					<a href="https://blog.ny64.kr/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 p-2 font-medium transition duration-200 hover:opacity-70">
						<Rss size={22} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
