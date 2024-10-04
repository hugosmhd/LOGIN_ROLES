import { useContext } from 'react';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/context/AuthContext';
import Logo from '../../assets/logo.svg'

export default function Navbar({ navigation }) {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    console.log(navigation);
    

    return (
        <>
            <nav className=" bg-300 navbar navbar-expand-lg navbar-dark  p-2">

                <a className="navbar-brand text-100" href="/login">
                    <img src={Logo} alt="Bootstrap" width="30" height="24" />
                    PeliFlix  
                </a>

                <div className="container-fluid">
                    <div className="navbar-nav">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                className={({ isActive }) => ` text-100 nav-item nav-link ${isActive ? 'active-link' : ''}`}
                                to={item.href}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-200'>
                            {user?.name}
                        </span>

                        <button
                            className='nav-item nav-link btn text-100'
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
            <div className='px-5'>
                <Outlet />
            </div>
        </>
    );
}