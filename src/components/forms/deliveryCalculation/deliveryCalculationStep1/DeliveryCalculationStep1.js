import { useState } from "react";
import { NavLink } from 'react-router-dom';
import css from './DeliveryCalculationStep1.module.css';

export const DeliveryCalculationStep1 = ({previousPath}) => {

    const [step, setStep] = useState(1);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [volume, setVolume] = useState('');
    const [hsCode, setHsCode] = useState('');
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [telefon, setTelefon] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'category':
                setCategory(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'volume':
                setVolume(value);
                break;
            case 'hsCode':
                setHsCode(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'telefon':
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
                                                        // Обработка выбранного файла
            const reader = new FileReader();
            reader.onload = (event) => {
                const newImage = {
                    id: Date.now(),                     // Генерация уникального идентификатора
                    dataURL: event.target.result,
                };
                setImages((prevImages) => [...prevImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const openModalStep2 = () => {
        setStep(2);
    }

    const openModalStep3 = () => {
        setStep(3);
    }

    const backModalStep1 = () => {
        setStep(1);
    }

    const handlSubmit = (event) => {
        event.preventDefault();
        setCategory("");
        setPrice("");
        setWeight("");
        setVolume("");
        setHsCode("");
        setName("");
        setTelefon("");
        setEmail("");
        setService("");
        console.log("hghgjggj")
    };

    return (
        <div className={css.step1}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <form className={css.addForm} onSubmit={handlSubmit}>
                {step === 1 && (
                    <div>
                        <label className={css.label}>
                            <p>Категория товара:</p>
                            <input
                                name="category" type="text" value={category} onChange={handleChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                placeholder="Категория товара"
                                title="Категория товара"
                                required
                            />
                        </label>
                        <label className={css.label}>
                            <p>Стоимость груза ($):</p>
                            <input
                                className={css.number}
                                name="price" type="number" value={price} onChange={handleChange}
                                placeholder="Введите стоимость"
                                required
                            />
                        </label>
                        <label className={css.label}>
                            <p>Вес груза (кг):</p>
                            <input
                                className={css.number}
                                name="weight" type="number" value={weight} onChange={handleChange}
                                placeholder="Введите вес"
                                required
                            />
                        </label>
                        <label className={css.label}>
                            <p>Объем груза (м3):</p>
                            <input
                                className={css.number}
                                name="volume" type="number" value={volume} onChange={handleChange}
                                placeholder="Введите объем"
                                required
                            />
                        </label>
                        <div role="group">
                            <label className={css.label}>
                                <input name="insurance" type="checkbox" />
                                <p>Страховка</p>
                            </label>
                            <label className={css.label}>
                                <input name="services" type="checkbox" />
                                <p>Таможенное оформление</p>
                            </label>
                        </div>
                        <label className={css.label}>
                            <p>Код ТН ВЭД:</p>
                            <input
                                className={css.number}
                                name="hsCode" type="number" value={hsCode} onChange={handleChange}
                                placeholder="Введите hsCode"
                                title="Введите hsCode"
                                required
                            />
                        </label>
                        <label className={css.label}>
                            <p>Загрузить фото товара (.jpeg):</p>
                            <input
                                name="images" type="file" onChange={handleImageChange}
                                accept="image/*" />
                            {images.map((image) => (
                                <div key={image.id} style={{ marginBottom: '10px' }}>
                                    <img src={image.dataURL} alt="Выбранное изображение" style={{ maxWidth: '100%' }} />
                                    <button onClick={() => handleRemoveImage(image.id)}>Удалить</button>
                                </div>
                            ))}
                        </label>
                    </div>
                )}
                
                {step === 2 && (
                    <div>
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
                        <button className={css.btn} type="submit" onClick={() => openModalStep3()}>Следующий шаг</button>
                    </div>
                )}
            </form>

            {step === 1 && (
                <div>
                    <button className={css.btn} type="button">Удалить фото</button>
                    <button className={css.btn} type="button" onClick={() => openModalStep2()}>Следующий шаг</button>
                </div>
            )}
            {step === 2 && (
                <button className={css.btn} type="button" onClick={() => backModalStep1()}>Назад</button>
            )}
            
            {step === 3 && (
                <div className={css.step3}>
                    <div>111</div>
                    <h3>Спасибо за заявку!</h3>
                    <p>
                        Мы обязатальено свяжемся с вами.
                    </p>
                    <p>Так же для вас может быть полезно:</p>
                    <ul>
                        <li>Услуги</li>
                        <li>Примеры грузоперевозок</li>
                        <li>Поиск товаров в Китае</li>
                    </ul>
                    <NavLink to="/services">Готово</NavLink>
                </div>
            )}
        </div>
    )
};