$(document).ready(function () {
  // all custom jQuery will go here
  $('#firstbutton').click(function () {
    $.ajax({
      url: 'http://localhost:8081',
      success: function (result) {
        $('#firstbutton').toggleClass('btn-primary:focus');
      },
    });
  });

  $('#secondbutton').click(function () {
    $.ajax({
      url: 'http://localhost:8081/create40x',
      success: function (result) {
        $('#secondbutton').toggleClass('btn-primary:focus');
      },
    });
  });

  $('#thirdbutton').click(function () {
    $.ajax({
      url: 'http://localhost:8081/create50x',
      success: function (result) {
        $('#thirdbutton').toggleClass('btn-primary:focus');
      },
    });
  });

  $('#fourthbutton').click(function () {
    $.ajax({
      url: 'http://localhost:8082',
      success: function (result) {
        $('#fourthbutton').toggleClass('btn-secondary:focus');
      },
    });
  });

  $('#fifthbutton').click(function () {
    $.ajax({
      url: 'http://localhost:8082/trace',
      success: function (result) {
        $('#fifthbutton').toggleClass('btn-secondary:focus');
      },
    });
  });
});
