import http from 'k6/http';
import { check } from 'k6'

export const options = {
    vus: 10,
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<200'],
        http_req_failed: ['rate<0.01'],
        http_reqs: ['rate>10'],
        checks: ['rate>0.9']

    }
}

export default function () {
    const response = http.get('https://jsonplaceholder.typicode.com/posts')

    check(response, {
        'verifying status code is 200': (response) => response.status === 200
    })
}