//Times visited
let timesVisited = 0;
let report = document.getElementById('report');

if(localStorage.timesVisited){
  timesVisited = parseInt(localStorage.timesVisited)
}
timesVisited += 1;
let trying = 0;
localStorage.setItem('timesVisited', timesVisited);

const taggedTemp = (string, ...vals) =>
    string.reduce((acc, iterator, index) => 
        (`${acc} <span class="color">${vals[index -1]}</span> ${iterator}`));
    
report.innerHTML = (taggedTemp`You have been to this page ${timesVisited} times!`);



//select box
$("select[name='choose']").change(function() {
    $("#genderSpan").html($(this).val());
});

//radio buttons
$("input:radio[name='species']").change(function() {
    if($(this).prop('checked')) {
        $("#speciesSpan").html($(this).val());
    }
  
});
//check box

var allChecked = []; //all checked 

$("input:checkbox").change(function() {
    var value = $(this).val();
    if($(this).prop("checked")) {
        allChecked.push(value);
    }
    else {//if not checked or remove it
        var index = allChecked.indexOf(value);//get index in the array
        allChecked.splice(index, 1);
    }
    $("#featureSpan").html("");//clear the space before setting the values for checked
    for (let i = 0; i < allChecked.length; i++){
        $("#featureSpan").append(allChecked[i]);
        console.log("I", i)
        console.log("len",allChecked.length )
        if( i < allChecked.length -1)
          $("#featureSpan").append(", ");
        else
        $("#featureSpan").append(" ");
    }


})
