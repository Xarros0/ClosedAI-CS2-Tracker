import React from "react";
import Image from "../utils/interfaces/Images";
import Streams from "../utils/interfaces/Streams";

const Streamer: React.FC<Streams> = (args) => {

    const streamCatalogImg: React.CSSProperties = {
        marginRight: '5px',
        width: '30px',
        height: '30px',
    };

    const streamerBox: React.CSSProperties = {
        background: '#A07400',
        color: 'white',
        border: '1px solid #000000',
        width: '200px',
        height: '68px',
        padding: '10px',
        textAlign: 'center',
    };

    const streamerListItem: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
    };

    const streamerFlag: React.CSSProperties = {
        width: '40px',
        height: '30px',
        marginRight: '10px',
    };

  return (
    <>
      <div style={streamerBox}>
        <div style={streamerListItem}>
          <img style={streamCatalogImg} src={Image[(args.category as keyof typeof Image)]} alt={args.category} />
          <img style={streamerFlag} src="flag.png" alt="Country Flag" />
          <span>{args.name}</span>
        </div>
      </div>
    </>
  );
};

export default Streamer;
