import { listAdvantages } from '../../../data/listAdvantages';
import css from './AdvantageItem.module.css';

export const AdvantageItem = () => {
    
    return (
        <div className={css.QuestionItem}>
            {listAdvantages.map(({id, text, image}) => {
                return (
                    <div key={id}  >
                        <svg className={css.icon}>
                            <use href={process.env.PUBLIC_URL+"/images/company/symbol-defs.svg#"+image}></use>
                        </svg>
                        <div>{text}</div>
                    </div>
                );
            })}

        </div>
    )
}