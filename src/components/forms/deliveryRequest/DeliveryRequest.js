import { useState } from "react";
import css from './DeliveryRequest.module.css';

export const DeliveryRequest = () => {

    const [name, setName] = useState('');
    const [telefon, setTelefon] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');

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
                break;
            case 'service':
                setService(value);
                break
            default:
        }
    };

    const handlSubmit = (event) => {
        event.preventDefault();
        setName("");
        setTelefon("");
        setEmail("");
        setService("");
    };

    return (
        <div className={css.request}>
            <h3>Оставьте заявку</h3>
            <p>
                Заполните заявку, сообщите наименование товара/груза и наш специалист свяжется с Вами в рабочее время.
            </p>
            <form className={css.addForm} onSubmit={handlSubmit}>
                <label className={css.label}>
                    <p>Имя:</p>
                    <input
                        name="name" type="text" value={name} onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Ваше имя *"
                        title="имя"
                        required
                    />
                </label>
                <label className={css.label}>
                    <p>Номер телефона:</p>
                    <input
                        name="telefon" type="tel" value={telefon} onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        placeholder="+7 (___) ___ - __ - __ *"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <label className={css.label}>
                    <p>Email:</p>
                    <input
                        name="email" type="email" value={email} onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Введите e-mail *"
                        title="Email"
                        required
                    />
                </label>
                <label className={css.label}>
                    <p>Вариант доставки груза:</p>
                    <input
                        name="service" type="text" value={service} onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Вариант доставки"
                        title="Вариант доставки груза из Китая"
                    />
                </label>
                <label className={css.label}>
                    <p>Примечание:</p>
                    <textarea
                        name="note" onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        placeholder="Сообщите здесь наименование товара/груза, количество или примерный вес, а так же укажите вопросы которые вас интересуют *"
                        title="Примечание"
                        required>
                        
                    </textarea>
                </label>
                <button className={css.btn} type="submit">Отправить</button>
            </form>
            <p>* - обязательные поля</p>
        </div>
    )
};