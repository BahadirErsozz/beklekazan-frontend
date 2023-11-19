import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Address from "./Address";

const PopupsContainer = ({}) => {
  const clickedLogin = useSelector((state) => state.clickedLogin.clickedLogin);
  const clickedRegister = useSelector(
    (state) => state.clickedRegister.clickedRegister
  );
  const clickedAddress = useSelector(
    (state) => state.clickedAddress.clickedAddress
  );
  return (
    <>
      {clickedLogin ? <Login /> : ""}
      {clickedRegister ? <Register /> : ""}
      {clickedAddress ? <Address createAddress={createAddress} /> : ""}
    </>
  );
};

export default PopupsContainer;
