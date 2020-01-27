import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';

import { fetchMovies } from '../../actions/movies';

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }


    render() {

        return (
            <div>
                <MoviesList movies={this.props.movies}></MoviesList>
                <ScrollUpButton />
            </div>
        )
    }
}
const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};

const mapDispatchToProps = {
    fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
