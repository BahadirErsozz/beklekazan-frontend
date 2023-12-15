import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { setclickedAddress } from "../../redux/clickedAddress";
import { incrementupdateAddresses } from "../../redux/updateAddresses";

import close from "./Assets/close.png";

const Address = ({}) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [addressName, setAddressName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleNeighborhoodChange = (event) => {
    setNeighborhood(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleBuildingNumberChange = (event) => {
    setBuildingNumber(event.target.value);
  };

  const handleFlatNumberChange = (event) => {
    setFlatNumber(event.target.value);
  };

  const handleAddressDetailsChange = (event) => {
    setAddressDetails(event.target.value);
  };

  const handleAddressNameChange = (event) => {
    setAddressName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const showToastSuccessMessage = (mesage, poisition) => {
    toast.success(mesage, {
      position: poisition,
    });
  };

  const showToastErrorMessage = (mesage, poisition) => {
    toast.error(mesage, {
      position: poisition,
    });
  };

  const handleCreateAddress = () => {
    const address_details = {
      city: city,
      state: state,
      neighborhood: neighborhood,
      street: street,
      building_number: buildingNumber,
      flat_number: flatNumber,
      address_details: addressDetails,
      address_name: addressName,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };
    createAddress(address_details);
  };

  const handleQuitAddress = () => {
    dispatch(setclickedAddress({ clickedAddress: false }));
  };

  const createAddress = async (address_details) => {
    return await fetch("http://localhost:3000/addresses", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address_details: address_details,
        created_at: Date.now(),
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(response.status);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(incrementupdateAddresses({}));
        dispatch(setclickedAddress({ clickedAddress: false }));
        showToastSuccessMessage(
          "Adres başarıyla eklendi!",
          toast.POSITION.TOP_CENTER
        );
      })
      .catch((err) => {
        showToastErrorMessage(
          "Adres eklerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          toast.POSITION.TOP_CENTER
        );
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: "15%",
          right: "25%",
          zIndex: "9999",
          height: "auto",
          maxHeight: "80%",
          width: "50%",
          backgroundColor: "white",
          borderRadius: "0.25em",
          boxShadow: "0 0.1rem 0.5rem rgba(0,0,0,.15)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px 0px 0px 32px", fontSize: "20px" }}>
            {" "}
            Adres Ekle
          </div>
          <div
            onClick={handleQuitAddress}
            style={{
              marginRight: "10px",
              marginTop: "10px",
              marginLeft: "auto",
              borderStyle: "",
              borderRadius: "50%",
              minHeight: "30px",
              aspectRatio: "1 / 1",
              backgroundSize: "100%",
              backgroundImage: `url(${close})`,
            }}
          ></div>
        </div>
        <div style={{ overflowY: "scroll" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2em",
              paddingBottom: "0px",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "50%" }}>
                <label> Şehir</label>
                <input
                  onChange={handleCityChange}
                  value={city}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label> İlçe</label>
                <input
                  onChange={handleStateChange}
                  value={state}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "50%" }}>
                <label> Mahalle</label>
                <input
                  onChange={handleNeighborhoodChange}
                  value={neighborhood}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label> Cadde/Sokak</label>
                <input
                  onChange={handleStreetChange}
                  value={street}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "100%" }}>
                <label> Bina No</label>
                <input
                  onChange={handleBuildingNumberChange}
                  value={buildingNumber}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label> Daire No</label>
                <input
                  onChange={handleFlatNumberChange}
                  value={flatNumber}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
            </div>
            <label> Adres Tarifi</label>
            <input
              onChange={handleAddressDetailsChange}
              value={addressDetails}
              style={{
                marginBottom: "32px",
                width: "calc(100% - 70px)",
                padding: "16px 40px 16px 30px",
                left: "15%",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                border: "1px solid #d2d8d8",
                marginTop: "3px",
              }}
            />
            <label> Adres Başlığı</label>
            <input
              onChange={handleAddressNameChange}
              value={addressName}
              style={{
                marginBottom: "32px",
                width: "calc(100% - 70px)",
                padding: "16px 40px 16px 30px",
                left: "15%",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                border: "1px solid #d2d8d8",
                marginTop: "3px",
              }}
            />
            <label
              style={{
                borderBottom: "1px solid #d2d8d8",
                marginBottom: "10px",
                paddingBottom: "3px",
              }}
            >
              {" "}
              İletişim bilgileri
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "100%" }}>
                <label> Adınız</label>
                <input
                  onChange={handleFirstNameChange}
                  value={firstName}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label> Soyadınız</label>
                <input
                  onChange={handleLastNameChange}
                  value={lastName}
                  style={{
                    width: "calc(90% - 32px)",
                    marginBottom: "32px",
                    padding: "16px 0px 16px 30px",
                    left: "15%",
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    border: "1px solid #d2d8d8",
                    marginTop: "3px",
                  }}
                />
              </div>
            </div>
            <label> Cep Telefonu</label>
            <input
              onChange={handlePhoneNumberChange}
              value={phoneNumber}
              style={{
                width: "calc(100% - 70px)",
                padding: "16px 40px 16px 30px",
                left: "15%",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                border: "1px solid #d2d8d8",
                marginTop: "3px",
              }}
            />
          </div>
          <div
            onClick={handleCreateAddress}
            style={{
              width: "70%",
              borderStyle: "solid",
              marginLeft: "15%",
              marginRight: "15%",
              textAlign: "center",
              padding: "10px 0px",
              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "#034C8E",
              color: "white",
            }}
          >
            {" "}
            Adres Ekle
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
