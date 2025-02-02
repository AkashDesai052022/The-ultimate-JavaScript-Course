console.log(typeof document)  // output : object
console.log(typeof document.title) // output: string
console.log(typeof document.body) // output: object


// there are three types of nodes
// Text nodes  .. ++ this node is always leaf node of the DOM Tree. 
// Element nodes
// comment nodes

// autoCorrection 
// if we will miss an end tag the browser will automatically add same tag to the end of content
// eg. <span> this is me 
// eg. <span> this is me </div>

// document.body sometimes gives null when script tag is present before body tag

