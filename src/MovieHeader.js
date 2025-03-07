import React, { useState } from 'react';
import './MovieHeader.css';

const MovieHeader = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDuration, setMovieDuration] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieRating, setMovieRating] = useState(''); // State for movie rating
  const [isRatingVisible, setIsRatingVisible] = useState(null); // State to toggle rating visibility per movie

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission
    const newMovie = { 
      movieName, 
      movieYear, 
      movieDuration, 
      movieImage,
      movieRating // Include rating in the new movie object
    };

    // Add new movie to the cart
    handleAddToCart(newMovie);

    // Reset form fields after submission
    setMovieName('');
    setMovieYear('');
    setMovieDuration('');
    setMovieImage('');
    setMovieRating(''); // Reset the rating field
    setIsFormVisible(false); // Hide the form after submission
  };

  // Handle rating selection
  const handleRatingChange = (index, rating) => {
    const updatedCart = [...cartItems];
    updatedCart[index].movieRating = rating; // Update the rating of the selected movie
    setCartItems(updatedCart);
    setIsRatingVisible(null); // Hide the rating options after selection
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
      <div className='rate'>
        {/* <h4>Movies in Cart:</h4> */}
        <ul>
        <h4>Movies in Cart:</h4>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                {item.movieName} ({item.movieYear}) - {item.movieDuration}
                <br />
                {/* Check if the movieImage is valid */}
                {item.movieImage ? (
                  <img
                    src={item.movieImage}
                    alt={item.movieName}
                    style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                  />
                ) : (
                  <p>No image available</p>
                )}
                <br />

                {/* Display Rate Button */}
                <button
                  onClick={() => setIsRatingVisible(index)} // Toggle rating options visibility
                >
                  Rate this Movie
                </button>

                {/* Show Rating Options when "Rate this Movie" button is clicked */}
                {isRatingVisible === index && (
                  <div>
                    <h4>Select Rating:</h4>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingChange(index, star)}
                        style={{
                          fontSize: '20px',
                          margin: '5px',
                          backgroundColor: 'lightgray',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '5px',
                        }}
                      >
                        {star} Star
                      </button>
                    ))}
                  </div>
                )}

                {/* Display the current rating */}
                {item.movieRating && (
                  <div>
                    <strong>Rating:</strong> {item.movieRating} Star
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieHeader;
