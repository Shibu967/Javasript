let namsteBtn=document.querySelector('button');
namsteBtn.addEventListener('click',inputMsg);
function inputMsg(){
    alert("Namste World");
    let name =prompt('Enter Name of student');
    namsteBtn.textContent='Roll No. 1:' + name;
    
}