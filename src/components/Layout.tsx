import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className="max-w-4xl mx-auto py-6 px-4 sm:px-10">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
