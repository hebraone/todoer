var remove = ""
 
addElem.addEventListener('click', function myFunction2() {
    
    var todo = document.getElementById('myField').value;
	 	if (todo == "") {
        alert("Field can't be empty");
        return false;
    }  
    
	var todo = todo.toUpperCase(),
		    ul = document.getElementById("Lista"),
		    li = document.createElement("li");
        $(li).hide().appendTo(document.body).fadeIn(1000);
		    remove = document.createElement("button");
        $(remove).hide().appendTo(document.body).fadeIn(1000);
		
	remove.setAttribute("id", "test");
	remove.innerHTML = 'X';
		
	remove.addEventListener('click', function () {
        this.parentNode.removeChild(this);
	      li.parentNode.removeChild(li);
    });
			
	li.innerHTML = todo;
	ul.appendChild(li);
	li.appendChild(remove);
        
	remove.addEventListener('click', function () {
      this.parentNode.removeChild(this);
	    li.parentNode.removeChild(li);
	});
     
	$("#btn-save").click( function() {
		var blob = new Blob(["Your Todo List :" + "  " + todo], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "YourTodoList.txt");
	});
  
});