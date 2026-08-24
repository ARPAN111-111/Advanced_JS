console.log("****synchronous start****")
for(let i=0;i<10;i++){
    console.log("hello bro")
}
console.log("****synchronous end****")
console.log("****asynchronous start****")
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log("hello bro")
    },1000)
}
console.log("****asynchronous end****")