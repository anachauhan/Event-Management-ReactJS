import React from "react";
import { Link } from "react-router-dom";
import "./NoticeBar.css";
import noticeData from "../../data/notice.json";   // ✅ FIXED PATH

export default function NoticeBar() {
  return (
    <div className="notice-bar">
      <Link to="/events/3" className="notice-text">  {/*To Change The Marquee Clicking Id*/}
        {noticeData.message}
      </Link>
    </div>
  );
}


