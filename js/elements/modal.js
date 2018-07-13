function createModal(parent, id){
  var modal = '<div class="modal fade" id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="'+id+'Title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body">Loading data</div></div></div></div>';

  $(parent).append(modal);

  $('.buttonMore').on('click', function (e) {
    createModalBody(id, $(this));
  })
}

function createModalBody(modalId, element){
  var container   = element.closest('.container');
  var description = "<p class='description'>"+$(container).attr('description')+"</p>";
  var img         = "<img class='image' src='"+$($(container).find('img').first()).attr('src')+"' />";
  var title       = "<h4 class='title'>"+$($(container).find('.title')).text()+"</h4>";
  var tags        = "<p class='tags'>"+$($(container).find('.tags')).attr('value')+"</p>";
  var webLink     = $($(container).find('.buttonLink'));
  var githubLink  = $($(container).find('.buttonGithub'));

  var buttons = '<div class="row">';
  if(githubLink.length > 0)
    buttons += '<a class="slideButton buttonGithub" target="blank" href="'+$(githubLink).attr('href')+'"><i class="fab fa-github"></i> Github</a>';

  if (webLink.length > 0)
    buttons += '<a class="slideButton buttonLink" target="blank" href="'+$(webLink).attr('href')+'"><i class="fa fa-link"></i> More</a>';
  buttons += '</div>';

  var modalBody = $('#' + modalId).find('.modal-body');
  var content   = '<div class="container modalBodyContainer"><div class="row"><div class="col-sm-4">'+img+tags+'</div><div class="col-sm-8">'+title+description+buttons+'</div></div></div>';
  $(modalBody).html(content);
}
