export default function Hobbies({ hobbies }) {
    
    return (
        <div>
            <h1>My Hobbies</h1>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}