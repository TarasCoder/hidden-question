$(document).ready(function(){
    
    $("#substance input").addClass("hidden");

    // 1 question of 2nd section
    $('#substance select').on('change', function () {
        let myVar = $("#substance option").filter(":selected").val();   
        if (myVar === "yes"){
            $('<input>').attr({
                type: 'text',
                id: 'substanceInput',
                class: 'form-control',
                placeholder: 'Enter details please: ',
                required: 'required'
            }).appendTo($('#substance'));
        } else if (myVar === "no") {
            $("#substanceInput").remove();
        } else if (myVar === ""){
            $("#substanceInput").remove();
        }
    });
    
    
    
});
