import http from 'k6/http';
import { check, sleep } from 'k6';

// POST - Create
// Get - Fetch User
// PUT - Full Update
// PATCH - Partial Update
// Delete - Delete User


export default function () {

    // const randomId = Math.floor(Math.random() * 1000)
    // const BASE_URL = 'https://gorest.co.in/public/v2/users'
    const headers = {
        'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    // const payload = JSON.stringify({
    //     "name": `AB Testing ${randomId}`,
    //     "gender": "female",
    //     "email": `ab_${randomId}@yopmail.com`,
    //     "status": "active"
    // })

    // const postRes = http.post(BASE_URL, payload, { headers })
    // console.log('POST Response' + postRes.body)

    // check(postRes, {
    //     'POST status code is 201': (postRes) => postRes.status === 201
    // })


    // const userId = postRes.json().id

    // sleep(1)

    // //GET

    // const getRes = http.get(`${BASE_URL}/${userId}`, { headers })
    // console.log('GET Response ' + getRes.body)

    // check(getRes, {
    //     'GET status is 200': (getRes) => getRes.status === 200
    // })

    // sleep(1);

    // //PUT

    // const putPayload = JSON.stringify({
    //     "name": `AB Testing ${randomId}`,
    //     "gender": "female",
    //     "email": `ab_${randomId}@yopmail.com`,
    //     "status": "inactive"
    // })

    // const putRes = http.put(`${BASE_URL}/${userId}`, putPayload, { headers })
    // console.log('PUT Response' + putRes.body)

    // check(putRes, {
    //     'Put status code is 200': (putRes) => putRes.status === 200
    // })

    // sleep(1)

    // // PATCH
    // const patchPayload = JSON.stringify({
    //     name: "AB Testing Patched"
    // })

    // const patchRes = http.patch(`${BASE_URL}/${userId}`, patchPayload, { headers })
    // console.log('PATCH Response' + patchRes.body)



    // check(patchRes, {
    //     'Patch status code is 200': (patchRes) => patchRes.status === 200
    // })


    sleep(1)


    // DELETE

    const delRes = http.del('https://gorest.co.in/public/v2/users/8050405', { headers })
    console.log('Delete Response' + delRes.status)

    check(delRes, {
        'Delete response status code is 204': (delRes) => delRes.status == 200
    })

}