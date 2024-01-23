import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
//import Logo from '../../images/logo.png';

export const Navigation = () => {
    
    return (
        <div className={css.navigation}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} width="10%" alt="logo" />
            {/* <img src={Logo} width="10%" alt="logo"/> */}
            <nav >
                <NavLink to="/">О компании</NavLink>
                <NavLink to="services">Услуги</NavLink>
                <NavLink to="price">Цены и сроки</NavLink>
                <NavLink to="services">Контакты</NavLink>
                <NavLink to="registerCargo">Оформить груз</NavLink>
            </nav>
        </div>

    )
}