$(document).ready(function () {
  $("#btnCalculate").click(function () {
    //hide error message
    $("#error-msg").hide();

    const no1 = document.getElementById("leftNumber").value;
    const no2 = document.getElementById("rightNumber").value;
    const operation = $("input[name='operation']:checked").val();

    $.ajax({
      type: "GET",
      url: "http://localHost:8080/",
      data: {
        leftOperand: no1,
        rightOperand: no2,
        operation: encodeURI(operation),
      },
      success: function (result) {
        const objResult = JSON.parse(result);

        if (Object.keys(objResult).length === 0) {
          $("#error-msg").text("Please insert all data!");
          $("#error-msg").slideDown();
        }
        $("#expression").text(objResult.Expression);
        $("#result").text(objResult.Result);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log(textStatus + ":" + errorThrown);
      },
    });
  });
});
