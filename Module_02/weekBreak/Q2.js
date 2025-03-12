const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  
  // Step 1: Map to convert watchTime from minutes to hours
  const moviesWithHours = movies.map(movie => ({
    ...movie,
    watchTimeHours: (movie.watchTime / 60).toFixed(2)
  }));
  console.log("Movies with Watch Time in Hours:", moviesWithHours);
  
  // Step 2: Filter movies with a rating above 7.5
  const highlyRatedMovies = moviesWithHours.filter(movie => movie.rating > 7.5);
  console.log("Highly Rated Movies:", highlyRatedMovies);
  
  // Step 3: Reduce to find the total watch time of all highly-rated movies
  const totalWatchTime = highlyRatedMovies.reduce((sum, movie) => 
    sum + parseFloat(movie.watchTimeHours), 0).toFixed(2);
  console.log("Total Watch Time of Highly Rated Movies (in hours):", totalWatchTime);
  
  // Step 4: Map to extract only the title and watch time of the best movies
  const bestMovies = highlyRatedMovies.map(movie => 
    ({ title: movie.title, watchTimeHours: movie.watchTimeHours }));
  console.log("Best Movies with Watch Time:", bestMovies);
  