function createHorizontalTimeline(parent, id, timeEvents){
  var timelineItems = "";
  var timeline      = '<div class="timelineHorizontal"><ul class="timeline timeline-horizontal">'

  for (var index = 0, icon = "", heading = "", content = "", timeInterval = "", image = ""; index < timeEvents.length; index++) {
    icon          = '<div class="timeline-badge primary" value="'+timeEvents[index].type+'"><span class="iconType fa '+timeEvents[index].icon+'"></span><button type="button" class="close clearFilters" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    content       = '<h4 class="title">'+timeEvents[index].company+'</h4><p class="job">'+timeEvents[index].title+'</p>';
    timeInterval  = '<p class="timeInterval">'+timeEvents[index].initDate+' - '+timeEvents[index].finalDate+'</p>';
    timelocation  = '<p class="timeLocation">'+timeEvents[index].location+'</p>';
    image         = '<div class="imgContainer"><img class="image" src="'+timeEvents[index].image+'"></div>'
    timelineItems += '<li class="timeline-item">'+icon+'<div class="timeline-panel"><div class="timeline-heading">'+content+timeInterval+timelocation+image+'</div></div></li>';
  }

  timeline += timelineItems + '</ul></div>';
  $(parent).append($(timeline)[0]);

  $('.timeline-badge').on('click', function(e){
    var elemClass = ($(e.target).attr('class') != null) ? $(e.target).attr('class') : "";
    if(elemClass.includes('iconType') || elemClass.includes('timeline-badge'))
      filterTimelineEvents($(this));
  });

  $('.clearFilters').on('click', function(){
    clearTimelineEvents();
  });
}

function filterTimelineEvents(element){
  var elementParent  = $(element).parent();
  var eventType      = $(element).attr('value');
  var timelineEvents = $('.timeline-horizontal').find('li');

  for (var index = 0, currentBadge = "", li = "", clearFilters = ""; index < timelineEvents.length; index++) {
    currentBadge = $(timelineEvents[index]).find('.timeline-badge');
    if ($(currentBadge).attr('value') != eventType && $(currentBadge).attr('value') != 'undefined'){
      li = $(currentBadge).closest('li');
      $(li).css('display', 'none');
    }else {
      clearFilters = $(currentBadge).find('.clearFilters');
      $(clearFilters).css('display', 'inline-block');
    }
  }
}

function clearTimelineEvents(element){
  var timelineEvents = $('.timeline-horizontal').find('li');
  for (var index = 0, li = "", closeFilter = ""; index < timelineEvents.length; index++) {
    $(timelineEvents[index]).css('display', 'table-cell');
    $('.clearFilters').css('display', 'none');
  }
}
