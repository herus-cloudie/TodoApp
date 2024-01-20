export default function SortedData(Todos){
    let sortedData = {}
    Todos.map(todo => {
        if(!sortedData[todo.status]) sortedData[todo.status] =  []
        sortedData[todo.status].push(todo)
    }
    )
    return sortedData;
}