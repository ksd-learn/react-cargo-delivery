import { useState } from "react";
import css from './DeliveryCalculationStep1.module.css';

export const DeliveryCalculationStep1 = () => {

    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [volume, setVolume] = useState('');
    const [hsCode, setHsCode] = useState('');
    const [images, setImages] = useState([]);

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

    const handlSubmit = (event) => {
        event.preventDefault();
        setCategory("");
        setPrice("");
        setWeight("");
        setVolume("");
        setHsCode("");
    };

    return (
        <div className={css.step1}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <form className={css.addForm} onSubmit={handlSubmit}>
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
            </form>
            
            <button className={css.btn} type="button">Рассчитать</button>
            <button className={css.btn} type="submit">Следующий шаг</button>
            <button className={css.btn} type="button">Удалить фото</button>
        </div>
    )
};