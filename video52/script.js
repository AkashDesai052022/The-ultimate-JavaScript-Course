
// // synchornous JS
// console.log("hi I am first");
// console.log("hi I am second");

// // Asynchornous JS
// console.log('first');
// setTimeout(() => {
//     console.log("hi, I am settimeout function");
// }, 3000);

// console.log('second');



// callbacks  

function loadScript(src, callback){
    let script = document.createElement('script')
    script.src = src;
    script.onload = function(){
        console.log("Hi I am script and i am loaded" + src);
    }
    callback()
    script.onerror = ()=>{
        console.log("Error loading scfript with SRC: " + src);
    }
    callback(new Error("src got some error"))
    document.body.appendChild(script)
}

function hello(error , src){
    if(error){
        console.log(error);
    }
    alert('hello World!!' + src)
}


function goodmorning(error , src){
    if(error){
        console.log(error);
    }
    alert('hello World!!' + src)
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', goodmorning)