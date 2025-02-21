import React, { useState } from 'react';
import './MovieHeader.css';

const MovieHeader = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDuration, setMovieDuration] = useState('');
  const [movieImage, setMovieImage] = useState('');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission
    const newMovie = { movieName, movieYear, movieDuration, movieImage };

    // Add new movie to the cart
    handleAddToCart(newMovie);

    // Reset form fields after submission
    setMovieName('');
    setMovieYear('');
    setMovieDuration('');
    setMovieImage('');
    setIsFormVisible(false); // Hide the form after submission
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Movies</div>
          <div className="cart">
            <button onClick={handleFormToggle}>Add Movies +</button>
          </div>
        </div>
      </nav>

      {isFormVisible && (
        <div className="movie-form">
          <h3>Add a New Movie</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="movieName">Movie Name:</label>
              <input
                type="text"
                id="movieName"
                name="movieName"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="movieYear">Year:</label>
              <input
                type="number"
                id="movieYear"
                name="movieYear"
                value={movieYear}
                onChange={(e) => setMovieYear(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="movieDuration">Duration:</label>
              <input
                type="text"
                id="movieDuration"
                name="movieDuration"
                value={movieDuration}
                onChange={(e) => setMovieDuration(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="movieImage">Image URL:</label>
              <input
                type="text"
                id="movieImage"
                name="movieImage"
                value={movieImage}
                onChange={(e) => setMovieImage(e.target.value)}
              />
            </div>
            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}

      {/* Display Cart Items */}
      <div>
        <h4>Movies in Cart:</h4>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.movieName} ({item.movieYear}) - {item.movieDuration}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieHeader;
