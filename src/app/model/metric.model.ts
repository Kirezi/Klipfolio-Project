export interface Metric {
    title: string;
    data?: Data[];
}

export interface Data {
    count?: number;
    updatedAt?: any;
}
