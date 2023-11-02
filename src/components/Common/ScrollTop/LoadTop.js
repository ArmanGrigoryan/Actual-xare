import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoadTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
            });              
        }
    }

    render() {
        return <React.Fragment />;
    }
}

export default withRouter(LoadTop); 