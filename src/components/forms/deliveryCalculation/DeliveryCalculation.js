//import { ServiceItem } from './serviceItem/ServiceItem';
import css from './DeliveryCalculation.module.css';

export const DeliveryCalculation = () => {
    
    return (
        <div className={css.deliveryCalculation}>
            <h2>ПОЛУЧИТЬ РАССЧЕТ СТОИМОСТИ ДОСТАВКИ ВАШЕГО ГРУЗА</h2>
            <img src={process.env.PUBLIC_URL+"/images/company/man.png"} alt='gjhgjhg' />
            {/* <ServiceItem /> */}
        </div>
    )
}