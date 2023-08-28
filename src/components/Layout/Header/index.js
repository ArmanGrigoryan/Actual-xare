import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import RSMobileMenu from './RSMobileMenu';
import normalLogo from '../../../assets/img/logo/lite-logo.png';
import darkLogo from '../../../assets/img/logo/dark-logo.png';

const Header = (props) => {
	const { parentMenu } = props;
	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<React.Fragment>
			<div className={'full-width-header home8-style4 main-home'}>
				<header id="rs-header" className='rs-header'>

					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
							<div className="row y-middle">
								<div className="col-lg-2">
									<div className="logo-area hidden-md">
										<Link to="/">
											<img className="normal-logo" src={normalLogo} alt="" />
											<img className="sticky-logo" src={darkLogo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8 text-end">
									<div className="rs-menu-area">
										<div className="main-menu">
											<div className="mobile-menu md-display-block">
												<Link to="/" className="mobile-normal-logo"><img className="normal-logo" src={darkLogo} alt="" /></Link>
												<Link to="/" className="mobile-sticky-logo"><img src={darkLogo} alt="logo" /></Link>
												<Link to="#" className="rs-menu-toggle" onClick={() => {
													setMenuOpen(!menuOpen)
												}}>
													<i className="fa fa-bars"></i>
												</Link>
											</div>
											<nav className="rs-menu hidden-md">
												<ul className="nav-menu">
													<MenuItems />
												</ul>
											</nav>
										</div>
									</div>
								</div>
								<div className="col-lg-2 text-end hidden-md">
									<div className="expand-btn-inner search-icon">
										<ul className="expand-items">
											<li className="user-icon last-icon hidden-lg">
												<Link to="/shop/my-account"><i className="fa fa-user" aria-hidden="true"></i></Link>
											</li>
											<li className="nav-expander hidden-lg">
												<span className="dot1"></span>
												<span className="dot2"></span>
												<span className="dot3"></span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						parentMenu={parentMenu}
					/>
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				</header>
			</div>
		</React.Fragment>
	);
}

export default Header;