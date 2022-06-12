//This is a react component, made using the Java arrow function

/**This app component is like the 'tags' containers in HTMl eg <body></body>
 * This means that all the JSX code is wrapped in the App.jsx.
 * All other cmponents created will be rendered using this App.js
 */
import CounterButton from "./counterButton/counterButton"
import ProductDetails from "./productDetails/ProductDetails" 
import SearchBar from "./searchBar/searchBar"
import { useState,useEffect } from "react"
import Button from "./button/button"
const App = () =>{
    const [productState, setProductState] = useState([])
    //useEffect is a function
    useEffect(() =>{

       
         fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productsArray =>{
                const newProductsState = productsArray.map((product) =>{
                    return product.title
                })
                setProductState(newProductsState)
            })
        //In this user effects, we will add a timeout, where the products load later after everything else is rendered
        //in the browser
  
    }, [])
    

    const hasProducts = productState.length > 0
    const listProducts = [
        'Convenience Products',
    ]
    
    return(
         <div style= {myStyling}>
 
        <div className="mainHeading">
            <h2>CODING WITH MIKE DANE</h2>
            <div>
                <SearchBar listProducts ={listProducts}/>
            </div>
        </div>
        {/*A counter button is an JSX component, where it is just called.*/}
        {/**Creating app components can allow one to reuse code like this*/}

        <div className="prodDets">
            <CounterButton clickIncrease = {5} buttonColor = {'skyblue'} borderRadius = {10}/>
            <CounterButton clickIncrease ={10} buttonColor = {'seagreen'} borderRadius = {50}/>
        </div>

        <p style={myStyling}>This is the use of props(passing arguments for component reusability)</p>
        <div className="prodDets">
            <ProductDetails productName = 'Macbook M2'
            productDescription = 'The fastest laptop for development'
            productPrice = '3999'
            />
            <ProductDetails productName = 'Samsung S22 ultra'
            productDescription = 'The phone with the best display'
            productPrice = '1499'
            />
            <ProductDetails productName = 'Google Pixel'
            productDescription = 'The phone with the best software'
            productPrice = '599'
            />
            <ProductDetails productName = 'Macbook M2'
            productDescription = 'The fastest laptop for development'
            productPrice = '3999'
            />
            <ProductDetails productName = 'Samsung S22 ultra'
            productDescription = 'The phone with the best display'
            productPrice = '1499'
            />
        </div>
        <div>
            {
                hasProducts ?  <SearchBar listProducts = {productState}/> : "loading.."
            }
           
        </div>
        <Button/>
        </div>
    )
}

/**This shows how we can add a style to the JSX code. This is one way in which we can style our componets, but we can aslo use
 * other ways to style JSX and React apps. Other way is like  <p style={{myStyling}}> where in the double curly braces one puts
 * their styles
*/
const myStyling = {
    overflow:'hidden',
    background:'whitesmoke',
    color:'black',
}

//This will make sure that our code is available to other files in our source folder
export default App