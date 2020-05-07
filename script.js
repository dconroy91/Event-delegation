function buildTaskForm(){
    return `
    <form>
    <<input type="text placeholder="New Task" />
    </form>
    <button>Submit</button>`
}

document.querySelector("#page-content").addEventListener("click",function(){
    
})

document.querySelector("#my-to-do-list").addEventListener("click",function(){
const pageContentContainer = document.querySelector("#page-content").innerHTML = `
<h1>My to do list</h1>`;
pageContentContainer.innerHTML += buildTaskForm;
})

document.querySelector("#family-to-do-list").addEventListener("click",function(){

    document.querySelector("#page-content").innerHTML = `
    <h1>Family to-do List</h1>`
    })

document.querySelector("#completed-tasks").addEventListener("click", function(){

    document.querySelector("#page-content").innerHTML = `
    <h1>Completed Tasks</h1>`
})