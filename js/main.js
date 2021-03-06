function createPages(){
  /*Args: parentId, id, numberOfSlides, activeSlideIndex, withBottomMarkers, withArrows*/
  createCarousel("slides", "mainCarousel", 3, 1, false, true);
  getJson('json/websiteData.json');
}

function getJson(filePath){
  $.getJSON( filePath, function( data ) {
    $('head').append('<link href="'+data.page.icon+'" rel="shortcut icon" type="image/x-icon" />');
    createMainPage(data.main);
    createAboutMePage(data.aboutme);
    createProjectsPage(data.projects);
  });
}
