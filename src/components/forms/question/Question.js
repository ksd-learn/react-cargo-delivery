import { useState } from "react";
import css from './Question.module.css';

export const Question = () => {

    const [name, setName] = useState('');
    const [telefon, setTelefon] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setTelefon(value);
                break;
            case 'email':
                setEmail(value);
                break
            default:
        }
    };

    const handlSubmit = (event) => {
        event.preventDefault();
        setName("");
        setTelefon("");
        setEmail("");
    };

    return (
        <div className={css.request}>
            <h3>Остались вопросы?</h3>
            <p>
                Оставьте заявку и наш менеджер ответит вам в ближайшее время.
            </p>
            <form className={css.addForm} onSubmit={handlSubmit}>
                <label className={css.label}>
                    <input
                        name="name" type="text" value={name} onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Ваше имя *"
                        title="имя"
                        required
                    />
                </label>
                <label className={css.label}>
                    <input
                        name="telefon" type="tel" value={telefon} onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        placeholder="+7 (___) ___ - __ - __ *"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <label className={css.label}>
                    <input
                        name="email" type="email" value={email} onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Введите e-mail"
                        title="Email"
                        required
                    />
                </label>
                <label className={css.label}>
                    <textarea
                        name="note" onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Ваш вопрос"
                        title="Ваш вопрос"
                        required>
                        
                    </textarea>
                </label>
                <button className={css.btn} type="submit">Отправить вопрос</button>
            </form>
        </div>
    )
};