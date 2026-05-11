type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  description?: string;
};

type User = {
    id: string
    userName: string
    displayName: string
}

type PaginatedBooks = {
    items: Book[];
    nextCursor: string | null;
    previousCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}