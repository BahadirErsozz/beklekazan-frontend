import { useState } from "react";
import { Link } from "react-router-dom";
import whatsapplogo from "../../assets/whatsapp.webp";
import closelogo from "../../../../components/Popups/Assets/close.png";
import closelogo2 from "../../assets/close.png";

const ContactUs = ({}) => {
  const [clickedContactUs, setClickedContactUs] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          border: "2px solid #dcdcdc",
          fontSize: "25px",
          borderRadius: "12px",
          left: "100px",
          zIndex: "200",
          bottom: "50px",
          boxShadow: "0 0.3rem 2rem rgba(0,0,0,.1)",
          color: "black",
          textDecoration: "none",
          backgroundColor: "#034C8E",
          backgroundColor: "white",
        }}
      >
        {clickedContactUs && (
          <div style={{ height: "300px" }}>
            <div
              style={{
                width: "auto",
                backgroundColor: "#034C8E",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
                padding: "10px",
              }}
            >
              <div
                onClick={() => {
                  setClickedContactUs(false);
                }}
                style={{
                  borderStyle: "",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${closelogo2})`,
                  height: "32px",
                  width: "32px",
                  backgroundSize: "100%",
                  marginRight: "4px",
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
              >
                {" "}
              </div>
            </div>

            <div style={{ margin: "0 10px" }}>WhatsApp'tan bize ulaşın</div>
            <div style={{ width: "100%", display: "flex", margin: "5px 10px" }}>
              <div
                style={{
                  borderStyle: "",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${whatsapplogo})`,
                  height: "32px",
                  width: "32px",
                  backgroundSize: "100%",
                  marginRight: "4px",
                }}
              ></div>
              <div>+90 505 655 87 11</div>
            </div>
          </div>
        )}

        <div
          onClick={() => {
            setClickedContactUs(!clickedContactUs);
          }}
          style={{
            width: "auto",
            textAlign: "center",
            cursor: "pointer",
            padding: "10px",
            borderTop: "1px solid rgb(220, 220, 220)",
          }}
        >
          Bizimle iletişime geçin!
        </div>
      </div>
    </>
  );
};

export default ContactUs;
