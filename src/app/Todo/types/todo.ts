export interface Todo {
    name: string;
}

export interface TodoData extends Todo {
    id: number;
    isCompleted: boolean;
}
