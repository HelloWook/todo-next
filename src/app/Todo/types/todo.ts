export interface Todo {
    name: string;
}

export interface TodoData extends Todo {
    id: number;
    isCompleted: boolean;
}

export interface EditTodoData {
    name?: string;
    memo?: string;
    imageUrl?: string;
    isCompleted: boolean;
}
