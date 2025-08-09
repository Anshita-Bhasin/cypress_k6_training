import http from 'k6/http';
import { check } from 'k6';


export default function () {

    const randomId = Math.floor(Math.random() * 1000)
    const url = 'https://gorest.co.in/public/v2/users/7440157';

    const payload = JSON.stringify({
        "name": 'AB Testing patch'
    })
    const headers = {
        'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    //patch - url,name,headers


    const res = http.patch(url, payload, { headers })
    console.log("*** response *** ", res.body)

    check(res, {
        'Status Code Validation': (res) => res.status === 200
    })

}