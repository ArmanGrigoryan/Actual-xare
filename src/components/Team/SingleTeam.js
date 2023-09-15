import React from "react";

const SingleTeam = (props) => {
    const { teamClass, Image, Title, Designation } = props;
	return(
        <div className={teamClass ? teamClass : 'team-item'}>
            <img 
                src={Image} 
                alt={Title}
            />
            <div className="content-part">
                <h4 className="name">
                    {Title ? Title : 'Jhon Pedrocas'}
                </h4>
                <span className="designation">{Designation ? Designation : 'Professor'}</span>
            </div>
        </div>
	)
}

export default SingleTeam