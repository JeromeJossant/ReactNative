function api() {
  const getJokes = () => {
    return fetch('https://api.chucknorris.io/jokes/random', {
      type: 'GET',
    }).then(res => res.json());
  };

  return {
    getJokes,
  };
}

export default api();
