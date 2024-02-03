import { useState } from "react";
import { DeliveryCalculationStep1 } from '../components/forms/deliveryCalculation/deliveryCalculationStep1/DeliveryCalculationStep1';
import css from './ServiiceDelivery.module.css';

export const ServiiceDelivery = () => {

    const [stepDeliveryCalculation, setStepDeliveryCalculation] = useState(null);

    const openModal = () => {
        setStepDeliveryCalculation(1);
    }

    return (
        <div className={css.delivery} style={{ backgroundImage: `url(${process.env.PUBLIC_URL+"/images/services/man.png"})`, backgroundRepeat: 'no-repeat', height: '562px' }}>
            {!stepDeliveryCalculation && (
                <div>
                    <h2>ДОСТАВКА ГРУЗОВ ИЗ КИТАЯ</h2>
                    <p>
                        Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
                    </p>
                    <button className={css.btn} onClick={() => openModal()}>Рассчет стоимости</button>
                </div>
            )}
            {stepDeliveryCalculation && (
                <div>
                    <h3>ПОЛУЧИТЬ РАССЧЕТ СТОИМОСТИ ДОСТАВКИ ВАШЕГО ГРУЗА</h3>
                    <DeliveryCalculationStep1 />
                </div>
            )}
        </div>
    )
}