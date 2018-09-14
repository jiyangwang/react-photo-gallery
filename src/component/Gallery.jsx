import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export class Gallery extends Component {
	constructor(props) {
		super(props);
			this.state = {
				imageIndex: 0
			};
	}

	handleSwipeImage(index) {
		const { images } = this.props;
		const { imageIndex } = this.state;
		
		if ((imageIndex + index) >= 0 && (imageIndex + index) < images.length)  {
			this.setState({ imageIndex: imageIndex + index });
		}
	}

	handleClickThumbnail(index) {
		const { imageIndex } = this.state;

		if (imageIndex !== index) {
			this.setState({ imageIndex: index });
		}
	}

	render() {
		const { images } = this.props;
		const { imageIndex } = this.state;

		return (
			<Fragment>
				<div className="caption">{images[imageIndex].caption}</div>
				<div className="image-container">
					<button className="button" onClick={() => this.handleSwipeImage(-1)}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<CSSTransition in classNames="fade" timeout={500}>
						<img
							className="image"
							src={images[imageIndex].url}
							alt={images[imageIndex].caption}
						/>
					</CSSTransition>
					<button className="button" onClick={() => this.handleSwipeImage(1)}>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
				<div className="thumbnail-container">
					{
						images.map((image, index) => (
							<img
								key={index}
								className="thumbnail"
								src={image.url}
								alt={image.caption}
								onClick={() => this.handleClickThumbnail(index)}
							/>
						))
					}
				</div>
			</Fragment>
		);
	}
}

Gallery.propTypes = {
	images: PropTypes.array
}

Gallery.defaultProps = {
	images: []
}

export default Gallery;