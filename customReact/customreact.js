function customrender(reactelement,Container){
    //     const domelement = document.createElement(reactelement.type)
    //     domelement.innerHTML=reactelement.children
    //     domelement.setAttribute('href',reactelement.props.href)
    //     domelement.setAttribute('target',reactelement.props.target)
    //     Container.appendChild(domelement)
    // }
 const domelement = document.createElement(reactelement.type)
 domelement.innerHTML = reactelement.children
 for (const prop in reactelement.props){
    if (prop == 'children') continue ;
    domelement.setAttribute(prop,reactelement.props[prop])
 }
 Container.appendChild(domelement)
}
const reactelement = {
    type :'a',
    props :{
        href:'https://google.com',
        target :'_blank'
    },
    children :'click me to visit google'

}

const mainContainer=document.querySelector('#root')
customrender(reactelement,mainContainer)
