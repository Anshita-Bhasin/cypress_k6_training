import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 10,
    duration: '3s'
}


export default function () {
    const response = http.get('https://jsonplaceholder.typicode.com/posts')

    check(response, {
        'verifying status code is 200': (response) => response.status === 200
    })

}