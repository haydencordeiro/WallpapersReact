/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./image.css";


const Image = (props) => {
	return (
		<div>
            {props.linksList.map(i=>
			<div className="gallery">
				<a href={i}>
					<img src={i} alt="Cinque Terre" width="600" height="400" />
				</a>
			</div>
            )}
           
		</div>
	);
};
export default Image;
