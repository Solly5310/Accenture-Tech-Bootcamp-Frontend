$(document).ready(function () {
  var settings = {
    url: "http://127.0.0.1:8000/accConnect/users",
    method: "GET",
    timeout: 0,
    headers: {
      Cookie:
        "csrftoken=X1OFZIh2QujZVQ8NKiW2oOT2c3yR4y6xjoibh5iOcOQXsgfudocH91rSzLvFZ8Ew",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    $(".e178_298").append(`<div class="e178_299"></div>
    <span class="e178_300">${response[1].user_name}</span
    ><span class="e178_301">Application Development Specialist</span>`);
  });
});
