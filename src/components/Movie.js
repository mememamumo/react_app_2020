import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, genres, title, summary, poster, largePoster}) {
	return (
		<div className="movie">
			<Link
				to={{
					pathname: `/movie/${id}`,
					state: {
						year,
						title,
						summary,
						poster,
						genres,
						largePoster
					}
				}}
			>
				<img src={poster} alt={title} title={title} />
				<div className="movie__data">
					<h3 className="movie__title">
						{title}
						<span className="movie__year">{year}</span>
					</h3>
					<ul className="movie__genres">
						{genres.map((gen, index) => <li key={index} className="genres__genre">{gen}</li>)}
					</ul>
					<div className="movie__summary">
						<p className="ell">{summary.slice(0, 100)}...</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	largePoster: PropTypes.string.isRequired
}

export default Movie;