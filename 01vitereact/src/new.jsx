import React from 'react';
import ReactDOM from 'react-dom/client';
function To(){
    return(
        <div><h1>custom app!</h1></div>

    )
}
const reactelement = {
    type :'a',
    props :{
        href:'https://google.com',
        target :'_blank'
    },
    children :'click me to visit google'

}

const anotherelement =(
    <a href ="https//www.google.com" target ='_blank'>visitgoogle </a>
)
ReactDOM.createRoot(document.getElementById('root')).
render(
    anotherelement
)

 export default To