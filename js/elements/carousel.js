/*create a new carousel*/
function createCarousel(parentId, id, numberOfSlides, activeSlideIndex, withBottomMarkers, withArrows){
  var leftArrow, rightArrow;
  var carousel = '<div id="'+id+'" class="carousel slide align-middle" data-ride="carousel" data-interval="false"><ol class="carousel-indicators">';
  var slides   = '<div class="carousel-inner">';

  for (var index = 0, active = ""; index < numberOfSlides; index++) {
    active   = (index == activeSlideIndex) ? 'active' : "";
    slides   += '<div value="'+index+'" class="carousel-item '+active+'"><div class="d-block w-100"></div></div>';

    if (withBottomMarkers) { carousel +='<li data-target="#mainCarousel" data-slide-to="'+index+'" class="'+active+'"></li>'; }
  }

  leftArrow  = '<a class="carousel-control-prev" href="#'+id+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>';
  rightArrow = ' <a class="carousel-control-next" href="#'+id+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
  slides    += '</div>';
  carousel  += '</ol>' + slides + leftArrow + rightArrow + '</div>';

  $("#"+parentId).append(carousel);
  $('#'+id).carousel();
}

/*carousel arrow interaction*/
$(document).on('click', '#mainCarousel a[href="#mainCarousel"]', function(){
  var slideIndex = $($('#mainCarousel .carousel-inner .active')[0]).attr('value');

  if (parseInt(slideIndex) == 1)
    $(this).hide();
  else{
    $('#mainCarousel .carousel-control-next').show();
    $('#mainCarousel .carousel-control-prev').show();
  }
});
