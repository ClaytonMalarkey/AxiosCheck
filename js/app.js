let databody = document.body;

function successFunction(response) {
    // Do success code here
    console.log('sucess');
    console.log(response);
    const datafromResponse= response.data;
    diplaydata(datafromResponse);
}

function diplaydata(datafromResponse) {
    
    console.log(datafromResponse);  
    console.log(datafromResponse.length);

    let counter = 0;
    while (counter < datafromResponse.length ){
        let post = datafromResponse[counter];
        databody.insertAdjacentHTML('afterend',`<h4>${post.title}</h4><p>${post.body}</p>`);
        counter = counter + 1;
    }

    
}

function failureFunction(error) {
    // Do failure code here
    console.log('failure');
}

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);