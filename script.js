$('#addElem').click(function myFunction2() {
    var todo = $('#myField').val().toUpperCase(),
        $ul = $("#lista"),
        $li = $('<li></li>'),
        $remove = $('<button>X</button>');
	 
    if (todo == "") {
        alert("Field can't be empty");
        return false;
    }  
        
    $li.hide().appendTo(document.body).fadeIn(1000);
    $remove.hide().appendTo(document.body).fadeIn(1000);
		
	$remove.click(function () {
        $(this).parent().remove();
    });
			
	$li.html(todo);
	$ul.append($li);
	$li.append($remove);  
});

$("#btn-save").click( function() {
    var todoTextList = "",
        blob;

    $('#lista li').each(function(index, element) {
        todoTextList += $(element).text() + '\n';
    });
    
    blob = new Blob(["Your Todo List:" + "\n" + todoTextList], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "YourTodoList.txt");
});