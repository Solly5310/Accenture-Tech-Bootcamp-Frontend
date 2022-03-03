projects = [];
$(document).ready(function () {
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

    $(".e192_67").append(`<div class="e192_68"></div>
    <span class="e192_69">Team Lead</span
    ><span class="e192_70">${response[0].project_name}</span>
    <div class="e192_71">
      <div class="e192_72"></div>
      <span class="e192_73">#FS</span>
    </div>
    <div class="e192_74">
      <div class="e192_75"></div>
      <span class="e192_76">#blockchain</span>`);

    $(".e192_77").append(`<div class="e192_78"></div>
    <span class="e192_79">Team Lead</span
    ><span class="e192_80">${response[1].project_name}</span>
    <div class="e192_81">
      <div class="e192_82"></div>
      <span class="e192_83">#AWS</span>
    </div>
    <div class="e192_84">
      <div class="e192_85"></div>
      <span class="e192_86">#cloud</span>
    </div>`);

    $(".e192_87").append(` <div class="e192_88"></div>
    <span class="e192_89">Team Lead</span
    ><span class="e192_90">${response[2].project_name}</span>
    <div class="e192_91">
      <div class="e192_92"></div>
      <span class="e192_93">#splunk</span>
    </div>`);
  });
});
