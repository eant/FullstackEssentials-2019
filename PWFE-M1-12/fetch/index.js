fetch("http://www.omdbapi.com/?i=tt3896198&apikey=abe47891&q=star")
  .then(response => response.json())
  .then(json => console.log(json));
