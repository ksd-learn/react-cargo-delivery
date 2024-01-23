import { ServiceItem } from '../components/serviceItem/ServiceItem';
import css from './Services.module.css';

export const Services = () => {
    
    return (
        <div className={css.services}>
            <h2>УСЛУГИ</h2>
            <ServiceItem />
        </div>
    )
}