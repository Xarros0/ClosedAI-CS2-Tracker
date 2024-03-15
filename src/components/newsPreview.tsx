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
    marginBottom: "20px", // Add some space between each news article
  };

  const newsArticle: React.CSSProperties = {
    backgroundColor: "#D9D9D9",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: "flex-start", // Align items to the start of the container
    padding: "20px", // Add more padding for spacing
    gap: "10px", // Add space between elements
  };

  const newsTitle: React.CSSProperties = {
    fontSize: "24px", // Adjust font size as needed
    textDecoration: "none", // Remove underline from the title
    color: "black", // Set the color of the title
    fontWeight: "bold", // Make the title bold
  };

  const newsDetails: React.CSSProperties = {
    fontSize: "16px", // Adjust font size for details
    color: "#333333", // Set the color of the details
  };
  console.log(args);
  return (
    <div style={newsPreview}>
      <div style={newsArticle}>
        <a href={args.link} style={newsTitle}>{args.title}</a>
        <p style={newsDetails}>Date: {args.date}</p>
        <p style={newsDetails}>Country: {args.country.name}</p>
      </div>
    </div>
  );
};

export default NewsPreviewComponent;
