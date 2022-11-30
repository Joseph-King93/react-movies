import { useState } from "react"

function ActorCard({actor}) {
    let afterSplit = []
    afterSplit = actor.split(" ")
    let firstName = afterSplit[0]
    let lastName = afterSplit[1]
    
    const [currentFirstName, setFirstName] = useState(firstName)
    const [currentLastName, setLastName] = useState(lastName)
    const [newPicture, setNewPicture] = useState("")
    const [pageId, setPageId] = useState("")

        // Create a new object to interact with the server
        var xhr = new XMLHttpRequest();
        
        var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${currentFirstName}%20${currentLastName}&prop=pageimages&format=json&pithumbsize=250`;

        // Provide 3 arguments (GET/POST, The URL, Async True/False)
        xhr.open('GET', url, true);

        // Once request has loaded...
        xhr.onload = function() {
            // Parse the request into JSON
            var data = JSON.parse(this.response);

            // Log the page objects
            console.log(data.query.pages)

            // Loop through the data object
            for (var i in data.query.pages) {
                setPageId(data.query.pages[i].pageid)
                setNewPicture(data.query.pages[i].thumbnail.source)
                console.log(newPicture)
            }
        }

        // Send request to the server asynchronously
        xhr.send();   

    
    return (
        <>
            <ul>
                <li><a href={`https://en.wikipedia.org/?curid=${pageId}`} target="_blank">{actor}</a>
                    <br></br>
                    {newPicture ? 
                    <img src={newPicture} ></img>
                    : <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" width="200" height="200"/>   }              
                    <br></br>
                </li>
            </ul>
        </>
    );
  }
  
  export default ActorCard