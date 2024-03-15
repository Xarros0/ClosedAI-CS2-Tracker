import SortOrder from "./SortOrder";

interface Filter {
    title?: string;
    authorName?: string;
    startDate?: string;
    endDate?: string;
    sortOrder?: SortOrder;
    page?: number;
    limit?: number;
}

export type { Filter };
