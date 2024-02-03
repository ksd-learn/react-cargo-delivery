import { useNavigate } from 'react-router-dom';
import { listServices } from '../../data/listServices';
import css from './ServiceItem.module.css';

export const ServiceItem = () => {
    const navigate = useNavigate();

    const openModal = (id) => {
        let newPath = '';
        switch (id) {
            case 'delivery':
                newPath = `/service-delivery`;
                break;
            case 'insurance':
                newPath = `/insurance`;
                break;
            case 'rent':
                newPath = `/rent`;
                break;
            case 'transfer':
                newPath = `/transfer`;
                break;
            case 'ransom':
                newPath = `/ransom`;
                break;
            default:
        }
        navigate(newPath);
    }

    return (
        <div className={css.serviceItem}>
            {listServices.map(({id, name, text, image}) => {
                return (
                    <div className={css.user} key={id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL+"/images/services/"+image})`, backgroundRepeat: 'no-repeat', height: '562px' }}>
                        {/* <img src={'images/services/'+image} alt='gjhgjhg' /> */}
                        <h3>{name}</h3>
                        <p>{text}</p>
                        <button className={css.btn} onClick={() => openModal(id)}>Подробнее</button>
                    </div>
                );
            })}
        </div>
    )
}