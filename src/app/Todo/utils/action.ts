'use server';
const url = process.env.NEXT_PUBLIC_API_URL;
const itemUrl = url + '/items';
import { Todo } from './../types/todo';

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

export { getTodo, addTodo };
