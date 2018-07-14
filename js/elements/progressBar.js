function createProgrammableSkills(parent, className, type, data){
  var row = '<div class="row '+className+'"></div>';
  $(parent).append(row);

  for (var index = 0, box = "", boxClass = ""; index < data.data.length; index++) {
    boxClass = 'progSkillBox'+type;
    box      = '<div id="'+boxClass+index+'" class="'+boxClass+'"></div>';
    $(parent + ' .' + className).append(box);

    (type == 'Circle') ? createProgressBarCircle(parent, boxClass+index, data.data[index], data.circles) : createProgressBarLine(parent, boxClass+index, data.data[index], data.bar);
  }
}

function createProgressBarCircle(parent, id, data, circlesProps){
  var bar = new ProgressBar.Circle('#'+id, {
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

function createProgressBarLine(parent, id, data, barProps){
  var bar = new ProgressBar.Line('#'+id, {
    strokeWidth: parseInt(barProps.width),
    easing: 'easeInOut',
    duration: parseInt(barProps.duration),
    color: barProps.color,
    trailColor: barProps.bkgColor,
    trailWidth: parseInt(barProps.trailWidth),
    svgStyle: {width: '100%', height: '100%'}
  });
  bar.setText(data.name);
  bar.animate(data.value);  // Number from 0.0 to 1.0
}
