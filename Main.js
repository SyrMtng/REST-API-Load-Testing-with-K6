import http from 'k6/http';
import { check, sleep } from "k6";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "hasil.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export const options = {
    discardResponseBodies: true,
    scenarios: {
        create: {
            executor: 'shared-iterations',
            exec: 'create',
            vus: 500,
            iterations: 1700,
            maxDuration: '2s',
        },
        update: {
            executor: 'shared-iterations',
            exec: 'update',
            vus: 500,
            iterations: 1700,
            startTime: '2s',
            maxDuration: '2s',
        },
    },
    ext: {
        loadimpact: {
          projectID: 3648789,
          // Test runs with the same name groups test runs together
          name: "k"
        },
      },
};

export function create() {
    const payload = JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post('https://reqres.in/api/users', payload, params, {
        tags: { my_custom_tag: 'create' },
    });
    
    check(
        res,
        {
            'response code was 201': (res) => res.status == 201,
        },
    );
    
    sleep(1);
}

export function update() {

    const payload = JSON.stringify({
        "name": "morpheus",
        "job": "zion resident"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.put('https://reqres.in/api/users/2', payload, params, {
        tags: { my_custom_tag: 'update' },
    });

    check(
        res,
        {
            'response code was 200': (res) => res.status == 200,
        },
    );

  sleep(1);
}
