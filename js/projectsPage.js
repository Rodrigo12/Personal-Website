function createProjectsPage(data){
  var parentDiv = $('#mainCarousel .carousel-inner .carousel-item .d-block')[2];

  $(parentDiv).append("<div id='projects'></div>");
  createSlick(data, '#projects', 'projectsSlick', 4);
  createModal('body', 'projectsModal');
  createInputDataList('#projectsSlick', 'projectsSearch', data);
}

function shortString(string, maxChar){
  if (string.length > maxChar)
    return string.substring(0, maxChar)+'...';
  return string;
}
