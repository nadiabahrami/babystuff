page.base('/');
page('', home);
page('results', results);
page('info', info);
page('about', about);
page('terms', terms);
// page('*', notFound)

page();

function home(){
  webpage.pageDisplay('');
}

function results(){
  webpage.pageDisplay('results');
};

function terms(){
  webpage.pageDisplay('terms');
};

function info(){
  webpage.pageDisplay('info');
};

function about(){
  webpage.pageDisplay('about');
};

function notFound(){
  webpage.pageDisplay('notFound');
};

function notFound() {
  console.log('Page not found. Please re-type your URL. KTHANKS.');
}
