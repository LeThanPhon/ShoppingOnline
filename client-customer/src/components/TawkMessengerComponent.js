import React, { Component }  from "react";
import TawkMessenger from "@tawk.to/tawk-messenger-react";

class TaskMessengerReact extends Component {
    render() {
        return (
            <TawkMessengerReact propertyId='property_id' widgetId='widget_id' />
        );
    }
}
export default TawkMessenger;