const express = require('express');

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["curso 1", "curso 2"]);
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["curso 1", "curso 2", "curso adcionado"]);
})

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json(["Curso 6", "curso 2", "curso adcionado"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "curso 7", "curso 89"]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "curso 7"]);
})
app.listen(3333);