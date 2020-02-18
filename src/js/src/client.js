import fetch from 'unfetch';

export const getAllSubjects = () => fetch('/subjects');
export const getAllYmalProducts = () => fetch('/ymalproducts');

