//navbarOptions -> array of strings
function createNavbar(parent, id, navbarOptions){
  var navElement = '<nav class="navbar navbar-expand navbar-light" id="'+id+'"><div class="collapse navbar-collapse" id="navbarSupportedContent">';
  var ul         = '<ul class="navbar-nav mr-auto">';
  for (var index = 0, currentLi = "", active = ""; index < navbarOptions.length; index++) {
    active = (index == 0) ? "active" : "";

    currentLi = '<li class="nav-item '+active+'"> <a class="nav-link" href="#">'+navbarOptions[index]+'</a></li>';
    ul += currentLi;
  }
  ul         += '</div>';
  navElement += ul + '</div></nav>';

  $(parent).append(navElement);
}

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//
//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
