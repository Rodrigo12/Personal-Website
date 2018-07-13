function createMainPage(data){
  var parentDiv = $('#mainCarousel .carousel-inner .carousel-item .d-block')[1];

  var presentationImage = '<div class="row"><img class="image presentationImage hcenter" src="' + data.image + '" /></div>';
  var presentationText  = '<div class="row"><h1 class="name hcenter">' + data.name + '</h1><h5 class="job hcenter">' + data.job + '</h5></div>';
  var presentationLinks = '<div class="row"><div class="socialNetworks"><a href="' + data.linkedin + '" target="blank"><i class="fab fa-linkedin"></i></a><a href="' + data.github + '" target="blank"><i class="fab fa-github"></i></a></div></div>';
  var container         = '<div id="mainPage" class="container">' + presentationImage + presentationText + presentationLinks + '</div>';

  parentDiv.append($(container)[0]);
}
