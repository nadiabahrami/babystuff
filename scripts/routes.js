page.base('');
// page('', home);
page('/results', results);
page('/info', video);
page('/about', about);
// page('*', notFound)

page();

// function home(){
//   webpage.pageDisplay('');
// }

function results(){
  webpage.pageDisplay('results');
}

function video(){
  webpage.pageDisplay('video');
}

function about(){
  webpage.pageDisplay('about');
}

function notFound(){
  webpage.pageDisplay('notFound');
}

function notFound() {
  console.log('Page not found. Please re-type your URL. KTHANKS.');
}
