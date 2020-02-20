import fetch from 'unfetch';

const checkStatus = (response) => {
    if(response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}

export const getAllSubjects = () => fetch('/subjects');
export const addNewSubject = (subject) => {
    return fetch('/subjects', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(subject)
    });
}
export const deleteSubject = (id) => {
    return fetch(`/subjects/${id}`, {
        method: 'DELETE'
    })
    .then(checkStatus);
}

export const getAllYmalProducts = () => fetch('/ymalproducts');
export const addNewYmalProduct = (ymalProduct) => {
    return fetch('/ymalproducts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(ymalProduct)
    });
}
export const deleteYmalProduct = (id) => {
    return fetch(`/ymalProducts/${id}`, {
        method: 'DELETE'
    })
    .then(checkStatus);
}


