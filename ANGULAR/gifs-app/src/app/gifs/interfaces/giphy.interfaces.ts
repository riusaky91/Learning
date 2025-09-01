// importar las interfaces necesarias para tipar la respuesta de la API de Giphy

export interface GiphyResponse {
    data: GiphyItem[];
    pagination: Pagination;
    meta: Meta;
}

export interface GiphyItem {
    id: string;
    url: string;
    title: string;
    images: Images;
}

export interface Images{
    
    original: Original
}

export interface Original {
    url: string;
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
}

export interface Pagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface Meta {
    status: number;
    msg: string;
    response_id: string;
}
