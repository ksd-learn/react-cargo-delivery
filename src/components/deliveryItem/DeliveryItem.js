import { useState, useRef, useEffect } from 'react';
import { listDelivery } from '../../data/listDelivery';
import { DeliveryRequest } from '../forms/deliveryRequest/DeliveryRequest';
import css from './DeliveryItem.module.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';          // Стили библиотеки модального окна

export const DeliveryItem = () => {
    const [modalItemId, setModalItemId] = useState(null);
    const contentRef = useRef(null);

    const openModal = (id) => {
        setModalItemId(id);
    };

    const closeModal = () => {
      setModalItemId(null);
    };

    useEffect(() => {
        if (contentRef.current) {
            const lightboxInstance = basicLightbox.create(contentRef.current.innerHTML);
                        // Добавление обработчика событий для закрытия при нажатии на клавишу "ESC"
                const closeKey = event => {
                    if (event.key === 'Escape') {
                        lightboxInstance.close();
                        document.removeEventListener('keydown', closeKey)
                    }
                };
            document.addEventListener('keydown', closeKey);
            lightboxInstance.show();
        }
    }, [modalItemId]);              // Обновление эффекта, когда изменяется id

    return (
        <div className={css.deliveryItem}>
            {listDelivery.map(({id, name, time, weight, price, image}) => {
                return (
                    <div key={id}  >
                        <img src={process.env.PUBLIC_URL+"/images/services/"+image} alt="gjhgjhg" />
                        <h3>{name}</h3>
                        <div>{time}{weight}</div>
                        <div>{price}</div>
                        <button className={css.btn} onClick={() => openModal(id)}>Оставить заявку</button>
                        <button className={css.btn} >Подробнее</button>
                        {modalItemId === id && (
                            <div ref={contentRef} id={`modal-content-${id}`} className={css.module}>
                                <DeliveryRequest onClose={closeModal} nameDelivery={name} />
                            </div>   
                        )}
                    </div>
                );
            })}

        </div>
    )
}