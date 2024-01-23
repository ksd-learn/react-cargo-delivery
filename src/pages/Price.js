import { DeliveryItem } from '../components/deliveryItem/DeliveryItem';
import css from './Price.module.css';

export const Price = () => {
    
    return (
        <div className={css.price}>
            <h2>ВАРИАНТЫ ДОСТАВКИ ГРУЗОВ ИЗ КИТАЯ</h2>
            <DeliveryItem />
        </div>
    )
}