import http from 'k6/http';
import { check } from 'k6';




export default function () {


    const headers = {
        'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const url = 'https://gorest.co.in/public/v2/users/7440156';
    const res = http.del(url, { headers })
    console.log("*** response *** ", res)

    check(res, {
        'Status Code Validation': (res) => res.status === 200
    })

}