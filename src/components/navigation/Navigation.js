import css from './Navigation.module.css';
//import Logo from '../../images/logo.png';

export const Navigation = () => {
    
    return (
        <nav className={css.navigation}>
            {/* <img src={Logo} width="10%" alt="logo"/> */}
            <img src={process.env.PUBLIC_URL+"/images/logo.png"} width="10%" alt="logo"/>
            <ul>
                <li>О компании</li>
                <li>Услуги</li>
                <li>Цены и сроки</li>
                <li>Оформить груз</li>
                <li>Контакты</li>
            </ul>
        </nav>
    )
}