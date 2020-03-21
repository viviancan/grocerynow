module.exports = {
  getPlaces: () => {
    return fetch('/api/places')
      .then(response => response.json());
  }
};
