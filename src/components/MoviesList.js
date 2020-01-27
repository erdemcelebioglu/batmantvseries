import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { BounceLoader } from 'react-spinners';


const MoviesList = ({ movies }) => {

    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const moviesList = (
        <div>
            <BounceLoader
                size={150}
                color={"#ffff00"}
                loading={movies.fetching}
            />
            {
                movies.error ? <h3>Error retrieving data!</h3>
                    :
                    <Grid stackable columns={3}>
                        {
                            movies.movies.map(movie => <MovieCard key={movie.show.id} movie={movie} />)
                        }
                    </Grid>
            }
        </div>
    );

    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
};

MoviesList.propTypes = {
    movies: propTypes.shape({
        movies: propTypes.array.isRequired,
    }).isRequired
};

export default MoviesList;