const getPosterUrl = (poster_path: string) => {
  return `https://image.tmdb.org/t/p/original/${poster_path}`;
};

export default getPosterUrl;
