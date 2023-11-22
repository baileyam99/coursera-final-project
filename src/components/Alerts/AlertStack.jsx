import React from "react";
import './AlertStack.scss';
import { Alert } from "./Alert";

export function AlertStack(props) {
    const { alerts, close } = props;
    const closeHandler = (id) => {
        close(id);
    }
    return (
        <>
            <div id="alert-stack" className="alert-stack-div">
                {alerts.map((alert) => 
                    <Alert 
                        key={alert.id}
                        id={alert.id} 
                        type={alert.type} 
                        message={alert.message} 
                        close={closeHandler} 
                    />
                )}
            </div>
        </>
    )
}