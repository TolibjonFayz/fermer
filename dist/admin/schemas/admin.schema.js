"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = exports.Admin = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Admin = exports.Admin = class Admin {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Falonchiyev Palonchis', description: 'Ism Sharif' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'falonchiyev@gmail.com', description: 'Emailingiz' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998901234567', description: 'Raqamingiz' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://t.me/falonchi',
        description: 'Telegram akkauntiz',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "tg_link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'qwerty', description: 'Parolingiz' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "hashed_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Activemi' }),
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Men kimdizman, nimdadir qilaman',
        description: 'O`ziz haqizda smt...',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'jadnfsvasinoirvn',
        description: 'Password',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "hashed_password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Admin.prototype, "activation_link", void 0);
exports.Admin = Admin = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], Admin);
exports.AdminSchema = mongoose_1.SchemaFactory.createForClass(Admin);
//# sourceMappingURL=admin.schema.js.map