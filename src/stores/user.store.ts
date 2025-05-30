import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { writable } from 'svelte/store';

import { auth, db } from '../config/firebase';

import type { IUser } from '../interfaces';
interface UserStoreState {
	user: IUser | null;
	isLoading: boolean;
}

const initialState: UserStoreState = {
	user: null,
	isLoading: true
};

const { subscribe, set, update } = writable<UserStoreState>(initialState);

export const userStore = {
	subscribe,

	setLoading(loading: boolean) {
		update((state) => ({
			...state,
			isLoading: loading
		}));
	},

	setUser(user: IUser | null) {
		set({
			user,
			isLoading: false
		});
	},

	async getMe(id: string) {
		try {
			this.setLoading(true);

			const docRef = doc(db, 'users', id);
			const snapshot = await getDoc(docRef);

			if (!snapshot.exists()) {
				this.setLoading(false);
				return;
			}

			this.setUser(snapshot.data() as IUser);
		} catch (e) {
			console.trace('Error getting user data:', e);
		} finally {
			this.setLoading(false);
		}
	},

	async login(email: string, password: string) {
		try {
			this.setLoading(true);

			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			const user = await getDoc(doc(db, 'users', userCredential.user.uid));
			this.setUser(user.data() as IUser);
		} catch (e) {
			console.trace('Error logging in:', e);
		} finally {
			this.setLoading(false);
		}
	},

	async register(displayName: string, email: string, password: string) {
		try {
			this.setLoading(true);

			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			await setDoc(doc(db, 'users', userCredential.user.uid), {
				id: userCredential.user.uid,
				displayName,
				email,
				todos: [],
				createdAt: new Date(),
				updatedAt: new Date()
			});
		} catch (e) {
			console.trace('Error registering:', e);
		} finally {
			this.setLoading(false);
		}
	},

	async logout() {
		try {
			console.log('logout');
			this.setLoading(true);
			await signOut(auth);
			this.setUser(null);
		} catch (e) {
			console.trace('Error logging out:', e);
		} finally {
			this.setLoading(false);
		}
	},

	async loginWithProvider(name: 'google' | 'facebook') {
		try {
			this.setLoading(true);

			const provider = name === 'google' ? new GoogleAuthProvider() : new FacebookAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);

			const docRef = doc(db, 'users', userCredential.user.uid);
			const snapshot = await getDoc(docRef);

			if (!snapshot.exists()) {
				await setDoc(docRef, {
					id: userCredential.user.uid,
					displayName: userCredential.user.displayName,
					email: userCredential.user.email,
					todos: [],
					createdAt: new Date(),
					updatedAt: new Date()
				});
				return;
			}

			this.setUser(snapshot.data() as IUser);
		} catch (e) {
			console.trace('Error logging in with provider:', e);
		} finally {
			this.setLoading(false);
		}
	}
};
