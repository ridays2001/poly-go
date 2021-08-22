import React from 'react';
import Nav from './Nav';

const Layout = ({ children, page }) => (
	<>
		<Nav active={page} />
		{children}
	</>
);

export default Layout;
