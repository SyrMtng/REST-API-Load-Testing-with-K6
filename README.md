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

  ![55281](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/1b030547-65b9-4d60-889b-9e4a39fd3f3c)

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

  ![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/e8b33bcc-4da5-4dc3-b4ab-19907ca291ac)

- Test API CREATE (SUCCESS)
  
  ![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/fa24f350-50ba-44cc-a884-ce9f7476093d)
  ![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/460a05da-b90e-495f-9b2f-c77064e077f7)
  
- Test API UPDATE (SUCCESS)

  ![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/de34e133-8976-491e-9666-71e34adde7ae)
  ![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/d8ba75e1-b2bf-4f27-84a0-572972581333)

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

the complete code as follows <a href="https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/blob/main/main.js">main.js</a>

## Report Visualization Of The Performance Test

![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/a9aff6c9-4a9f-4551-b13b-728ce8071a82)

![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/21485b04-3948-4a70-893a-e6e85c3fd067)

![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/566fec69-3c70-4031-b9bb-57e487a874d5)

![image](https://github.com/SyrMtng/REST-API-Load-Testing-with-Postman-and-K6/assets/114982520/20b8118b-88c1-445b-91c5-bfda485a5d45)

![](https://i.imgur.com/waxVImv.png)
