import express from "express";

const app = express();
app.use(express.json());

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({message: "ok"});
})

app.get("/", (request, response) => {
    return response.json({message: "TESTE"})
})

app.listen(3333, () => console.log("Server is running"));