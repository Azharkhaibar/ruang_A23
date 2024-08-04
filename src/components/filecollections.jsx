import React from "react";

class DB extends React.Component {
    render() {
        const Collections = {
            imgUrl1: "Ruanga32e/public/image/phone-call.png"
        };

        return (
            <div>
                <img src={Collections.imgUrl} alt="Phone Call" />
            </div>
        );
    }
}

export default DB;
