import { createElement } from "react";

function render(element, container) {
    // vnode -> node
    const node = mountElement(element);
    // node append to container
    container.appendChild(node);

}

function mountElement(element) {
    const {type, props} = element;
    let node = null;
    if (type === 'TEXT_ELEMENT') {
        node = document.createTextNode(null);
    } else if (typeof type === 'string') {
        node = getHostComponent(element);
    }
    getProps(node, props);
    if (props.children.length) {
        props.children.forEach(child => {
            render(child, node);
        })
    }
    
    return node;

}

function getProps(node, props) {
    if (!props) return;
    let propsName = null;
    
    console.log('node--', node, 'props--', props);
    debugger
    for(propsName in props) {
        if (propsName === 'children') {
            continue;
        }
        node[propsName] = props[propsName]
    }
}

function getHostComponent(element) {
    const node = document.createElement(element.type);
    console.log('node--', node);
    return node;
    
}
const  ReactDOM = {
    render
}
export default ReactDOM;