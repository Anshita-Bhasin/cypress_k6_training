import http from 'k6/http'

export const options = {

    vus: 10,
    duration: '20s'
}

export default function () {
    http.get('https://reqres.in/api/users?page=2');
}


// smoke test -> amazon, ( Smoke Test -> Verify build is stable/ app is stable . 2nd should be load testing )


// needs - smoke test ( if passed ), k6 test ( load test)

// home page, plp, pdp ==> ( Terms & conditions )