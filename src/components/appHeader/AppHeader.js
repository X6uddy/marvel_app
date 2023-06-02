import './appHeader.scss';
import { NavLink, Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                        end
                        style={({isActive}) => ({color: isActive ? 'red' : 'inherit'})}
                        to="/"
                        > Characters </NavLink></li>
                    /
                    <li><NavLink 
                        end
                        style={({isActive}) => ({color: isActive ? 'red' : 'inherit'})}
                        to="/comics"
                        
                        >Comics </NavLink></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;