import css from './FooterCargo.module.css';

export const FooterCargo = () => {
    
    return (
        <div className={css.footer}>
            <div>
                <img src={process.env.PUBLIC_URL+"/images/logo.png"} width="10%" alt="logo"/>
                <ul>
                    <li>8(800)600-18-69</li>
                    <li>info@cargoasia.info</li>
                    <li>Адрес в Китае:
                        浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房 高建军 电话15966660379
                    </li>
                </ul>
            </div>
            <div>
                <h3>Грузоперевозки</h3>
                <ul>
                    <li>Цены и сроки</li>
                    <li>Услуги</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                    <li>Оформить груз</li>
                </ul>
            </div>
                <div>
                    <h3>Услуги</h3>
                    <ul>
                        <li>Выкуп товара</li>
                        <li>Страховка груза</li>
                        <li>Аренда склада</li>
                        <li>Перевод денежных средств</li>
                    </ul>
                </div>
            <div>
                <h3>Информация</h3>
                <ul>
                    <li>Отзывы</li>
                    <li>Требования к грузу</li>
                    <li>Договор-оферта</li>
                    <li>Как заключить договор</li>
                    <li>Способы оплаты услуг</li>
                    <li>Документы</li>
                    <li>Статьи</li>
                </ul>
            </div>
        </div>

    )
}