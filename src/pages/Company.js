import { AdvantageItem } from '../components/company/advantageItem/AdvantageItem';
import { QuestionItem } from '../components/company/questionItem/QuestionItem';
import css from './Company.module.css';

export const Company = () => {
    
    return (
        <>
            <section className={css.banner}>
                Слайдер
            </section>
            <section>
                <h2>О КОМПАНИИ</h2>
                
                <p>
                    Компания Азия Карго - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. Для вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы работаем на рынке более 4 лет, а руководители компании занимаются логистикой уже более 11 лет.
                    Мы стремимся предоставить лучшие условия доставки и лучший сервис своим клиентам. Выбирая нас - вы выбираете качественную доставку оптимальную по цене и времени! Убедитесь в этом сами!
                </p>
                <div>
                    <img src={process.env.PUBLIC_URL+"/images/company/notepad.png"} width="10%" alt="notepad"/>
                </div>
            </section>
            <section>
                <h2>ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС?</h2>
                <AdvantageItem />
            </section>
            <section>
                <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <QuestionItem />
            </section>
            
        </>
    )
}