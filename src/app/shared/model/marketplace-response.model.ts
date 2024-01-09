import { Product } from "./product.model";

export interface MarketplaceResponse{
    results: Product[];
    pages: number;
    records: number;
    current: number;
    filter: string;
}