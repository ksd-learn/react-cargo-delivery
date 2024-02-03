import { NavLink, Outlet } from "react-router-dom";
import css from './Price.module.css';

export const Price = () => {
    
    return (
        <div className={css.price}>
            <h2>Цены и сроки</h2>
            <ul className={css.priceNavigation}>
                <li>
                    <NavLink to="delivery">ВАРИАНТЫ ДОСТАВКИ ГРУЗОВ ИЗ КИТАЯ</NavLink>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}