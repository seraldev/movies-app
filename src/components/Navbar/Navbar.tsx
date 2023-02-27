import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="bg-section-main p-6 flex flex-row gap-10-p">
            <h1 className="text-3xl font-bold text-tertiary">Movies APP</h1>

            <ul className="flex flex-row gap-4 items-center">
                <li>
                    <NavLink to="/">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/mylist">My list</NavLink>
                </li>
            </ul>
        </nav>
    )
}
