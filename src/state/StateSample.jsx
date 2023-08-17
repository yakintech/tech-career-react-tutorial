import React, { useState } from 'react'

function StateSample() {

    const [color, setcolor] = useState('orange');

    //100
    var randomColors = ['#B5449E', '#D14537', '#3B5E1C', '#67E940', '#705E6B', '#516D9E', '#5AC57F', '#0C2A5B', '#0BD8F3', '#B0CBBA', '#07CD39', '#7C1294', '#C3BBDB', '#DF95DE', '#AD2B1D', '#8CD7C8', '#D5C57A', '#C34053', '#57C04A', '#7C2968', '#688559', '#E6395D', '#282C05', '#DA276B', '#679509', '#47136C', '#61E186', '#5C1ED4', '#3DF327', '#7BD084', '#2DAC42', '#390EEF', '#C7A127', '#83C6CB', '#ED37FD', '#5FBD6B', '#8A63F3', '#608FC6', '#69F949', '#347B98', '#9C1A7A', '#88AAF0', '#78A14C', '#D05191', '#DFB93E', '#1DFCBA', '#D803D7', '#B87593', '#CE931C', '#E8E679', '#3E9950', '#DE2B07', '#7B494F', '#080FA0', '#375BFC', '#5C8C4A', '#50E314', '#2737BA', '#CAD35C', '#2972D7', '#813FF8', '#D696C2', '#948556', '#B6DD59', '#03A4E1', '#4E2507', '#C00027', '#62803E', '#FE513A', '#52E58D', '#08A6F6', '#025214', '#FDF666', '#9212BC', '#647BA2', '#4B8134', '#F8BDB4', '#B92D03', '#F68AA6', '#E643D0', '#FC6D63', '#098B57', '#100452', '#F16F85', '#67EA86', '#D7246C', '#F3176C', '#0F19E1', '#B34DDC', '#EAFD37', '#9BF6A9', '#15712C', '#45B281', '#076B6A', '#78B10A', '#98B442', '#6DB089', '#771F1A', '#5ADB35', '#BE3704'];

    //butona bastığımda 1-100 arası random bir sayı üret ve dizideki o sayının rengini div e bas!

    const changeColor = () => {

        var randomColorIndex = Math.floor(Math.random() * 100);

        setcolor(randomColors[randomColorIndex])

    }

    return (<>
        <button onClick={() => changeColor()}> Change DIV COLOR</button>
        <div style={{ width: 500, height: 500, borderStyle: 'solid', backgroundColor: color }}></div>
    </>
    )
}




export default StateSample