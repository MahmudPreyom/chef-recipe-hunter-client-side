import React from "react";
import error from "../../assets/error.avif"

const Error = () => {
    return (
        <div className="text-center">
           <img src={error} alt="" />
        </div>
    );
};

export default Error;