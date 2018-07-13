// <div class="input-group mb-3">

// <select class="custom-select" >
// <option selected>Choose...</option>
// <option value="1">One</option>
// <option value="2">Two</option>
// <option value="3">Three</option>
// </select>
// </div>

function createSelectElement(parent, id, data){
  var select  = '<div class="input-group mb-3"><select class="custom-select" id="'+id+'">';
  var options = '<option value="1">All</option>';
  var values  = ['All'];
  for (var index = 0, count = 2; index < data.length; index++) {
    if (data[index].type != 'undefined' && data[index].type != null && data[index].type != '' && !repeatedValue(values, data[index].type)){
      options += '<option value="'+count+'">'+data[index].type+'</option>';
      count++;
      values.push(data[index].type);
    }
  }
  select += options + '<select class="custom-select"></div>';
  $(parent).append(select);
}

function repeatedValue(values, value){
  for (var index = 0; index < values.length; index++) {
    if (values[index] == value)
      return true;
  }
  return false;
}
