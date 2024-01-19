import { useState } from "react";
import css from './VolumeCalculation.module.css';

export const VolumeCalculation = () => {

    const [unit, setUnit] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'unit':
                setUnit(value);
                break;
            case 'length':
                setLength(value);
                break;
            case 'width':
                setWidth(value);
                break;
            case 'height':
                setHeight(value);
                break
            default:
        }
    };

    const handlSubmit = (event) => {
        event.preventDefault();
        console.log(unit, length, width, height)
        setUnit("");
        setLength("");
        setWidth("");
        setHeight("");
    };
console.log(unit, length, width, height)
    return (
        <div className={css.volume}>
            <h3>Рассчитать объем</h3>
            <form className={css.addForm} onSubmit={handlSubmit}>
                <label className={css.label}>
                    <p>Единица измерения:</p>
                    <select
                        id='unit' name='unit' onChange={handleChange}>
                        <option value='m'>метр</option>
                        <option value='mm'>миллиметр</option>
                    </select>
                </label>
                <label className={css.label}>
                    <p>Длина:</p>
                    <input
                        className={css.number}
                        name="length" type="number" value={length} onChange={handleChange}
                        placeholder="Введите длину"
                        required
                    />
                </label>
                <label className={css.label}>
                    <p>Ширина:</p>
                    <input
                        className={css.number}
                        name="width" type="number" value={width} onChange={handleChange}
                        placeholder="Введите ширину"
                        required
                    />
                </label>
                <label className={css.label}>
                    <p>Высота:</p>
                    <input
                        className={css.number}
                        name="height" type="number" value={height} onChange={handleChange}
                        placeholder="Введите высоту"
                        required
                    />
                </label>
                <button className={css.btn} type="submit">Рассчитать</button>
            </form>
        </div>
    )
};