teams = [];

$(document).ready(function () {
  getTeamInfo();
});

function getTeamInfo() {
  var settings = {
    url: "http://127.0.0.1:8000/accConnect/teams?format=json",
    method: "GET",
    timeout: 0,
    headers: {
      Cookie:
        "csrftoken=X1OFZIh2QujZVQ8NKiW2oOT2c3yR4y6xjoibh5iOcOQXsgfudocH91rSzLvFZ8Ew",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    for (x in response) {
      team = {
        id: response[x].id,
        name: response[x].team_name,
      };
      console.log(response[x].id);
      console.log(response[x].team_name);
      teams.push(team);
    }

    $(
      ".e192_233"
    ).append(`<div class="e192_234"></div><span class="e192_236">Team Lead</span><span class="e192_237">10 </span><span
      class="e192_238">${teams[0].name}</span>`);

    $(
      ".e192_239"
    ).append(`<a href="../team_profile/index.html"><div class="e192_240"></div><span class="e192_242">Team Lead</span><span class="e192_243">8 </span><span
      class="e192_244">${teams[1].name}</span></a>`);

    $(
      ".e192_245"
    ).append(`<div class="e192_246"></div><span class="e192_248">Team Lead</span><span class="e192_249">5</span><span
    class="e192_250">${teams[2].name}</span>`);
    $(
      ".e192_251"
    ).append(`<div class="e192_252"></div><span class="e192_254">Team Lead</span><span class="e192_255">6 </span><span
      class="e192_256">${teams[3].name}</span>`);

    console.log(teams);
  });
}
