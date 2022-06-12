/**In our index.js file here is where all the components are imported and made vailable to the reactDom which 
 * Will make it render on the browser
*/
import React from "react";
import reactDom from 'react-dom';
import './global.css'

//We already exported the App from the app component. So now we can import it here for the code to be available in index.js
import App from "./components/App";

const renderInRoot = document.getElementById('root');
reactDom.render(<App />, renderInRoot)