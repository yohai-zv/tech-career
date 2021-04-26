const getTvShows = async ()=>{
    
  const response = await fetch('http://api.tvmaze.com/shows?page=2');
  const results = await response.json();
  return results
}


const main = async ()=>{
  const shows = await getTvShows();
  alert(shows);
}



main();