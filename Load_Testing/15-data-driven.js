import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data'

// SharedArray ==> function executes once & it is saved in memory once
// k6 give copy of that element

const users = new SharedArray('users', function () {
    return JSON.parse(open('./users.json'))
})
const user = users[Math.floor(Math.random() * users.length)]
const randomId = Math.floor(Math.random() * 1000)
const url = 'https://gorest.co.in/public/v2/users';

const payload = JSON.stringify({
    "name": user.name,
    "gender": "female",
    "email": `users_${randomId}@yopmail.com`,
    "status": "active"
})
const headers = {
    'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}


export default function () {

    const res = http.post(url, payload, { headers })

    console.log("*** response *** ", res.body)
    check(res, {
        'Status Code Validation': (res) => res.status === 201
    })

}