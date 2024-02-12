import PocketBase from 'pocketbase';

const url = 'http://127.0.0.1:8090'
export const client = new PocketBase(url);
// export const isUserValid = client.authStore.isValid;

export async function login(email, password) {
    try {
        const authData = await client.collection("users").authWithPassword(email, password)
        // console.log(authData)
    } catch(err) {
        throw {
            message: "Error logging in"
        }
    }
    addItemToCart()
}

export async function oAuthLogin() {
    const authData = await client.collection("users").authWithOAuth2({provider: "google"})
}

export function logout() {
    client.authStore.clear()
}

export async function signup(email, password) {
    // const data = {
    //     "username": "test_rname",
    //     "email": "t@example.com",
    //     "emailVisibility": true,
    //     "password": "12345678",
    //     "passwordConfirm": "12345678",
    //     "name": "tes"
    // };
    const data = {
        "email": email,
        "password": password,
        "passwordConfirm": password
    }
    await client.collection("users").create(data) 
    await login(email, password)
}

export async function getUserCartItemCount() {
    const userId = client.authStore.model.id
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    return userData.cart_items.length
}

export async function addItemToCart() {
    const userId = client.authStore.model.id
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    console.log(userData)
    userData.cart_items.push("3dy19ye66mgjhe3")
    const updatedData = await client.collection('users').update(userId, userData);
    console.log(updatedData)
}

export async function getList() {
    return await client.collection("tasks").getList(1, 50, {sort: 'created'})
}

export async function createTask(task, user) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const data = {
        "task": task,
        "user": user
    }
    return await client.collection("tasks").create(data)
}

export async function deleteTask(taskId) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return await client.collection("tasks").delete(taskId)
}

export async function patchTask(taskId, task) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const data = {
        "task": task,
        "user": client.authStore.model?.id
    }
    return await client.collection("tasks").update(taskId, data)
}