function createSlick(data, parent, id, slidesToShow){
  var slides = createSlickSlides(data);
  var slickDiv = "<div id='"+id+"' class='slickSlider'>"+slides+"</div>";
  $(parent).append(slickDiv);

  $('#'+id).slick({
    centerMode: true,
    dots: true,
    centerPadding: '7px',
    slidesToShow: slidesToShow,
    slidesToScroll:2,
    autoplay:true
  });
}

function createSlickSlides(data){
  var slides = '';
  for (var index = 0, currentTitle="", currentImage="", currentDescription="", buttons="", siteLink="", githubLink=""; index < data.length; index++) {
    siteLink           = (data[index].hasOwnProperty('link')) ? '<a class="slideButton buttonLink" target="blank" href="'+data[index].link+'"><i class="fa fa-link"></i></a>' : '';
    githubLink         = (data[index].hasOwnProperty('githubLink')) ? '<a class="slideButton buttonGithub" target="blank" href="'+data[index].githubLink+'"><i class="fab fa-github"></i></a>' : '';
    currentImage       = (data[index].hasOwnProperty('image')) ? data[index].image : 'imgs/code.png';

    currentImage       = '<div class="row"><img src="'+currentImage+'" /></div>';
    currentTitle       = '<div class="row"><h5 class="title">'+data[index].title+'</h5></div>';
    currentDescription = '<div class="row"><p class="tags" value="'+data[index].tags+'">'+shortString(data[index].tags,20)+'</p></div>';
    buttons            = '<div class="row"><a class="slideButton buttonMore" data-toggle="modal" data-target="#projectsModal"><i class="fa fa-plus"></i></a>'+githubLink+siteLink+'</div>'
    slides            += '<div class="slickSlide"><div class="container" description="'+data[index].description+'">'+ currentImage + currentTitle + currentDescription + buttons + '</div></div>';
  }
  return slides;
}
