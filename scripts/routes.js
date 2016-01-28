// page.base('');

page('/results', result);
page('/info', video);
page('/about', about);
// page('*', notFound)

page();

function result(){
  webpage.pageDisplay('result');
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
