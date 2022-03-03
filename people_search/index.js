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

    $(".e178_700").append(`<div class="e178_707"></div>
    <span class="e178_708">${response[0].user_name}</span
    ><span class="e178_709">Chair and Chief Executive Officer</span>`);

    $(".e178_710").append(`<a href="../profile_page/index.html">
      <div class="e178_717"></div>
      <span class="e178_718">${response[1].user_name}</span
      ><span class="e178_719">Application Development Specialist</span></a
    >`);

    $(".e178_720").append(` <div class="e178_727"></div>
      <span class="e178_728">${response[2].user_name}</span
      ><span class="e178_729">Technology Consulting Manager</span>`);
  });
});
