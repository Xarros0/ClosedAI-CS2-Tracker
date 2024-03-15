import React from "react";
import NewsPreview from "../utils/interfaces/News";

const NewsPreviewComponent: React.FC<NewsPreview> = (args) => {

  const newsPreview: React.CSSProperties = {
    boxSizing: "border-box",
    width: "94%",
    background: "#D9D9D9",
    border: "1px solid #000000",
    marginLeft: "50px",
    marginRight: "50px",
    overflow: "hidden",
    top: "180px",
    display: "flex",
    flexDirection: "column",
  };

  const newsArticle: React.CSSProperties = {
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center", // Center items vertically
    padding: "10px", // Add padding for spacing
    width: "100%", // Set a fixed width for each article
  };

  const newsImageContainer: React.CSSProperties = {
    width: "200px", // Fixed width for the image container
    height: "100%", // Set height to 100% to fill the container vertically
    marginRight: "20px",
  };

  const newsImage: React.CSSProperties = {
    float: "left",
    backgroundColor: "#939393",
    width: "150px", // Ensure the image fills the container
    height: "150px", // Ensure the image fills the container
  };

  const newsTitle: React.CSSProperties = {
    backgroundColor: "#D9D9D9",
    flexGrow: 1, // Allow the title to grow and fill remaining space
    fontSize: "24px", // Adjust font size as needed
    width: "100%", // Ensure the title fills the remaining space
    textDecoration: "none", // Remove underline from the title
    color: "black", // Set the color of the title
  };

  return (
    <>
      <div style={newsPreview}>
        <div style={newsArticle}>
          <div style={newsImageContainer}>
            <img src="/asiarmr.webp" alt="News Image" style={newsImage} />
          </div>
          <a style={newsTitle} href="/news">
            <div style={newsTitle}>{args.title}</div>
          </a>
        </div>
        </div>
    </>
  );
};

export default NewsPreviewComponent;
