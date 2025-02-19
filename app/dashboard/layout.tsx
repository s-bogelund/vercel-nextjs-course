import React, { FC } from 'react';
import SideNav from '../ui/dashboard/sidenav';

type LayoutProps = {children: React.ReactNode};

const Layout: FC<LayoutProps> = ({children}) => {
	return <div
	className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
		<div className="w-full flex-none md:w-64">
			<SideNav />
		</div>
		<div className='flex-grow p-6 md:overlow-y-auto md:p-12'>
			{children}
		</div>
	
	</div>;
};

export default Layout;
