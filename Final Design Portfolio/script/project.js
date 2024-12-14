const projectItems = $('.project_item');
const projectNamePagination = $('.pagination_container p');
const projectName = $('#project_title');

let project = ["Cerpsys", "Word Guess Game", "Offense Management System"];
let currentProject = 0;

function nextProject() {
    if(currentProject < project.length - 1) {
        currentProject++;
    } else {
        currentProject = 0;
    }

    projectItems.each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('left');
        } else if ($(this).hasClass('left')) {
            $(this).removeClass('left').addClass('right');
        } else {
            $(this).removeClass('right').addClass('active');
        }
    });

    projectName.text(project[currentProject]);
    projectNamePagination.text(project[currentProject]);
}

function prevProject() {
    if(currentProject > 0) {
        currentProject--;
    } else {
        currentProject = project.length - 1;
    }

    projectItems.each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('right');
        } else if ($(this).hasClass('right')) {
            $(this).removeClass('right').addClass('left');
        } else {
            $(this).removeClass('left').addClass('active');
        }
    });

    projectName.text(project[currentProject]);
    projectNamePagination.text(project[currentProject]);
}
