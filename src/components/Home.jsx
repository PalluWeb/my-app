import { connectWallet, getWalletBalance } from "../web3/walletMothods";
import { MintingPage } from "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const REACT_APP_NETWORK_ID = process.env.REACT_APP_NETWORK_ID;
const REACT_APP_ETHEREUM_NETWORK_ID_IN_HEX = process.env.REACT_APP_ETHEREUM_NETWORK_ID_IN_HEX;

export const Home = () => {
  const [walletConnect, setWalletConnect] = useState(false);
  const [wallBalance, setWallatBalance] = useState("");
  const connectWalletHandle = async () => {
    try {
      const { walletAddress, networkID } = await connectWallet(
        REACT_APP_NETWORK_ID,
        REACT_APP_ETHEREUM_NETWORK_ID_IN_HEX,
      );
      console.log(walletAddress, networkID);
      localStorage.setItem("walletAddress", walletAddress);
      localStorage.setItem("networkID", networkID);
      setWalletConnect(true);
      toast.success("wallet connected");
      const res = await getWalletBalance(walletAddress);
      setWallatBalance(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MintingPage />
      <div>
        <header>
          <Button variant="warning" className="connect_btn " onClick={connectWalletHandle}>
            {walletConnect ? "connected" : "connect"}{" "}
          </Button>{" "}
        </header>
        <div className="balance">{walletConnect ? <h4 className="balance_h4"> JTR Balance:- {wallBalance} </h4> : ""}</div>
      </div>
    </>
  );
};
