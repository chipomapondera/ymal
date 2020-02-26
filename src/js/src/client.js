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

export const getAllSubjects = () => fetch('api/subjects');
export const addNewSubject = (subject) => {
    return fetch('api/subjects', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(subject)
    });
}
// export const deleteSubject = (id) => {
//     return fetch(`api/subjects/${id}`, {
//         method: 'DELETE',
//         mode: 'CORS'
//     })
//     .then(checkStatus);
// }

export const deleteSubject = (id) => {
    return fetch(`api/subjects/${id}`, {
        method: 'DELETE',
        mode: 'CORS'
    })
    .then(res => res)
}

export const getAllYmalProducts = () => fetch('api/ymalproducts');
export const addNewYmalProduct = (ymalProduct) => {
    return fetch('api/ymalproducts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(ymalProduct)
    });
}
// export const deleteYmalProduct = (id) => {
//     return fetch(`api/ymalProducts/${id}`, {
//         method: 'DELETE',
//     })
//     .then(checkStatus);
// }

export const deleteYmalProduct = (id) => {
    return fetch(`api/ymalProducts/${id}`, {
        method: 'DELETE',
        mode: 'CORS'
    })
    .then(console.log('remove YMAL button clicked'))
}


