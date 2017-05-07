const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

let tr = document.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0]
greenify(tr);