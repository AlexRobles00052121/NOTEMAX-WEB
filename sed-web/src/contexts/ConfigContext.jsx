/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

const ConfigContext = React.createContext();

export const ConfigProvider = (props) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    const state = {
        loading,
        startLoading,
        stopLoading,
    }

    return (
        <ConfigContext.Provider value={state} {...props} />
    )
}

export const useConfigContext = () => {
    const context = React.useContext(ConfigContext);

    if (!context)
        throw new Error("useConfig must be used within a ConfigProvider");
    
    return context;
}