function displayTodo(){
    const todos = JSON.parse(localStorage.getItem('todos'));
    
    let list = "";

    if(todos){
        for (let i = 0; i < todos.length; i++) {
            list+= `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div class="form-check">
                            <input class="form-check-input me-0" type="checkbox" value="" id="${todos[i].id}" onchange="setComplete(this.checked, this.id)" ${todos[i].checked ? 'checked' : ''}>
                        </div>
                    </li>
                    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p class="lead fw-normal mb-0">${todos[i].name}</p>
                    </li>
                    <li class="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                        <button type="button" class="btn btn-danger" id="${todos[i].id}" onclick="deleteTodo(this.id)">Delete</button>
                    </li>
                </ul>
            `;
        }
    } 

    document.getElementById('list-todo').innerHTML = list;
}

function submitTodo(){
    const todo = document.getElementById('add-todo');

    let todos = JSON.parse(localStorage.getItem('todos'));

    if(todos){
        todos.push({
            id: todos[todos.length-1].id + 1,
            name: todo.value,
            checked: false
        });
    } else {
        todos = [{
            id: 0,
            name: todo.value,
            checked: false
        }];
    }

    localStorage.setItem('todos', JSON.stringify(todos));
    todo.value = '';
    displayTodo();
}

function setComplete(checked, id){
    let todos = JSON.parse(localStorage.getItem('todos'));

    todos.map(el => {
        if (el.id === Number(id)){
            el.checked = checked;
        }
        return el;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodo();
}

function deleteTodo(id){
    let todos = JSON.parse(localStorage.getItem('todos'));
    
    todos = todos.filter(el => {
        return el.id !== Number(id);
    });
    
    if (todos.length > 0) {
        localStorage.setItem('todos', JSON.stringify(todos));
    } else {
        localStorage.removeItem('todos');
    }

    displayTodo();
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

// let value = {
//     namee: "Hahaa",
//     age: 22
// }

// let cnv = JSON.stringify(value)
// let cnvrt = JSON.parse(cnv)
// console.log(cnvrt);

// function main(param1,param2,cb) {
//     console.log(param1,param2)
//     cb()
// }
// main(1,2, () => {
//     console.log("hello cb");})

// let janjian = new Promise((resolve,reject) => {
//     let val = true
//     if (val) {
//         resolve("proses berhasil")
//     } else {
//         reject("proses gagal")
//     }

// })

// janjian
//     .then(el => {
//         console.log(el)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// console.log("belajar")
// setTimeout(() => 
// console.log("yuk"),100)
// console.log("javascript")


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
// xhr.send()

// const getData = async () => {
//     try {
//         const resp = await fetch ("https://jsonplaceholder.typicode.com/users",{method : "GET"})
//         // if (resp.ok) {
//         //     throw new Error(`HTTP error status: ${resp.ok}`)
//         // }
//         const data = await resp.json()
//         console.log(resp);
//         let body = document.getElementById("body-table")
//         body.innerHTML = ""
//         data.forEach(element => {
//             const tr = document.createElement("tr")
//             tr.innerHTML = `<td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.zipcode}</td>`
//             body.appendChild(tr)
//         });
//     } catch (error) {
//         console.error("Fetch Error:", error);
//         // document.getElementById("data").innerHTML
//     }
// } 

// c3db01547emsh5db7e5747ff5b40p189e50jsn0565a0e59ec9