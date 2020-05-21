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
    if($(this).val() === "select"){
        $("#genderSpan").html("")
    }else{
    $("#genderSpan").html($(this).val()) 
    }
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
        if( i < allChecked.length -1)
          $("#featureSpan").append(", ");
        else
        $("#featureSpan").append(" ");
    }


})
//----------
$("button[name='submit']").click(passwordFunk);

$("input[name='password']").keypress(function(){
    if(event.keyCode === 13){
        passwordFunk();
    }
})


    function passwordFunk() {
        var passwordField = $("input[name='password']");
        var password = passwordField.val();
        var isOkay = true;
    
        if(password.length < 10){
            isOkay = false;
            $("#atLeast10Chars").show();
        }
        if (/\d/.test(password) == false) {
            isOkay = false;
            $("#needsNumber").show();
        }
        if(isOkay == false){
            $("#successMessage").hide();
            $("#errorMessage").show();
            passwordField.removeClass("goodBox").addClass("errorBox");
        }
        else{
            $(".errorText").hide();
            $("#successMessage").show();
            passwordField.removeClass("errorBox").addClass("goodBox");
    
        }
    
        return false;
    };