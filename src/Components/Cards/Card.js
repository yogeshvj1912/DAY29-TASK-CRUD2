import { LibraryAdd } from "@mui/icons-material";
import React from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import "./Card.css";

const Card = () => {
  const cardData = [
    {
      title: "New Books Added",
      icon: <LibraryAdd color="success" />,
      content: "250 New books added in library",
    },
    {
      title: "Lost Books",
      icon: <DangerousIcon color="error" />,
      content: "20 books are not in library",
    },
    {
      title: "Borrowed Books",
      icon: <PhotoAlbumIcon color="primary" />,
      content: "576 books borrowed",
    },
    {
      title: "Available books",
      icon: <AutoStoriesIcon color="warning" />,
      content: "6875 Books available",
    },
  ];

  return (
    <div>
      <div className=" m-3 my-3">
        <h2 className="mb-4 mx-4">DashBoard</h2>
        <hr />
        <div className="row progress-card mx-3">
          {cardData.map((data, index) => (
            <div key={index} className="col">
              <div className="card shadow">
                <div className="cards-data d-flex">
                  <h5 className="card-title px-3 mt-2">{data.title}</h5>
                  <div className="card-icon mt-2 pr-3">{data.icon}</div>
                </div>
                <div className="d-flex px-2">
                  <p className="ptag">{data.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;