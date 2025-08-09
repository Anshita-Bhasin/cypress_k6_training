import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 10,
    duration: '3s'
}

export default function () {
    const headers = {
        'Authorization': 'Bearer 11db7172e8356dd0dbb99e6619b2834d7e31ce03da9ef69a174767150b198472a7',
        'Accept': 'application/json'
    }

    const response = http.get('https://gorest.co.in/public/v2/users', { headers })

    check(response, {
        'verifying status code is 200': (response) => response.status === 200
    })

}