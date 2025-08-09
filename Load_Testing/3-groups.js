import http from 'k6/http'
import { group, check } from 'k6'

export const options = {
    vus: 10,
    duration: '3s'
}

export default function () {


    group('Total Posts', () => {
        console.log(" **** Total POSTs *******")
        const response = http.get('https://jsonplaceholder.typicode.com/posts')
        check(response, {
            'verifying status code is 200': (response) => response.status === 200
        })

    })

    group('Total Comments', () => {
        console.log(" *** Total Comments **** ")
        const response = http.get('https://jsonplaceholder.typicode.com/comments')
        check(response, {
            'verifying status code is 200': (response) => response.status === 200
        })

        group('Total Albums', () => {
            const res = http.get('https://jsonplaceholder.typicode.com/albums')
            check(res, {
                'verifying status code is 200': (res) => res.status === 200
            })
        })

    })

}
