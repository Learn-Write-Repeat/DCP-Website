// Speakers Data
$(function () {
  $.getJSON("/resources/speakers.json", function (data) {
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
  $.getJSON("/resources/top-project-admins.json", function (data) {
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
  });
});

// Top Contributors Data
$(function () {
  $.getJSON("/resources/top-contributors.json", function (data) {
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
  $.getJSON("/resources/team.json", function (data) {
    $.each(data.team, function (i, person) {
      var personCol =
        '<div class="col-lg-3 col-md-6"><div class="teamMember" data-aos="fade-up" data-aos-delay="100"><img src=' +
        person.image_url +
        ' class="img-fluid"/><div class="details"><h3>' +
        person.name +
        "</h3><p>" +
        person.position +
        '</p><div class="social">';
      if (person.social.linkedin) {
        personCol +=
          "<a href=" +
          person.social.linkedin +
          '><i class="bi bi-linkedin"></i></a>';
      }
      if (person.social.twitter) {
        personCol +=
          "<a href=" +
          person.social.twitter +
          '><i class="bi bi-twitter"></i></a>';
      }
      if (person.social.github) {
        personCol +=
          "<a href=" +
          person.social.github +
          '><i class="bi bi-github"></i></a>';
      }
      personCol += "</div></div></div></div>";
      $(personCol).appendTo("#teamDetails");
    });
  });
});

// Projects Data
$(function () {
  $.getJSON("/resources/projects.json", function (data) {
    $.each(data.projects, function (i, project) {
      var projectFront =
        '<div class="col-lg-4 col-md-6"><div class="projectEntry" data-aos="fade-up" data-aos-delay="100"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><article class="card"><h1 class="title">' +
        project.title +
        "</h1><p>" +
        project.desc.slice(0, 180) +
        "...</p><a href=" +
        project.github_url +
        ' class="buy-tickets follow-btn">View on Github</a><br><div class="tags">';
      var tags = "";
      $.each(project.tech_stack, function (i, tag) {
        tags += '<div class="tag">' + tag + "</div>";
      });
      projectFront += tags;
      projectFront += "</div></article></div>";

      var projectBack =
        '<div class="flip-card-back"><article class="card"><h3 class="text-center" style="font-weight: 600">Other Details</h3><p>' +
        project.desc +
        '</p><p><u>Project Maintained by : </u> <br /><span style="font-weight: 600;">' +
        project.admin_info.name +
        '</span>&nbsp;<a href="mailto:' +
        project.admin_info.email +
        '"><i class="bi bi-envelope"></i></a></p><div class="mentors"><p><u>Mentors :</u>';
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

{
  /* <div class="col-lg-4 col-md-6">
              <div class="projectEntry" data-aos="fade-up" data-aos-delay="100">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <article class="card">
                        <h1 class="title">
                          Rescale components in an intuitive way with RFS
                        </h1>
                        <p>
                          This card uses
                          <a href="https://github.com/twbs/rfs" target="_blank">
                            RFS
                          </a>
                          to rescale <code>margin</code>,<code>padding</code>,{"
                          "} <code>font-size</code>,<code>box-shadow</code>
                          &amp; <code>border-radius</code>. Resize the codepen
                          to see it in action.
                        </p>
                        <a href="" class="buy-tickets follow-btn">View on Github</a>
                        <br>
                        <div class="tags">
                          <div class="tag">HTML</div>
                          <div class="tag">React</div>
                          <div class="tag">CSS</div>
                          <div class="tag">CSS</div>
                          <div class="tag">Django</div>
                          <div class="tag">github</div>
                          <div class="tag">HTML</div>
                          <div class="tag">HTML</div>
                          <div class="tag">HTML</div>
                          <div class="tag">HTML</div>
                        </div>
                      </article>
                    </div>
                    <div class="flip-card-back">
                      <article class="card">
                        <h3 class="text-center" style="font-weight: 600">
                          Other Details
                        </h3>
                        <p>
                          The application will help user check the availability
                          of vaccination slots for a specific date by
                          individually entering different PIN codes or district
                          details along with the age group (18+ or 45+).
                        </p>
                        <p>
                          <u>Project Maintained by : </u> <br /><span style="font-weight: 600;">Ashutosh Krishna</span>&nbsp;<a href=""
                            ><i class="bi bi-envelope"></i
                          ></a>
                        </p>
                        <div class="mentors">
                          <p><u>Mentors :</u> <br><span style="font-weight: 600;">Ashutosh Krishna</span>&nbsp;<a href=""
                            ><i class="bi bi-envelope"></i
                          ></a><br><span style="font-weight: 600;">Ashutosh Krishna</span>&nbsp;<a href=""
                            ><i class="bi bi-envelope"></i
                          ></a></p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div> */
}
