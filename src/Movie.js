import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, genres, title, summary, poster}) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">
					{title}
					<span className="movie__year">{year}</span>
				</h3>
				<ul className="movie__genres">
					{genres.map((gen, index) => <li key={index} className="genres__genre">{gen}</li>)}
				</ul>
				{/* <div className="movie__rating">{rating} / 10</div> */}
				<div className="movie__summary">
					<p className="ell">{summary}</p>
				</div>
				<div className="movie__user">
					<h4 className="user__image"> </h4>
					<span className="user__name">Uploaded by User__Name</span>
				</div>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
}

export default Movie;