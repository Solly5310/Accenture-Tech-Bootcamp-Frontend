$(document).ready(function () {
  // jQuery methods go here...
  console.log("Yo YO");

  var settings = {
    url: "http://127.0.0.1:8000/accConnect/projects?format=json",
    method: "GET",
    timeout: 0,
    headers: {
      "Access-Control-Request-Headers": "",
      Cookie:
        "csrftoken=X1OFZIh2QujZVQ8NKiW2oOT2c3yR4y6xjoibh5iOcOQXsgfudocH91rSzLvFZ8Ew",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var settings = {
    url: "http://127.0.0.1:8000/accConnect/projects",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      Cookie:
        "csrftoken=X1OFZIh2QujZVQ8NKiW2oOT2c3yR4y6xjoibh5iOcOQXsgfudocH91rSzLvFZ8Ew",
    },
    data: JSON.stringify({
      id: 3,
      project_name: "This better a",
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
