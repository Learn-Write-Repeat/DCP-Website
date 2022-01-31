// Speakers Data
$(function () {
  $.getJSON("../../../resources/DCP22/speakers.json", function (data) {
    $.each(data.speakers, function (i, person) {
      var speakerCol =
        '<div class="col-lg-4 col-md-6"><div class="speaker" data-aos="fade-up" data-aos-delay="100"><img src=' +
        person.image_url +
        ' class="img-fluid"/><div class="details"><h3>' +
        person.name +
        "</h3><p>" +
        person.about +
        '</p><div class="social"><a href=' +
        person.linkedin_url +
        '><i class="bi bi-linkedin"></i></a></div></div></div></div>';
      $(speakerCol).appendTo("#speakersData");
    });
  });
});

// Top Project Admins Data
$(function () {
  $.getJSON(
    "../../../resources/DCP22/top-project-admins.json",
    function (data) {
      var emptyCol = '<div class="col-lg-3 col-md-6 mb-lg-0 mb-5 "></div>';
      $(emptyCol).appendTo("#projectAdmins");
      $.each(data.top_project_admins, function (i, person) {
        var personCol =
          '<div class="col-lg-3 col-md-6 mb-lg-0 mb-5 "><div class="avatar mx-auto"><img src=' +
          person.image_url +
          ' class="rounded-circle z-depth-1" style="height:250px;width:250px;"/></div><h5 class="font-weight-bold mt-4 mb-3">' +
          person.name +
          '</h5><p class="text-uppercase blue-text"><strong>' +
          person.about +
          '</strong></p><ul class="list-unstyled mb-0"><a href=' +
          person.linkedin_url +
          ' class="buy-tickets follow-btn">Follow</a></ul></div>';
        $(personCol).appendTo("#projectAdmins");
      });
      $(emptyCol).appendTo("#projectAdmins");
    }
  );
});

// Top Contributors Data
$(function () {
  $.getJSON("../../../resources/DCP22/top-contributors.json", function (data) {
    $.each(data.top_contributors, function (i, person) {
      var personCol =
        '<div class="col-lg-3 col-md-6 mb-lg-0 mb-5 mt-5"><div class="avatar mx-auto"><img src=' +
        person.image_url +
        ' class="rounded-circle z-depth-1" style="height:250px;width:250px;"/></div><h5 class="text-uppercase font-weight-bold mt-4 mb-3">' +
        person.name +
        '</h5><p class="blue-text"><strong>' +
        person.about +
        '</strong></p><ul class="list-unstyled mb-0"><a href=' +
        person.linkedin_url +
        ' class="buy-tickets follow-btn">Follow</a></ul></div>';
      $(personCol).appendTo("#contributors");
    });
  });
});

// Team data
$(function () {
  $.getJSON("../../../resources/DCP22/team.json", function (data) {
    console.log(data.team);
    $.each(data.team, function (i, person) {
      var personCol =
        '<div class="col-md-3 col-sm-6"><div class="our-team"><div class="pic"><img src=' +
        person.image_url +
        '></div><h3 class="title">' +
        person.name +
        '</h3><span class="post">' +
        person.position +
        '</span><ul class="social">';
      if (person.social.linkedin) {
        personCol += `<li><a href="${person.social.linkedin}" class="bi bi-linkedin"></a></li>`;
      }
      if (person.social.twitter) {
        personCol += `<li><a href="${person.social.twitter}" class="bi bi-twitter"></a></li>`;
      }
      if (person.social.github) {
        personCol += `<li><a href="${person.social.github}" class="bi bi-github"></a></li>`;
      }
      personCol += "</ul></div></div> ";
      $(personCol).appendTo("#teamDetails");
    });
  });
});

// Projects Data
$(function () {
  $.getJSON("../../../resources/DCP22/projects.json", function (data) {
    $.each(data.projects, function (i, project) {
      var projectFront =
        '<div class="col-lg-4 col-md-6"><div class="projectEntry" data-aos="fade-up" data-aos-delay="100"><div class="flip-card" ><div class="flip-card-inner" onclick="flip(event)"><div class="flip-card-front"><article class="card"><h1 class="title">' +
        project.title +
        "</h1><p>" +
        project.desc.slice(0, 180) +
        "...</p><a href=" +
        project.github_url +
        ' class="buy-tickets view-btn" target="_blank">View on Github</a><br><div class="tags">';
      var tags = "";
      $.each(project.tech_stack, function (i, tag) {
        tags += '<div class="tag">' + tag + "</div>";
      });
      projectFront += tags;
      projectFront += "</div></article></div>";

      var projectBack =
        '<div class="flip-card-back"><article class="card"><h3 class="text-center" style="font-weight: 600">Other Details</h3><p>' +
        project.desc.slice(0, 200) +
        '...</p><p><u>Project Maintained by</u> : <br /><span style="font-weight: 600;">' +
        project.admin_info.name +
        '</span>&nbsp;<a href="mailto:' +
        project.admin_info.email +
        '"><i class="bi bi-envelope"></i></a></p><div class="mentors"><p><u>Mentors</u> :';
      var mentorsList = "";
      $.each(project.mentors, function (i, mentor) {
        mentorsList +=
          '<br><span style="font-weight: 600;">' +
          mentor.name +
          '</span>&nbsp;<a href="mailto:' +
          mentor.email +
          '"><i class="bi bi-envelope"></i></a>';
      });
      projectBack += mentorsList;
      projectBack += "</p></div></article></div></div></div></div></div>";
      var projectCol = projectFront + projectBack;

      $(projectCol).appendTo("#projectDetails");
    });
  });
});
