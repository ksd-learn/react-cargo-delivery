import { Routes, Route } from "react-router-dom";
import { Loyaut } from './Loyaut';
import { Company } from '../pages/Company';
import { Services } from '../pages/Services';
import { Price } from '../pages/Price';
import { DeliveryRequest } from './forms/deliveryRequest/DeliveryRequest';
import { DeliveryCalculation } from './forms/deliveryCalculation/DeliveryCalculation';
import { DeliveryCalculationStep1 } from './forms/deliveryCalculation/deliveryCalculationStep1/DeliveryCalculationStep1';
import { DeliveryCalculationStep2 } from './forms/deliveryCalculation/deliveryCalculationStep2/DeliveryCalculationStep2';
import { DeliveryCalculationStep3 } from './forms/deliveryCalculation/deliveryCalculationStep3/DeliveryCalculationStep3';
import { VolumeCalculation } from './forms/volumeCalculation/VolumeCalculation';
import { Question } from './forms/question/Question';
import { RegisterCargo } from './registerCargo/RegisterCargo';

import css from './App.module.css';

export const App = () => {
  return (
    
    <div className={css['app-null']}>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Company />} />
          <Route path="services" element={<Services />} />
          <Route path="price" element={<Price />} />
          <Route path="registerCargo" element={<RegisterCargo />} />
          <Route path="*" element={<Company />} />
        </Route>
        {/*  */}
      </Routes>
{/*  
      <main>
        <Company />
        <Delivery />
        <DeliveryRequest />
        <DeliveryCalculation />
        <DeliveryCalculationStep1 />
        <DeliveryCalculationStep2 />
        <DeliveryCalculationStep3 />
        <VolumeCalculation />
        <Question />
      </main>
       */}
    </div>
  );
};
