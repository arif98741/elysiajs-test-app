import {Elysia} from "elysia";

const app = new Elysia();

app.group("/api/v1", (app) =>
    app.get("/users", ({note}) => function () {
        return {
            "status": 200,
            "success": true,
        }
    })
);


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
