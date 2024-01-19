import { Navigation } from './navigation/Navigation';
import { Company } from './company/Company';
import { Services } from './services/Services';
import { Delivery } from './services/delivery/Delivery';
import { DeliveryRequest } from './forms/deliveryRequest/DeliveryRequest';
import { DeliveryCalculation } from './forms/deliveryCalculation/DeliveryCalculation';
import { DeliveryCalculationStep1 } from './forms/deliveryCalculation/deliveryCalculationStep1/DeliveryCalculationStep1';
import { DeliveryCalculationStep2 } from './forms/deliveryCalculation/deliveryCalculationStep2/DeliveryCalculationStep2';
import { DeliveryCalculationStep3 } from './forms/deliveryCalculation/deliveryCalculationStep3/DeliveryCalculationStep3';
import { VolumeCalculation } from './forms/volumeCalculation/VolumeCalculation';
import { Question } from './forms/question/Question';
import { RegisterCargo } from './registerCargo/RegisterCargo';
import { FooterCargo } from './footerCargo/FooterCargo';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css['app-null']}>
      <header>
        <Navigation />
      </header>

      <main>
        <Company />
        <Services />
        <Delivery />
        <DeliveryRequest />
        <DeliveryCalculation />
        <DeliveryCalculationStep1 />
        <DeliveryCalculationStep2 />
        <DeliveryCalculationStep3 />
        <VolumeCalculation />
        <RegisterCargo />
        <Question />
      </main>

      <footer>
        <FooterCargo />
      </footer>
      
    </div>
  );
};
