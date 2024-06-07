import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className={`container`}>
                <div className="navbar">
                    <Link to={'/'}>
                        <div className="navbar_logo">🔴 Ecommerce</div>
                    </Link>
                    <ul className="navbar_links">
                        <Link to={'/category/Remeras'}>
                            <li className="navbar_link">Remeras</li>
                        </Link>
                        <Link to={'/category/Buzos'}>
                            <li className="navbar_link">Buzos</li>
                        </Link>
                        <Link to={'/category/Zapatillas'}>
                            <li className="navbar_link">Zapatillas</li>
                        </Link>
                    </ul>
                    <div className="navbar_others">
                        <ul className="navbar_links">
                            <NavLink to={'/contacto'} className={({ isActive }) => isActive ? "fondoRojo" : "otroFondo"}>
                                <li className="navbar_link">Contacto</li>
                            </NavLink>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}
