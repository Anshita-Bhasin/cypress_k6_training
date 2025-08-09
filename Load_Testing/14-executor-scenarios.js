import http from 'k6/http';
import { check } from 'k6'

export const options = {
    scenarios: {
        ramping: {
            executor: 'ramping-vus',
            startVus: 0,
            stages: [
                //9s
                { duration: '30s', target: 5 }, //Ramp- up to 5 vus in 3 seconds
                { duration: '1m', target: 10 },//Then go to 10 vus in 5 seconds
                { duration: '1s', target: 0 }, //Ramp-down to 0 in 1
            ]

        }
    },
    thresholds: {
        'http_req_duration': ['p(95)<300'],
        'http_req_failed': ['rate<0.01']

    }

}

export default function () {
    const response = http.get('https://jsonplaceholder.typicode.com/posts')

    check(response, {
        'verifying status code is 200': (response) => response.status === 200
    })
}