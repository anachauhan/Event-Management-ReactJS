import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  const filteredEvent = eventList.find(
    (eventDetail) => eventDetail.id === numId
  );

  // 🔍 Zoom image state
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="event-details-container">
      <Navigation />

      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />

        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>

          {/* Month & Location */}
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">
                {filteredEvent.date.year}
              </span>
            </p>

            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span
              className="description-heading-para"
              style={{ whiteSpace: "pre-line" }}
            >
              {filteredEvent.description}
            </span>
          </p>

          {/* EXTRA IMAGES GALLERY */}
          {filteredEvent.extraImages &&
            filteredEvent.extraImages.length > 0 && (
              <div className="event-extra-images">
                <h3>Event Moments</h3>

                <div className="image-gallery">
                  {filteredEvent.extraImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`event-${index}`}
                      className="zoomable-image"
                      onClick={() => setZoomImage(src)}
                    />
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>

      {/* ZOOM POPUP */}
      {zoomImage && (
        <div className="zoom-popup" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="zoomed" className="zoomed-img" />
        </div>
      )}
    </div>
  );
};

export default EventDetails;
