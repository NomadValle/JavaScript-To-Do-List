

/*GLOBAL VARIABLES*/
var idCounter= 0;
var listArray=[idCounter];
var input = document.getElementById("todo-input");
var addBtn = document.getElementById("btn1");
var createdDiv = "";
var createdCheckBox = "";


//constructor
function ListObj() {
    this.id = idCounter,
    this.todo = document.getElementById("todo-input").value;
}



//function to add item to list array
function addToList(){
    var div = document.createElement("div");
    var chkBx = document.createElement("input")
    var button= document.createElement("button");
    var p = document.createElement("p");


    for(var i in listArray){
        listArray[i] = new ListObj(); //creates a new ListObj object from constructor
       

        document.getElementById("list-container").appendChild(div);
        div.setAttribute("id","listItem"+ idCounter);
        div.setAttribute("class","listItem");

        document.getElementById("listItem"+idCounter).appendChild(chkBx);
        chkBx.setAttribute("type","checkbox");
        chkBx.setAttribute("id","check"+idCounter);
        chkBx.setAttribute("onchange","complete(this.id)");

        document.getElementById("listItem"+idCounter).appendChild(p);
        
        p.innerText = listArray[i].todo;
        p.setAttribute("class","task");

        document.getElementById("listItem"+idCounter).appendChild(button);
        button.innerText="Remove";

        button.setAttribute("onclick","remove(this)");
        button.setAttribute("class","btn");
        idCounter++;
        

    }
    //assign div to global variable
    createdDiv = document.getElementsByClassName("listItem");
    createdCheckBox = document.getElementById("check");

}

//complete
function complete(id){
var taskID = id;
var divID = document.getElementById(taskID).parentElement.id;
console.log(divID);

    if(document.getElementById(taskID).checked){
        document.getElementById(divID).style.textDecoration="line-through";
        document.getElementById(divID).style.color='gray';
    }
    else{
        document.getElementById(divID).style.textDecoration="none";
        document.getElementById(divID).style.color='blue';
    }
}





//working with alerts. Check gives 'checked' message. Unchecked gives 'unchecked' message.
// function complete(){    
//     if(createdCheckBox.checked ==true)
//         {
//             //works! Must be an ID
//             document.querySelector("div").style.textDecoration= "line-through";
//             // document.getElementByClassName("p").style.color="gray";
            
//         }
//     else if(!this.checked){
//         alert("unchecked");
    
//     }

// }
    //    createdDiv.addEventListener('click',()=>{
    //         createdDiv.style.setProperty("text-decoration", "line-through");
    //         createdDiv.style.setProperty("color","gray");
    //         createdDiv.addEventListener('click',()=>{
    //             createdDiv.style.setProperty("text-decoration","none");
    //             createdDiv.style.setProperty("color","blue");
    //             });
    //     });
    




addBtn.addEventListener('click',()=>{
    // clearing the input field
    input.value = "";
});

function remove(e){
    //remove 'this' parent node. 
    e.parentNode.parentNode.removeChild(e.parentNode)
}


