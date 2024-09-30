import React from "react";

const BookCard = ({ title, coverImage, description, onClick }: any) => {
  return (
    <>
      <div
        className="w-[200px] p-2 rounded-md hover:shadow-md cursor-pointer transition transform ease-in duration-300 mb-3 mr-3"
        onClick={onClick}
      >
        <img
          src={coverImage}
          alt="cover image"
          className="w-full rounded-md"
          style={imageStyle}
        />
        <div className="mt-1">
          <h3 className="text-xl text-slate-800 mb-1">{title}</h3>
          <p className="text-sm text-slate-700">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;

const cardStyle = {
  transition: "transform 0.3s ease",
  marginBottom: "1.5rem",
  marginRight: "1.6rem",
};

const imageStyle = {
  aspectRatio: 1,
};
