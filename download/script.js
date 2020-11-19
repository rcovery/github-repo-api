function getRepository(username, rootElement){
    fetch("https://api.github.com/users/"+ username +"/repos")
    .then(response => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.description == null) item.description = "Nothing" // If description equals null

            let dataReturn = `` // You can edit the data return, see all in https://developer.github.com/v3/repos/#response

            console.log(item)
            if (!item.fork){ // If it's not forked
                document.getElementById(rootElement).innerHTML += dataReturn
            }      
        })
    })   
}
