import { useState, useEffect } from "react"
import './counterButton.css'
//top level => outside a function
//For returning JSX

/** React Hook => gives an array
 * let intialCount = 0
 * (2) [0, ƒ] => 1: ƒ ()
 * f is a function. Basically this a result of 'console.log(useState(0))'. The first is usually the state variable that will
 * be used.
 * 
 * const [intialCount, setInitialCount] = useState(0):
 * In this, initialCount will be the initial stae of a variable. It will be like a register in the react, that one wants to
 * keep track of. setInitialCount will be the function that is called to perform the operation of the count
*/

const CounterButton = (props) =>{

    const createColor ={
    background: props.buttonColor,
    borderRadius: props.borderRadius,
    marginLeft: '20px',
    border: 'none'
}

    const [intialCount, setInitialCount] = useState(0)
    console.log(props.clickIncrease)

    const incrementValue = () =>{
    setInitialCount(intialCount + props.clickIncrease)  
}

useEffect(() => {
    console.log('UseEffect function called')
    if(intialCount === 100){
        window.alert('The current is APPROACHING limit, restart')
        setInitialCount(0)
    }
}, [intialCount])
    return(
        <div className="main">
        <h3 >This is a Button component</h3>
        <button onClick={incrementValue} style = {createColor}><h2 className="btn">Incrase by {props.clickIncrease}</h2></button>
        <p>{intialCount}</p>
        <h2>Her</h2>
        </div>

    )
}
/**const incrementValue = () =>{
    intialCount++
    console.log(intialCount)
} 

*This code cannot update on clicking the button. This happens because the in React, it cannot perform a task
*unless instructed to, which is done using hooks.It allows you to use state and other React features without 
*writing a class. Hooks are used to tell react that a piece of code is a state and whenever it is updated, they update
*a browser.
*/
export default CounterButton