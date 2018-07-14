function createAboutMePage(data){
  var parentDiv = $('#mainCarousel .carousel-inner .carousel-item .d-block')[0];

  var container   = '<div id="aboutme"><div class="container">';
  var title       = '<div class="row"><h3 class="title">'+data.title+'</h3></div>';
  var img         = '<div class="col-sm-3"><img class="image" src="'+data.image+'" /></div>';
  var description = '<div class="col-sm-9"><p class="description">'+data.description+'</p></div>';
  container       += title + '<div class="row">' + img + description +'</div></div></div>';

  parentDiv.append($(container)[0]);

  createCollapse('#aboutme .container', 'collapseAboutMe', '&plus;', function(){
    createNavbar('#collapseAboutMe', 'navbarAboutMe', data.tabs);
    createHorizontalTimeline('#collapseAboutMe', 'horizontalTimeline', data.slide1Data);
    createProgrammableSkills('#collapseAboutMe', 'progressBarCircle', 'Circle', data.slide2Data);
    createProgrammableSkills('#collapseAboutMe', 'progressBarLine', 'Line', data.slide3Data);
  });

  $('#navbarAboutMe .nav-item').on('click', function(){
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');

    window['showTab'+parseInt($(this).index())]();
  });
}

function showTab0(){
  $( "#collapseAboutMe .progressBarCircle" ).css( "display", "none" );
  $( "#collapseAboutMe .progressBarLine" ).css( "display", "none" );
  $( "#collapseAboutMe .timelineHorizontal" ).fadeIn( 600, "linear" );
}

function showTab1(){
  $( "#collapseAboutMe .timelineHorizontal" ).css( "display", "none" );
  $( "#collapseAboutMe .progressBarLine" ).css( "display", "none" );
  $( "#collapseAboutMe .progressBarCircle" ).fadeIn( 600, "linear" );
}

function showTab2(){
  $( "#collapseAboutMe .progressBarCircle" ).css( "display", "none" );
  $( "#collapseAboutMe .timelineHorizontal" ).css( "display", "none" );
  $( "#collapseAboutMe .progressBarLine" ).fadeIn( 600, "linear" );
}
