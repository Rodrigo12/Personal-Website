function createAboutMePage(data){
  var parentDiv = $('#mainCarousel .carousel-inner .carousel-item .d-block')[0];

  var container   = '<div id="aboutme"><div class="container">';
  var title       = '<div class="row"><h3 class="title">'+data.title+'</h3></div>';
  var img         = '<div class="col-sm-3"><img class="image" src="'+data.image+'" /></div>';
  var description = '<div class="col-sm-9"><p class="description">'+data.description+'</p></div>';
  container       += title + '<div class="row">' + img + description +'</div></div></div>';

  parentDiv.append($(container)[0]);

  createCollapse('#aboutme .container', 'collapseAboutMe', '<i class="fas fa-long-arrow-alt-down"></i> More', function(){
    createNavbar('#collapseAboutMe', 'navbarAboutMe', data.tabs);
    createHorizontalTimeline('#collapseAboutMe', 'horizontalTimeline', data.slide1Data);
    createProgrammableSkills('#collapseAboutMe', 'progressiveBar', data.slide2Data);
  });

  $('#navbarAboutMe .nav-item').on('click', function(){
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');

    window['showTab'+parseInt($(this).index())]();
  });
}

function showTab0(){
  $( "#collapseAboutMe .progressiveBar" ).css( "display", "none" );
  $( "#collapseAboutMe .timelineHorizontal" ).fadeIn( 600, "linear" );
//  $( "#collapseAboutMe .timelineHorizontal" ).fadeOut( 600, "linear" );
}

function showTab1(){
  $( "#collapseAboutMe .timelineHorizontal" ).css( "display", "none" );
  $( "#collapseAboutMe .progressiveBar" ).fadeIn( 600, "linear" );
}

function showTab2(){
  $( "#collapseAboutMe .progressiveBar" ).css( "display", "none" );
  $( "#collapseAboutMe .timelineHorizontal" ).css( "display", "none" );
  $( "#collapseAboutMe .timelineHorizontal" ).fadeOut( 600, "linear" );
}
