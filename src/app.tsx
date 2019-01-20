import {React, ReactDOM} from "./xext";

export default (props: any) => {
    const {app} = props;
    return <div className="red box">{app.name}</div>
};