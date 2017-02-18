if(window.location.hash) {
  var tag = window.location.hash.split('#')[1];
  filter(tag);
}

function filter(tag) {
  setActiveTag(tag);
  showBlogContainer(tag);
  showResourceContainer(tag);
}

function filter2(tag) {
  setActiveTag(tag);
  showResourceContainer(tag);
}


function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item tag');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item tag active');
  }
}

function showBlogContainer(tag) {

  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}

function showResourceContainer(tag) {

  // loop through all lists and hide them
  var lists = document.getElementsByClassName('resource-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'resource-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container2');
  if(list) {
    list.setAttribute('class', 'resource-list-container');
  }
}