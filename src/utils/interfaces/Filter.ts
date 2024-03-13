interface Filter {
    title?: string;
    authorName?: string;
    startDate?: string;
    endDate?: string;
    sortOrder?: SortOrder;
    page?: number;
    limit?: number;
}

enum SortOrder {
    ASC = 1,
    DESC = -1,
}

export type { Filter, SortOrder };
