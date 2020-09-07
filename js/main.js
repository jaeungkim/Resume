$(document).ready(function () {
    //Reading JSON Resume File
    $.getJSON('json/resume.json', function (data) {
        //Left Side Profile Name
        var profileInfo = $("#profile_info");

        var nameList = $("<ul class = 'list-unstyled text-left float-left'></ul>").appendTo(profileInfo);
        $("<li>").append("<h1 class = 'midnightBlue text-weight-900 display-3'>" + data.personalInfo.firstName).appendTo(nameList);
        $("<li>").append("<p class = 'text-weight-bold display-4'>" + data.personalInfo.lastName).appendTo(nameList);

        //Right Side Social Lists
        var socialList = $("<ul class = 'list-unstyled text-right float-right'>").appendTo(profileInfo);
        $("<li>").text(data.personalInfo.home).append("<i class='fa fa-home midnightBlue'></i>").appendTo(socialList);
        $("<li>").text(data.personalInfo.phone_number).append("<i class='fa fa-phone midnightBlue'></i>").appendTo(socialList);
        $("<li>").text(data.personalInfo.email).append("<i class='fa fa-envelope midnightBlue'></i>").appendTo(socialList);
        $("<li>").text(data.personalInfo.linkedIn).append("<i class='fa fa-linkedin midnightBlue'></i>").appendTo(socialList);
        $("<li>").text(data.personalInfo.personal_web).append("<i class='fa fa-globe midnightBlue'></i>").appendTo(socialList);

        //Small Description with New Line
        var smallDescription = $("#profile_big");
        $("<p class= 'font-italic'>").text("Recent University Graduate, a dedicarted Software Developer").appendTo(smallDescription);
        $("<hr class = 'myhrline'>").appendTo(smallDescription);


        //Skill Header
        var skillInfo = $("#skill_info");
        $("<h1>").append("<span class = 'midnightBlue'>Tech</span>").append("<span>nical Skills </span>").appendTo(skillInfo);

        //Skill Array
        var skillList = $("<ul class = 'text-left'>").appendTo(skillInfo);
        $("<li>").text("Front-End: " + data.techSkills.frontEnd.map(function (front) { return front }).join(', ')).appendTo(skillList);
        $("<li>").text("Back-End: " + data.techSkills.backEnd.map(function (back) { return back }).join(', ')).appendTo(skillList);
        $("<li>").text("Other Programming Languages: " + data.techSkills.otherLanguages.map(function (other) { return other }).join(', ')).appendTo(skillList);
        $("<li>").text("Database: " + data.techSkills.databases.map(function (database) { return database }).join(', ')).appendTo(skillList);
        $("<li>").text("Design: " + data.techSkills.design.map(function (design) { return design }).join(', ')).appendTo(skillList);
        $("<li>").text("Project-Management: " + data.techSkills.projectManagement.map(function (pm) { return pm }).join(', ')).appendTo(skillList);

        //New Line
        var skill_line = $("#skill_big");
        $("<hr class = 'myhrline'>").appendTo(skill_line);

        //Education
        var education_section = $("#education_description");
        $("<h1>").append("<span class = 'midnightBlue'>Edu</span>").append("<span>cation</span>").appendTo(education_section);

        //Education Array
        var educationInfo = $("#education_info");
        var educationList = $("<ul class = 'list-unstyled text-left float-left'>").appendTo(educationInfo);
        $("<li>").append("<h3>" + data.education.university).appendTo(educationList);
        $("<li>").append("<h4 class = 'midnightBlue'>" + data.education.degree).appendTo(educationList);

        var educationDate = $("<ul class = 'list-unstyled text-right float-right'>").appendTo(educationInfo);
        $("<li>").append("<h5 class = 'midnightBlue'>" + data.education.city).appendTo(educationDate);
        $("<li>").append("<h5 class = 'midnightBlue'>" + data.education.startDate + " - " + data.education.endDate).appendTo(educationDate);

        var educationCourses = $("#education_array");
        $("<li>").text("Courses Include: " + data.education.courses.map(function (course) { return course }).join(', ')).appendTo(educationCourses);

        //New Line
        var education_line = $("#education_big");
        $("<hr class = 'myhrline'>").appendTo(education_line);

        //Experiences
        var experience_section = $("#experience_description");
        $("<h1>").append("<span class = 'midnightBlue'>Exp</span>").append("<span>erience</span>").appendTo(experience_section);

        //Experience Loop

        for (i = 0; i < i < data.experience.length; i++) {
            var experienceInfo = $("#experience_info");
            var experienceList = $("<ul class = 'list-unstyled text-left float-left'>").appendTo(experienceInfo);
            $("<li>").append("<h3>" + data.experience[i].workName).appendTo(experienceList);
            $("<li>").append("<h4 class = 'midnightBlue'>" + data.experience[i].position).appendTo(experienceList);

            var experienceDate = $("<ul class = 'list-unstyled text-right float-right'>").appendTo(experienceInfo);
            $("<li>").append("<h5 class = 'midnightBlue'>" + data.experience[i].city).appendTo(experienceDate);
            $("<li>").append("<h5 class = 'midnightBlue'>" + data.experience[i].startDate + " - " + data.experience[i].endDate).appendTo(experienceDate);

            $("<br><br><br><br>").appendTo(experienceInfo);
            $("<li>").append(data.experience[i].description.map(function (descp) { return descp }).join('<li>')).appendTo(experienceInfo);
            $("<br><br>").appendTo(experienceInfo);
        }
    });
});