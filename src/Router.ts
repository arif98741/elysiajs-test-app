class Router {
    // @ts-ignore
    private app: any;
    private group: string;

    constructor(app: any) {
        this.app = app;
        this.group = 'api/v1'
    }

    demoData() {
        this.app.get("/users", () => function () {
            return 'demo data';
        })
    }
}


export {Router};