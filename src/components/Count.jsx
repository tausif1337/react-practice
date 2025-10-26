import { useEffect } from "react"; // import the useState hook

export default function Count(){
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
    
    }, []);
    return(
        <div>
        </div>
    )
}