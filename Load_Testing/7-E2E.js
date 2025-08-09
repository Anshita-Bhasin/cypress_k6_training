import http from 'k6/http';
import { check } from 'k6';

// Create User , fetching user details ==> Create + Get
export default function () {
    const url = 'https://gorest.co.in/public/v2/users';
    const payload = JSON.stringify({
        "name": "AB Testing",
        "gender": "female",
        "email": "ab.user11101111@yopmail.com",
        "status": "active"
    })
    const headers = {
        'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const res = http.post(url, payload, { headers })
    const userBody = JSON.parse(res.body)
    const id = userBody.id
    console.log("*** response id *** ", id)
    check(res, {
        'Status Code Validation': (res) => res.status === 201
    })


    const userDetails = http.get(`https://gorest.co.in/public/v2/users/${id}`, { headers })

    check(userDetails, {
        'Status Code Validation': (userDetails) => userDetails.status === 200
    })
}