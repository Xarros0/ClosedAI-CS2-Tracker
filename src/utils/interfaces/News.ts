import Country from "./Country";

interface NewsPreview {
    link: string;
    title: string;
    comments: number;
    date: number;
    country: Country;
}

export default NewsPreview;
