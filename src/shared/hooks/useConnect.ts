import { useWeb3React } from "@web3-react/core";
import { connectorKey, Injected } from "../constants";

const useConnect = () => {
    const { activate } = useWeb3React();

    const connect = () => {
        activate(Injected);
        localStorage.setItem(connectorKey, "Metamask");
    }

    if(localStorage.getItem(connectorKey) === "Metamask") {
        connect();
    }

    return { connect };
};

export { useConnect };