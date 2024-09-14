import './Currency.css'
import { useEffect, useState } from 'react';

function Currency() {
    const URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_zFELy3gvNjm616fVH0KWwl1a3Q6CWyieUm4rwbEa';

    const [config] = useState({ t: 'INR', b: 'IDR' });
    const [conversionRate, setConversionRate] = useState('');
    const [converted, setConverted] = useState(0);

    const [inputVal, setInputVal] = useState(0);

    const delayTime = 5000;

    const [isDisabled, setDisabled] = useState(false)

    function disable() {
        setDisabled(true);
        const t = setTimeout(() => {
            setDisabled(false);
            clearTimeout(t);
        }, delayTime);
    }



    function getCurrency() {
        fetch(`${URL}&currencies=${config.t}&base_currency=${config.b}`).then((response) => {
            response.json().then((d) => {
                setConverted(0);

                setConversionRate(d.data[config.t]);
                disable();
            })
        })
    }

    useEffect(() => {
        // getCurrency()
        setConversionRate(0.0054453088)
    }, []);

    useEffect(() => {
        if (inputVal) {
            console.log('input: ', inputVal);
            const rr = inputVal * conversionRate
            setConverted(rr.toFixed(2));
        }
    }, [inputVal, conversionRate])

    function onCurrencyChange(event) {
        setInputVal(event.target.value);
        disable();
    }

    // async function reverse() {
    //     if (config.b === 'IDR') {
    //         setConfig({
    //             b: 'INR', t: 'IDR'
    //         })
    //     } else {
    //         setConfig({
    //             b: 'IDR', t: 'INR'
    //         })
    //     }
    //     await getCurrency()
    // }

    function showCurrency(currency) {
        return currency === 'INR' ? '₹' : 'Rp'
    }

    return <div className='container'>
        <div className='card'>
            <h2 className='header'>1 {showCurrency(config.b)} = {showCurrency(config.t)} {conversionRate}</h2>
            <div className='grp'>
                <button disabled={isDisabled} className='refresh-btn' onClick={() => getCurrency()}>Refresh</button>
                {/* <button className='refresh-btn' onClick={() => reverse()}>reverse</button> */}
            </div>

            <label htmlFor="amount">{showCurrency(config.b)}</label>
            <input autoFocus id="amount" value={inputVal} type='number' onChange={onCurrencyChange} />
            <p className='result'>{converted} {showCurrency(config.t)}</p>
        </div>


    </div>
}

export default Currency;