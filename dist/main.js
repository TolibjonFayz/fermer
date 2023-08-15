"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT;
        app.setGlobalPrefix('api');
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=main.js.map