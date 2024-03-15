import Country from "./Country";

interface Stream {
    category: string;
    name: string;
    country?: Country
    link?: string;
    viewers?: number;
  }

export default Stream;
