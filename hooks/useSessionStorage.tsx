'use client'
/*
 * This hook code was given by ChatGPT, if modification needs to be done  please contact Sarguru or Naveen
 */

import { useState, useEffect } from 'react';

// Define types for the state object
type StateObject = { [key: string]: any };

// Define the hook function
const useSessionStorage = <T extends StateObject>(initialState: T) => {
	const [state, setState] = useState<T>(() => {
		const storedState = sessionStorage.getItem('sessionStorageState');
		return storedState ? JSON.parse(storedState) : initialState;
	});

	useEffect(() => {
		sessionStorage.setItem('sessionStorageState', JSON.stringify(state));
	}, [state]);

	const setValue = <K extends keyof T>(key: K, value: T[K]) => {
		setState(prevState => ({
			...prevState,
			[key]: value
		}));
	};

	const getValue = <K extends keyof T>(key: K): T[K] => {
		return state[key];
	};

	const removeValue = <K extends keyof T>(key: K) => {
		setState(prevState => {
			const newState = { ...prevState };
			delete newState[key];
			return newState;
		});
	};

	return { setValue, getValue, removeValue, state };
};

export default useSessionStorage;
