import React from 'react';
import ReactDOM from 'react-dom/client';
function New(){
    return(
        <div>
            <h1>custom app(from new.jsx)!</h1>
            {reactElement}
            {anotherelement}
        </div>

    )
}
// const reactelement = {
//     type :'a',
//     props :{
//         href:'https://google.com',
//         target :'_blank'
//     },
//     children :'click me to visit google'

// }

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target :'_blank'},
    'click me to visit ggogle'
)

const anotherelement =(
    <a href ="https://www.flikart.com" target ='_blank'>visitflipkart </a>
)
// ReactDOM.createRoot(document.getElementById('root')).
// render(
//     reactElement
// )

 export default New;