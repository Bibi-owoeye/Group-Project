let toggleBar = document.getElementById('toggle')
let navOptions = document.getElementById("navoptions")
let deleteMe = document.getElementById("deleteMe")
let departmenthead = document.getElementById("departmentHeads")
let departments = document.getElementById('Departmentss')

toggleBar.addEventListener('click',()=>{
    navOptions.classList.remove('d-none');
    navOptions.classList.add('d-block');
})
deleteMe.addEventListener('click',()=>{
    navOptions.classList.remove('d-block');
    navOptions.classList.add('d-none');
})
departmenthead.addEventListener('click',()=>{
    departments.classList.remove('d-none');
    departments.classList.add('d-block');
})
departmenthead.addEventListener('dblclick',()=>{
    departments.classList.remove('d-block');
    departments.classList.add('d-none');
})