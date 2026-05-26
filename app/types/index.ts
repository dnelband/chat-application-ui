export type SearchParams = 'after' | 'before' | 'limit'
export interface Message{
    _id: string;
    message: string;
    author: string;
    createdAt: string;
}