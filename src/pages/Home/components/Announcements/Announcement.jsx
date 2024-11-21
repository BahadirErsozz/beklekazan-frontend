const Announcement = (announcement) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "180px",
        margin: "10px",
        border: "1px solid #dcdcdc",
      }}
    >
      <div style={{ fontSize: "2.5em" }}>{announcement.title}</div>
      <div style={{ margin: "5px 20px 0" }}>{announcement.text}</div>
      <div style={{ margin: "auto 0 10px 0" }}>{announcement.date}</div>
    </div>
  );
};

export default Announcement;
