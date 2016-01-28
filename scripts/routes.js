page.base('/');

page('/results', resultsView.handleDisplay);
page('/info', xxx);


function notFound() {
  console.log('Page not found. Please re-type your URL. KTHANKS.');
}
page();
