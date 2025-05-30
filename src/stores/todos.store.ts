import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

import { db } from '../config/firebase';
import { userStore } from './user.store';

import type { ITodo } from '../interfaces';

type TodosState = {
	todos: ITodo[];
	isLoading: boolean;
	isDisabled: boolean;
};

const initialState: TodosState = {
	todos: [],
	isLoading: false,
	isDisabled: false
};

const { subscribe, update } = writable<TodosState>(initialState);

export const todosStore = {
	subscribe,
	update,

	setLoading(loading: boolean) {
		update((state) => ({ ...state, isLoading: loading }));
	},

	setDisabled(disabled: boolean) {
		update((state) => ({ ...state, isDisabled: disabled }));
	},

	async getTodo(id: string) {
		this.setLoading(true);

		const todoRef = doc(db, 'todos', id);
		const snapshot = await getDoc(todoRef);

		if (!snapshot.exists()) {
			return null;
		}

		this.setLoading(false);
		return snapshot.data() as ITodo;
	},

	async createTodo(todo: Omit<ITodo, 'userId' | 'isComplete' | 'id'>) {
		this.setDisabled(true);

		const id = uuidv4();
		await setDoc(doc(db, 'todos', id), {
			id,
			...todo,
			userId: get(userStore).user?.id,
			isComplete: false
		});

		this.setDisabled(false);
	},

	async deleteTodo(todoId: string) {
		this.setDisabled(true);

		const todoRef = doc(db, 'todos', todoId);
		await deleteDoc(todoRef);

		this.setDisabled(false);
	},

	async updateTodo(todoId: string, todo: Partial<ITodo>) {
		this.setDisabled(true);

		const todoRef = doc(db, 'todos', todoId);
		await updateDoc(todoRef, {
			...todo
		});

		this.setDisabled(false);
	}
};
