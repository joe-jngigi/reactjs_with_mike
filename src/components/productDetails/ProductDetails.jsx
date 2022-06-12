import AboutProduct from "./aboutProduct"
import './productDetails.css'

/**Normally props are properties(for me I can call them parameters.)
 * Props are used to pass data from a parent to a child component or from a child to a child
 * Props can be imported as all data(counterButton.jsx) all destructured like shown below
*/
const ProductDetails = ({productName,productDescription, productPrice}) =>{
    return(
        <div className="newProd grid">
        <div><h2>{productName}</h2></div>
        <div><AboutProduct description={productDescription} price ={productPrice} /></div>
        </div>
    )
}

export default ProductDetails