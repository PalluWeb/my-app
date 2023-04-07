import { convertEtherToWei } from "../utils/currencyMethods";
import { getOwner, setCostNFT, setMaxSupplyNFT, setUserLimit, setRestriction} from "../web3/mintingApp";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";





export const Admin = () => {
  const wallatAdd = localStorage.getItem("walletAddress");
  const [cost, setCost] = useState("");
  const [limit, setLimit] = useState("");
  const [supply, setSupply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChangeCost = e => {
    setCost(e.target.value);
  };

  const handleInputChangeSupply = e => {
    setSupply(e.target.value);
  };

  const handleInputChangeLimit = e => {
    setLimit(e.target.value);
  };

  const handleSetCost = async () => {
    //
    try {
        const owner = await getOwner();
        if (wallatAdd == owner.toLowerCase()) {
          setLoading(true);
        const val = await convertEtherToWei(cost);
        await setCostNFT(wallatAdd, val);
        setCost("");
        toast.success(`the cost of nft is to ${cost}`);
        setLoading(false);
      } else {
        toast.error("you are not owner");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error);
      setLoading(false);
      setCost("");
    }
  };

  const handleSetLimit = async () => {
    try {
        const owner = await getOwner();
        if (wallatAdd == owner.toLowerCase()) {
          setLoading(true);
        await setUserLimit(wallatAdd, parseInt(limit));
        toast.success(`user limit is set to ${limit}`);
        setLimit("")
        setLoading(false);
      } else {
        toast.error("you are not owner");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error);
      setLimit("")
      setLoading(false);
    }
  };

  const handleSetSupply = async () => {
    // debugger; // eslint-disable-line no-debugger
    try {
        const owner = await getOwner();
        if (wallatAdd == owner.toLowerCase()) {
          setLoading(true)
          await setMaxSupplyNFT(wallatAdd, supply);
          toast.success(`Maximum supply of NFT's is set to ${setSupply}`)
          setSupply()
          setLoading(false)
        } else {
          toast.error("you are not owner");
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        toast.error(error);
        console.log(error)
        setSupply("")
      }
   
  };


  const setRestrictionHanddle = async () => {
    try {
        let rest = await getOwner()
        if (wallatAdd == rest.toLowerCase()) {
          setLoading(true)
          await setRestriction(wallatAdd)
          toast.success("transaction successfull")
          setLoading(false)
        } else {
          toast.error("you are not a owner")
          setLoading(false)
        }
        
    } catch (error) {
        toast.error(error)
        setLoading(false)
        
    }
  }

  return (
    <>
      <h1>Dashborad</h1>
      <InputGroup className="mb-5 w-50">
        <Form.Control
          placeholder="Enter user limit"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={limit}
          onChange={handleInputChangeLimit}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSetLimit}>
          Set User Limit
        </Button>
      </InputGroup>
      <InputGroup className="mb-5 w-50">
        <Form.Control
          placeholder="Enter a cost"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={cost}
          onChange={handleInputChangeCost}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSetCost}>
          Set cost
        </Button>
      </InputGroup>
      {loading ? (
          <div className="loader">
            <Spinner animation="grow" variant="danger" />
          </div>
        ) : (
          ""
        )}

      <InputGroup className="mb-5 w-50">
     
        <Form.Control
          placeholder="Enter Maximum Supply"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={supply}
          onChange={handleInputChangeSupply}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSetSupply}>
          Set Maximum Supply
        </Button>
      </InputGroup>
      <Button variant="dark" className='connect_btn' onClick={setRestrictionHanddle} >Restrict </Button>{' '}

    </>
  );
};
