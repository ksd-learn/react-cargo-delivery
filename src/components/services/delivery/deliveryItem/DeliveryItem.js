import { listDelivery } from '../../../../data/listDelivery';
import css from './DeliveryItem.module.css';

export const DeliveryItem = () => {
    
    return (
        <div className={css.deliveryItem}>
            {listDelivery.map(({id, name, time, weight, price, image}) => {
                return (
                    <div key={id}  >
                        <img src={process.env.PUBLIC_URL+"/images/services/"+image} alt="gjhgjhg" />
                        <h3>{name}</h3>
                        <div>{time}{weight}</div>
                        <div>{price}</div>
                        <button className={css.btn} >Оставить заявку</button>
                        <button className={css.btn} >Подробнее</button>
                    </div>
                );
            })}

        </div>
    )
}