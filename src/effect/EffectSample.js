import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EffectSample() {

    console.log('Effect Sample rendered! ');

    const [products, setproducts] = useState([])

    //aşağıda useeffect SADECE BİR KERE ÇALIŞIR
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])


    return (<>
        <ul>
            {
                products && products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default EffectSample