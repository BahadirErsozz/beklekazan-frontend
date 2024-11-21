import { Card } from "primereact/card";

const Chat = ({ chat }) => {
  return (
    <Card
      title={chat.title}
      subTitle={chat.date_created + " - " + chat.username}
    >
      <p className="m-0">{chat.message}</p>
    </Card>
  );
};

export default Chat;
