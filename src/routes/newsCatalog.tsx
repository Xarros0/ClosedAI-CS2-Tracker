import React, { useEffect, useState  } from "react";
import MainNavbar from '../components/mainNavbar';
import NewsPreview from "../utils/interfaces/News";
import { doGraphQLFetch } from "../utils/graphql/fetch";
import { getNews } from "../utils/graphql/queries";
import NewsPreviewComponent from "../components/newsPreview";

const NewsCatalog: React.FC = () => {
    
    const [news, setNews] = useState<NewsPreview[]>([]);

    useEffect(() => {
        const handleNews = async () => {
            const response = await doGraphQLFetch(import.meta.env.VITE_API_URL, getNews, {});
            setNews(response.getNews);
        };
        handleNews();
    }, []);

    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '100%',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    const newsPreviewTitle: React.CSSProperties = {
        boxSizing: "border-box",
        width: "94%",
        background: "#AFAFAF",
        border: "1px solid #000000",
        marginTop: "100px",
        marginLeft: "50px",
        marginRight: "50px",
        overflow: "hidden",
      };

    return (
        <div style={foreground}>
            <MainNavbar onSearch={() => {}} />
            <div style={newsPreviewTitle}>
            <h1 style={{ marginLeft: "20px" }}>News Catalog</h1>
            </div>
            <ul>
            {news.map((e, i)=><NewsPreviewComponent key={i} title={e.title} link={e.link} comments={e.comments} date={e.date} country={e.country} />)}
            </ul>
        </div>
    );
};

export default NewsCatalog;
