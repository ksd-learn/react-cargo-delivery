import { listServices } from '../../data/listServices';
import css from './ServiceItem.module.css';

export const ServiceItem = () => {
    
    return (
        <div className={css.serviceItem}>
            {listServices.map(({id, name, text, image}) => {
                return (
                    <div className={css.user} key={id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL+"/images/services/"+image})`, backgroundRepeat: 'no-repeat', height: '562px' }}>
                        {/* <img src={'images/services/'+image} alt='gjhgjhg' /> */}
                        <h3>{name}</h3>
                        <p>{text}</p>
                        <button className={css.btn} >Подробнее</button>
                    </div>
                );
            })}

        </div>
    )
}