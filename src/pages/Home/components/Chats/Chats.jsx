import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import config from "../../../../config.json";
import { toast } from "react-toastify";

const Chats = ({}) => {
  const chats = useSelector((state) => state.chats.chats);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const showToastInfoMessage = (mesage, poisition) => {
    toast.info(mesage, {
      position: poisition,
    });
  };

  const showToastErrorMessage = (mesage, poisition) => {
    toast.error(mesage, {
      position: poisition,
    });
  };

  const addChat = async () => {
    if (!isLoggedIn) {
      showToastInfoMessage(
        "Mesaj yollamadan önce giriş yapmalısınız",
        toast.POSITION.TOP_CENTER
      );
    } else {
      return await fetch(config.BACKEND_URL + "chats/chat", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          message: message,
          date_created: Date.now(),
          is_active: 1,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then((data) => {})
        .catch((err) => {
          console.log(err);
          showToastErrorMessage(
            "Mesaj oluşturulurken bir hata oluştu",
            toast.POSITION.TOP_CENTER
          );
        });
    }
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Başlık"
          style={{
            width: "30%",
            border: "solid 1px #dcdcdc",
            borderRadius: "6px",
            marginBottom: "8px",
            fontSize: "1rem",
          }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı Buraya Yazabilirsiniz"
          style={{
            height: "100px",
            border: "solid 1px #dcdcdc",
            borderRadius: "6px",
            marginBottom: "8px",
            resize: "none",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        />
        <div
          onClick={addChat}
          style={{
            width: "auto",
            height: "20px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "rgb(3, 76, 142)",
            color: "white",
            textAlign: "center",
            margin: "0px auto 8px 0px",
            cursor: "pointer",
          }}
        >
          Mesajı Gönder
        </div>
      </div>
      {chats.map((chat) => {
        return <Chat key={chat.id} chat={chat}></Chat>;
      })}
    </>
  );
};

export default Chats;
