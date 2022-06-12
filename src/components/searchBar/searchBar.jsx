import './searchBar.css'
import { useState, useEffect } from 'react'
import ListOfItems from './listOfItems'

const SearchBar = (props) =>{
    const [searchValue, setsearchValue] = useState('')

    /**Keys help React identify which items have changed, are added, or are removed.
     * Keys should be given to the elements inside the array to give the elements a stable identity
     * 
     * */
    console.log(props.listProducts.filter((listProdut) =>{
        return listProdut.includes("Products")
    }))

    const filterSearchResults = props.listProducts.filter((listProduct) =>{
        return listProduct.includes(searchValue)
    })

    console.log(filterSearchResults)
    const displayButton = searchValue.length > 0
    console.log(displayButton)
//OnChange is a value that is used to handle the event when one starts typing
    const handleOnchange = (event) =>{
        console.log(event.target.value)
        event.preventDefault()
        setsearchValue(event.target.value)
        console.clear()
    }

    const handleClear = (event) =>{
        console.log(searchValue)
        event.preventDefault()
        setsearchValue(event.target.value)
        
    }
    /**
     * useEffect is perfect when someone is loading data from somewhere else(external source)
     */

    return(
        <>
        <div className='searchBar'>
            <input type="text" placeholder='Search' value={searchValue} onChange = {handleOnchange}/>
            {displayButton && <button className='clickButton' onClick = {handleClear}>Clear</button>}    
        </div>
        {
            filterSearchResults.map((listProduct) =>{
                return <div key={listProduct}><li>{listProduct}</li>
                </div>
            })
        }
        </>

    )
}
/**CONDITIONAL RENDERING
 * This is when we want to display something to the user only when a certain condition is met. this is handled
 * using boolean. Now in react, boolean is handled using   const displayButton = searchValue.length > 0. This means that
 * if the search area has a O input, the displayButton will be false, if there is something, then the displayButton will
 * be true
 * SHORTCIRCUIT
 * The short circuit condition is very useful in react when we are trying to render some component or some HTML in our application
 * 
 * 
 */
export default SearchBar