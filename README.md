![](https://i.imgur.com/waxVImv.png)

<h1 align="center">REST API Load Testing with Postman and K6</h1>

## Required

<a href="https://www.postman.com/downloads/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" alt="POSTMAN" height="50"></a>&ensp;
<a href="https://k6.io/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/K6-logo.svg/1058px-K6-logo.svg.png" alt="K6" height="50"></a>&ensp;
<a href="https://grafana.com/products/cloud/k6/?src=k6io"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png" alt="GRAFANA CLOUD" height="50"></a>&ensp;
<a href="https://code.visualstudio.com/download"><img src="https://www.shanebart.com/wp-content/uploads/2019/05/5k4h36j3h4j.png" alt="VISUAL STUDIO CODE" height="50"></a>

## Background

API performance testing is becoming increasingly important to ensure overall system performance. RESTful API services usually have multiple endpoints. No assumptions should be made about the performance characteristics of one endpoint, by testing another. This simple fact led to the realization that each endpoint should be tested against different assumptions, metrics and thresholds. Starting with individual endpoints is a smart way to start testing API performance

## Resource

- https://reqres.in

  ![55281](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/7de5690a-fe47-4bc9-b07f-3fd61af0f93c)

- Case
  | MATRIX | QUANTITY |
  | ------ | ------ |
  | virtual users | 1000 |
  | iterations | 3500 |
  | Max Respon | 2 seconds |

## Test Scenario

  | No | Module | Test Scenario Description |
  | ------ | ------ | ------ |
  | 1 | API Create | Fill in the request body containing "name": "morpheus", "job": "leader" |
  | 2 | API Update | Fill in the request body containing "name": "morpheus", "job": "zion resident" |

## Scenario Test Postman

- Shorten base url https://reqres.in

  ![Capture](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/14cd9fd6-544b-415a-a5df-788b69143494)

- Test API CREATE (SUCCESS)
  
  ![Test API CREATE](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/31e72780-edbf-4dce-a40f-c6da340d173f)
  ![Hasil Test API CREATE - Postman](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/2ed1df4d-a541-4a55-a421-9e9796ee442f)
  
- Test API UPDATE (SUCCESS)

  ![Test API UPDATE](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/cfd66347-f6d3-43ee-9dea-5d9ec307f0a9)
  ![Hasil Test API Upadte- Postman](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/2b670d05-5b60-40a5-b679-28c3cd16d867)

## API Performance Test With K6

Test API CREATE (POST)

```
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
```

Test API UPADTE (PUT)

```
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
```

To Display The Response Code API CREATE (POST)

```
check(
  res,
  {
    'response code was 201': (res) => res.status == 201,
  },
);
```

To Display The Response Code API UPDATE (PUT)

```
check(
  res,
  {
    'response code was 200': (res) => res.status == 200,
  },
);
```

the complete code as follows <a href="https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/blob/main/Main.js">main.js</a>

## Report Visualization Of The Performance Test

![Hasil Test K6](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/3be4cb8e-be65-4cec-8db4-d2a04c732928)

![k6 1](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/85ce2e89-941d-4ee1-9ff5-b90000f84779)

![k6 2](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/28e0b0c9-77cf-4683-bbcc-a1329197732d)

![k6 3](https://github.com/SyrMtng/REST-API-Load-Testing-with-K6/assets/114982520/b1f35aac-b7a5-46ad-928e-e5fa8413de09)

![](https://i.imgur.com/waxVImv.png)
