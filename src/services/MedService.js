// code written and instructed by Natalie Childs in class
const MED_ENDPOINT = 'https://crudcrud.com/api/{insert your endpoint here}/drug'

const getFetchOptions = (method, data) => ({ 
    method: method, 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})

// export const getTodos = async () => {
export const getMeds = async () => {
    try {
        const resp = await fetch(MED_ENDPOINT);
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

// export const createTodo = async (todo) => {
export const createMed = async (med) => {
    try {
        const resp = await fetch(MED_ENDPOINT, getFetchOptions("POST", med))
        return await resp.json();
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

// export const updateTodo = async (todo) => {
export const updateMed = async (med) => {
    try {
        const resp = await fetch(MED_ENDPOINT + "/" + med._id, 
        // ToDo: console.log debugging here
        getFetchOptions("PUT", { text: med.text }));
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

// export const deleteTodo = async (todo) => {
export const deleteMed = async (med) => {
    try {
        const resp = await fetch(MED_ENDPOINT + "/" + med._id, { method: "DELETE" })
        return resp;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

// // code written and instructed by Joey Wilson in mentor session
// (function () {
//     let loading = true;
//     let error = false;
//     let drugs = [];
//     function update() {
//         let content = "";
//         if (loading) {
//             content = "Loading...";
//         } else if (error) {
//             content = "Error ...";
//         } else {
//             drugs.forEach(drug => {
//                 content = content.concat(`
//                     <div>Drug Name: ${drug.name}</div>
//                 `)
//             });
//         }
//         document.getElementById('root').innerHTML = content;
//     }
//     update();

//     fetch('https://crudcrud.com/api/{insert your endpoint here}/drug', {
//         method: 'GET',
//         mode: 'cors',
//     }).then(function (response) {
//         if (response.ok) {
//             loading = false;
//             return response.json();
//         } else {
//             loading = false;
//             error = true;
//             update();
//         }
//     }).then(function (json) {
//         drugs = json;
//         update();
//     })
// }())