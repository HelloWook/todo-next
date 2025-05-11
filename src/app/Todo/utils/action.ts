'use server';
const url = process.env.NEXT_PUBLIC_API_URL;
const itemUrl = url + '/items';
import { revalidatePath } from 'next/cache';
import { Todo, EditTodoData } from './../types/todo';

// 투두 데이터불러오기
const getTodo = async () => {
    try {
        const response = await fetch(itemUrl);

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// 개별 투두 데이터불러오기
const getDetailTodo = async (id: string) => {
    try {
        const response = await fetch(itemUrl + `/${id}`);

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// 투두 작성
const addTodo = async (todo: Todo) => {
    try {
        const response = await fetch(itemUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// 투두 수정
const editTodo = async (todo: EditTodoData, itemId: number) => {
    try {
        const response = await fetch(itemUrl + `/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// 투두 삭제
const deleteTodo = async (itemId: number) => {
    try {
        const response = await fetch(itemUrl + `/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { getTodo, addTodo, editTodo, getDetailTodo, deleteTodo };
