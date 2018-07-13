function createAboutMePage(data){
  var parentDiv = $('#mainCarousel .carousel-inner .carousel-item .d-block')[0];

  var container   = '<div id="aboutme"><div class="container">';
  var title       = '<div class="row"><h3 class="title">'+data.title+'</h3></div>';
  var img         = '<div class="col-sm-3"><img class="image" src="'+data.image+'" /></div>';
  var description = '<div class="col-sm-9"><p class="description">'+data.description+'</p></div>';
  container       += title + '<div class="row">' + img + description +'</div></div></div>';

  parentDiv.append($(container)[0]);
  createCollapse('#aboutme .container', 'collapseAboutMe', '<i class="fas fa-long-arrow-alt-down"></i> More', function(){
    createNavbar('#collapseAboutMe', 'navbarAboutMe', ['Timeline', 'Program', 'Tongue']);
    createHorizontalTimeline('#collapseAboutMe', 'horizontalTimeline', data.timelineEvents);
  });

}
