import Announcement from "./Announcement";
import { Carousel } from "primereact/carousel";

const Announcements = ({ announcements }) => {
  return (
    <>
      <div style={{ height: "100%" }}>
        <Carousel
          value={announcements}
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          circular
          itemTemplate={Announcement}
        />
      </div>
    </>
  );
};

export default Announcements;
