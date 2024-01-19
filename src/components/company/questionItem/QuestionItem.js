import { listQuestions } from '../../../data/listQuestions';
import css from './QuestionItem.module.css';

export const QuestionItem = () => {
    
    return (
        <div className={css.QuestionItem}>
            {listQuestions.map(({id, question, text}) => {
                return (
                    <div key={id}  >
                        <h3>{question}</h3>
                        <div>{text}</div>
                    </div>
                );
            })}

        </div>
    )
}