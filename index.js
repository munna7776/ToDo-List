showList();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',()=>{
    console.log("munna");
    let addTxt = document.getElementById("addTxt");
    myObj=addTxt.value;
    let todo = localStorage.getItem("todo");
    if(todo==null)
    {
        todoObj=[];
    }
    else{
        todoObj = JSON.parse(todo);
    }
    if(myObj.length>=3)
    {
        todoObj.push(myObj);
        localStorage.setItem("todo",JSON.stringify(todoObj));
        showList();
    }
    else{
        let alert = document.getElementById("alert");
        alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Sorry!</strong> You can not add this to your Todo list.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
        setTimeout(() => {
            alert.innerHTML="";
        }, 2000);
    }
    console.log(todoObj);
    addTxt.value="";
})

function showList(){
    let todo = localStorage.getItem("todo");
    if(todo==null)
    {
        todoObj=[];
    }
    else{
        todoObj = JSON.parse(todo);
    }
    let todoList = "";
    todoObj.forEach(function(element,index){
        todoList += `<tr class="row">
                        <th class="col-2">${index+1}</th>
                        <td class="col-8">${element}</td>
                        <td class="col-2">
                            <button class="btn btn-danger" id="${index}" onclick="deleteBtn(this.id)">Delete</button>
                        </td>
                    </tr>`
    });
    let tbody = document.getElementById("tbody");
    if(todoObj.length!=0)
    {
        tbody.innerHTML=todoList;
    }
    else{
        tbody.innerHTML="Nothing to show !";
    }
}
function deleteBtn(index)
{
    let todo = localStorage.getItem("todo");
    if(todo==null)
    {
        todoObj=[];
    }
    else{
        todoObj = JSON.parse(todo);
    }
    todoObj.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todoObj));
    showList();
}