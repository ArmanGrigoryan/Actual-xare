import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <li className={location.pathname === "/" ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}>
                <Link to="/"> Գլխավոր </Link>
            </li>
            <li className={location.pathname.includes("/course") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/course"> Դասընթացներ </Link>
            </li>
            <li className={location.pathname.includes("/blog") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/blog"> Բլոգ </Link>
            </li>
            <li className={location.pathname.includes('/event') ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/event"> Իրադարձություն </Link>
            </li>
            <li className={location.pathname.includes("/about") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/about"> Մեր մասին </Link>
            </li>
            <li className={location.pathname.includes('/contact') ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/contact"> Կապ </Link>
            </li>

            {/* <li className={location.pathname === "/checkout" ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/checkout"> Այլ </Link>
            </li> */}
        </React.Fragment>
    );
}

export default MenuItems;