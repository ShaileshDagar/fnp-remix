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
    // addItemToCart()
    // getAllItems()
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

export async function getAllItems() {
    const RecordList = await client.collection('items').getList(1, 5, {
        fields: "id, name, image, price, category"
    });
    // console.log(RecordList.items)
    return RecordList.items
}

export async function getUserCartItemIds() {
    const userId = client.authStore.model.id
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    return userData.cart_items
}

export async function getUserCartItemsCount() {
    const userId = client.authStore.model.id
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    return userData.cart_items.length
}

export async function getCartItems() {
    const userId = client.authStore.model.id
    // console.log(userId)
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    // console.log(userData)
    const cartItemIds = userData.cart_items
    // console.log(cartItemIds)
    if(cartItemIds === undefined || cartItemIds.length == 0)
        return []
    let filter = `id = "${cartItemIds[0]}"`
    for(let i=1; i<cartItemIds.length; i=i+1){
        filter += ` || id = "${cartItemIds[i]}"`
    }
    console.log(filter)
    const recordList = await client.collection('items').getList(1, 5, {
        filter: filter,
        fields: "id, name, image, price, category"
    });
    console.log(recordList.items)
    return recordList.items
}

export async function addItemToCart(itemId) {
    const userId = client.authStore.model.id
    const userData = await client.collection('users').getOne(userId, {fields: "cart_items"});
    console.log(userData)
    userData.cart_items.push(itemId)
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