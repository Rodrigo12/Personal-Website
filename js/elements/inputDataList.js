function createInputDataList(parent, id, data){
  var input    = '<div class="form-group" id="'+id+'"><i class="fa fa-search searchButton"></i><input list="'+id+'DataList" placeholder="Search Project" name="projects" class="form-control input-sm col-sm-5">';
  var datalist = '<datalist id="'+id+'DataList">';

  for (var index = 0; index < data.length; index++) {
    datalist += '<option value="'+data[index].title+'"><img src="'+data[index].image+'" /></option>';
  }

  input += datalist + '</datalist></div>' ;
  $(parent).append(input + datalist);

  $('#'+id).on('input', function(){
    searchForProject(id);
  });
}

function searchForProject(id){
  var titles     = $("#projectsSlick").find('.title');
  var searchText = $($('#'+id).find('input')).val();

  for (var index = 0, slide; index < titles.length; index++) {
    slide  = $(titles[index]).closest('.slickSlide');
    if (($(titles[index]).text().toLowerCase()).indexOf(searchText.toLowerCase()) == -1) {
      $(slide).css('opacity', '0.3');
    }else {
      $(slide).css('opacity', '1');
      $('#projectsSlick').slick('slickGoTo', $('.slickSlide').index(slide));
    }
  }

}
