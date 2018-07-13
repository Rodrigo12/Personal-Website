function createProgrammableSkills(parent, className, data){
  var row = '<div class="row '+className+'"></div>';
  $(parent).append(row);

  for (var index = 0; index < data.data.length; index++) {
    var box = '<div id="progSkillBox'+index+'" class="progSkillBox"></div>';
    $(parent + ' .row').append(box);

    createProgressiveBar(parent, index, data.data[index], data.circles);
  }
}

function createProgressiveBar(parent, index, data, circlesProps){
  var bar = new ProgressBar.Circle('#progSkillBox'+index, {
    strokeWidth: parseInt(circlesProps.width),
    easing: 'easeInOut',
    duration: parseInt(circlesProps.duration),
    color: circlesProps.color,
    trailColor: circlesProps.bkgColor,
    trailWidth: parseInt(circlesProps.trailWidth),
    svgStyle: null
  });
  bar.setText(data.name);
  bar.animate(data.value);  // Number from 0.0 to 1.0
}
