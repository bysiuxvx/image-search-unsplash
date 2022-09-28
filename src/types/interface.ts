export interface ImageData {
    id: string;
    created_at?: string;
    updated_at?: string;
    promoted_at?: string;
    description?: string;
    alt_description?: string;
    urls: { small: string; small_s3: string; thumb: string; raw: string; regular: string; full: string };
    tags: { title: string };
    user: {username: string, name: string};
}
