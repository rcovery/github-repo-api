function getRepository(username, rootElement){
    fetch("https://api.github.com/users/"+ username +"/repos")
    .then(response => response.json())
    .then((data) => {
        data.forEach((item) => {
            if(item.description ==null) item.description = "Nothing"

            let dataReturn = `<a id="projectLink" href="${item.html_url}" target="_blank"><div>
                <span>${item.name}</span>
                <p>${item.description}</p>
                </div></a>`;
            
            if (!item.fork){ // If it's not forked
                document.getElementById(rootElement).innerHTML += dataReturn
            }      
        })
    })   
}
