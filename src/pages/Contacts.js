//import { DeliveryItem } from '../components/deliveryItem/DeliveryItem';
import css from './Price.module.css';

export const Contacts = () => {
    
    return (
        <div className={css.price}>
            <h2>Контакты</h2>
                <ul>
                    <li>8(800)600-18-69</li>
                    <li>info@cargoasia.info</li>
                    <li>Адрес в Китае:
                        浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房 高建军 电话15966660379
                    </li>
                </ul>
        </div>
    )
}