import React from "react";
import "./Detail.css";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if(location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const { location } = this.props;
		if(location.state) {
			console.log(location);
			return (
				<div className="detail">
					<img src={location.state.largePoster} alt={location.state.title} title={location.state.title} />
					<div className="movie__data">
						<span className="movie__year">{location.state.year}</span>
						<h3 className="movie__title">
							{location.state.title}
						</h3>
						<ul className="movie__genres">
							{location.state.genres.map((gen, index) => <li key={index} className="genres__genre">{gen}</li>)}
						</ul>
						<div className="movie__summary">
							<p className="ell">{location.state.summary}</p>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;