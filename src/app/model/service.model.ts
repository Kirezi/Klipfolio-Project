export interface Service {
    id?: string;
    serviceName?: string;
    imageUrl?: string;
}

export interface ModelData {
    title: string;
}

export interface Metric {
    title: string;
    data: data[];
}

export interface data {
    count: number;
    updatedAt: any;
}
