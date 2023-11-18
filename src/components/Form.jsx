import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter title" value="Javascript"/>
                </form>
            </div>
        );
    }
}