

export function Todos({todos}) {
    async function click(id){
        let response = await fetch("http://localhost:3000/done",{
            method:"PUT",
            body:JSON.stringify({
                id:id
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let json = await response.json()
        alert(json.msg)
        window.location.reload()

    }

    return <div>
        {todos.map(function(todo) {
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button 
                onClick={()=>click(todo._id)}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}