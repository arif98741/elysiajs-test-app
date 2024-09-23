import {Elysia} from "elysia";
import {UserClass} from "./UserClass";

const app = new Elysia();

app.group("/api/v1", (app) =>
    app.get("/users", ({note}) => function () {
        const demo = new UserClass("Jhon", "test@gmail.com");
        return demo.getData();
    })
        .get("/usersdb", ({note}) => function () {
            const demo = new UserClass("Jhon", "test@gmail.com");
            return demo.getMySQLData();
        })
        .get("/address", ({note}) => function () {
            const demo = new UserClass("Jhon", "test@gmail.com");
            return demo.userAddress();
        })
        .get("/profile", ({note}) => function () {
            const demo = new UserClass("Jhon", "test@gmail.com");
            return demo.userProfile();
        })
);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
