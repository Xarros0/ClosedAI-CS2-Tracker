interface FilterQuery {
    title?: { $regex: string; $options: 'i' };
    author?: string;
    createdAt?: { $gte?: Date; $lte?: Date };
}

export type { FilterQuery };