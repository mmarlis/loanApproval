$(document).ready(function (){
    let myValidation =
        {
            salary: {
                required: true,
                min: 1,
                max: 999999,
                digits: true
            },
            creditScore: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },
            monthsAtJob: {
                required: true,
                min: 1,
                max: 600,
                digits: true
            }
        };

    let myMessages =
        {
            salary: {
                required: "required field",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            },
            creditScore: {
                required: "required field",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            },
            monthsAtJob: {
                required: "required field",
                min: "Please enter a number",
                max: "Please enter a number",
                digits: "Please enter a number"
            }
        };

    $("form").validate({
        submitHandler: calculate,
        rules: myValidation,
        messages: myMessages
    });

    function calculate()
    {
        let salary = $("#salary").val();
        let creditScore = $("#creditScore").val();
        let jobLength = $("#jobLength").val();


        if((salary<=40000) && (creditScore >= 600) && (jobLength > 12))
        {
            $("#output").text("Your loan has been approved");
        }
        else if((salary >= 40000) && (creditScore >=600) && (jobLength >12))
        {
            $("#output").text("your loan has been approved");
        }
        else if((salary >= 40000) && (creditScore >= 1) && (jobLength > 12))
        {
            $("#output").text("Your loan has been approved");
        }
        else if((salary >= 40000) && (creditScore >= 600) && (jobLength >1))
        {
            $("#output").text("Your loan has been approved");
        }
        else
        {
            $("#output").text("We apologize, your application has been denied");
        }
    }
    
});