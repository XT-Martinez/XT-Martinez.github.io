import React, { Component } from "react";
import ClassNames from "classnames";

class SkillCard extends Component {
	render() {
		let scale = this.props.scale;
		return (
			<div className="star-scale-group">
				<small>
					{[2, 4, 6, 8, 10].map(n => {
						let starClassName = ClassNames("fa", "star-scale", {
							"fa-star-half-o": scale === n - 1,
							"fa-star": scale >= n,
							"fa-star-o": scale < n
						});
						return <i key={n} className={starClassName}></i>;
					})}
				</small>
			</div>
		);
	}
}

export default SkillCard;
