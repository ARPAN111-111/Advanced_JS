const promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve({
            id:234567,
            name:"John Doe"
        });
    } else {
        reject(new Error("Promise rejected"));
    }
});
promise1
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error("Error:", error);
});




const promise2=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve({
            id:12181721111,
            name:"ASH"
        });
    } else {
        reject(new Error("Promise rejected"));
    }
});
promise2
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error(error);
});


Promise.all([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });




    Promise.race([promise1, promise2])
        .then((response) => {
            console.log("First promise resolved:", response);
        })
        .catch((error) => {
            console.error("Error in the first promise:", error);
        });


        Promise.allSettled([promise1, promise2])
            .then((responses) => {
                console.log("All promises settled:", responses);
            })
            .catch((error) => {
                console.error("Error in promises:", error);
            });



promise1
.then((response)=>{
    console.log(response);
})
.then((response2)=>{
    console.log(response2.username);
})
.catch((error)=>{
    console.error("Error:", error);
});
