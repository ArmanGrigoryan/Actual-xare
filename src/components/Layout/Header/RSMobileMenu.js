import React from 'react';
import MenuItems from './MenuItems.js';

const RSMobileMenu = ({ menuOpen, headerFullWidth }) => {

	return (
		<div className={headerFullWidth ? "container-fluid relative" : "container relative"}>
			<div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
				<div className="mobile-menu radius-12">
					<ul className="nav-menu">
						<MenuItems />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMobileMenu;