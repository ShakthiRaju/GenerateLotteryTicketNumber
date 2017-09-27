
$(document).ready(function () {  

    $(function () {
        $('#generate').click(function (e) { // Generate Lottery Ticket

           var serviceURL = '/Lottery/GenerateTicket';

            $.ajax({ //Ajax call to connect with Lottery Controller and GenerateTicket Action
                type: "POST",
                url: serviceURL,
                data: param = "",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success : function (data) { // Success set the random number to textbox
                   
                    $('#Randomnumber').val(data.Number);
                   
                },
                error: function(){ 
                alert('Failed to generate Random Lottery ticket Number');
            }
            });
          
        });

        $('#Add').click(function () { // On Clicking Add Button add the random to Lottery Ticket List
            if ($('#Randomnumber').val() == "") { // check Textbox is empty
                alert('Please Generate the Random Number to Add');
            }
            else {
                if ($("#SelectedTicket option[value='" + $('#Randomnumber').val() + "']").length == 0) { // Check if the Random ticket number is already exists
                    $('#SelectedTicket').append('<option value=' + $('#Randomnumber').val() + '>' + $('#Randomnumber').val() + '</option>');
                }
                else { alert('Lottery Ticket Already Selected, Please generate a new Random Lottery Number'); }
            }
           
        });

        $('#removeticket').click(function () { // On Remove button Click remove the selected Lottery ticket from List
            if ($('#SelectedTicket').children().length == 0) {
                alert('Oops! No Ticket number is available in the List to Remove');
            }
            else
            $("#SelectedTicket option:selected").each(function () {
                $(this).remove();
            });
        });


    });


});