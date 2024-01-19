import { DeliveryItem } from './deliveryItem/DeliveryItem';
import css from './Delivery.module.css';

export const Delivery = () => {
    
    return (
        <div className={css.services}>
            <h2>ВАРИАНТЫ ДОСТАВКИ ГРУЗОВ ИЗ КИТАЯ</h2>
            <DeliveryItem />
        </div>
    )
}