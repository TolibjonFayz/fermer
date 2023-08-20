"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
async function start() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT;
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
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