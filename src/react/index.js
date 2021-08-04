function createElement(type, config, children) {
    let propsName = null;
    let props = {};
    if (arguments.length > 2) {
        props.children = [...arguments].slice(2);
    }
    for (propsName in config) {
        props[propsName] = config[propsName];
    }

    const childrenLen = arguments.length - 2;
    let childrenArray = new Array(arguments.length - 2);
    for (let i = 0; i < childrenLen; i ++ ) {
        childrenArray[i] = arguments[i+ 2];
    }
    props.children = childrenArray.map(child => {
        if (typeof child !== 'object') {
            return {
                type: "TEXT_ELEMENT",
                props: {
                  nodeValue: child,
                  children: [],
                },
            }
        } 
        return child;
        
    })
    // if (childrenLen > 0) {
    //     if (childrenLen === 1) {
    //         props.children = children;
    //     } else {
    //         let childrenArray = new Array(arguments.length - 2);
    //         for (let i = 0; i < childrenLen; i ++ ) {
    //             childrenArray[i] = arguments[i+ 2];
    //         }
    //         props.children = childrenArray.map(child => {
    //             if (typeof child !== 'object') {
    //                 return 
    //             } 
    //             return child
                
    //         })
    //     }
    // }
    return {
        $$typeof: 0xeac7,
    
        type, 
        props
    }
}


module.exports = {
    createElement
}