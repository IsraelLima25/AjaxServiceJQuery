function getAllUser(){
    $(document).ready(function() {
$.ajax({
url: "https://reqres.in/api/users?page=2",
dataType:'json'      
}).then(function(data) {
      
    $.each(data.data, function(index,value){

        var newRow = $("<tr>");
        var cols = ""; 
        cols += '<td>'+value.id+'</td>';
        cols += '<td>'+value.email+'</td>';
        cols += '<td>'+value.first_name+'</td>';
        cols += '<td>'+value.last_name+'</td>';
        cols += '<td> <a href="'+value.avatar+'"> '+value.avatar+'</a></td>';          
        newRow.append(cols);
        $("#tabelaCandidatos").append(newRow);  

    })               
}       
);
});
} 