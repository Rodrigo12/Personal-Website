function createCollapse(parent, id, buttonContent, callback){
  var button   = '<a class="collapseButton" data-toggle="collapse" data-target="#'+id+'" value="0">'+buttonContent+'</a>';
  var collapse = '<div class="row">'+button+'</div><div id="'+id+'" class="collapse"></div>';
  $(parent).append(collapse);
  callback();

  $('.collapseButton').on('click', function(){
    if ($(this).attr('value') == "0"){
      $(this).html('&times;');
      $(this).attr('value', '1');
      $('#aboutme').css('padding-top', '50px');
    }else{
      $(this).html('&plus;');
      $(this).attr('value', '0');
      $('#aboutme').css('padding-top', '200px');
    }
  });
}
