import http from 'k6/http';
import { check } from 'k6';


export default function () {

//Math.random() ==> 0.1555
// Math.random()*1000 ==> 155.5
//Math.floor() ==> 155


    const randomId= Math.floor(Math.random()*1000)
    const url = 'https://gorest.co.in/public/v2/users';

    const payload = JSON.stringify({
        "name": `AB Testing ${randomId}`,
        "gender": "female",
        "email": `ab_${randomId}@yopmail.com`,
        "status": "active"
    })
    const headers = {
        'Authorization': 'Bearer db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }


    const res = http.post(url, payload, { headers })
    console.log("*** response *** ", res.body)
    check(res, {
        'Status Code Validation': (res) => res.status === 201
    })

}