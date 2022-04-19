import { useCallback, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectorKey, Injected } from "../constants";

const useConnect = () => {
    const { activate } = useWeb3React();

    const connect = useCallback(() => {
        activate(Injected);
        localStorage.setItem(connectorKey, "Metamask");
    }, [activate]);

    useEffect(() => {
        if(localStorage.getItem(connectorKey) === "Metamask") {
            connect();
        }
    }, [connect]);

    return { connect };
};

export { useConnect };