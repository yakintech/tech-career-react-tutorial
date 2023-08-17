import React, { useState } from 'react'

function OneWayIntro() {


    //counter benim state içerisindeki değişkenim. Bu değişken number, string, object, array olabilir.
    //setCounter isimli fonksiyon counter değişkenini değiştirip, fonksiyonu BİR DAHA ÇALIŞTIRIR!!
    const [counter, setCounter] = useState(0);


    const increase = () => {
        setCounter(counter + 1)
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default OneWayIntro