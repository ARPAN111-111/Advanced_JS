function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve({
                id: 73676463866487,
                username: 'John Doe'
            })
        }
        else {
            reject(new Error("Data not Fetched"))
        }
    })
}



async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData();