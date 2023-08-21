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
exports.UpdateAnimalTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateAnimalTypeDto {
}
exports.UpdateAnimalTypeDto = UpdateAnimalTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sut emizuvchi', description: 'Hayvon  turi' }),
    __metadata("design:type", String)
], UpdateAnimalTypeDto.prototype, "type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Anabunaqa, manabunaqa',
        description: 'Ta`rif',
    }),
    __metadata("design:type", String)
], UpdateAnimalTypeDto.prototype, "description", void 0);
//# sourceMappingURL=update-animal_type.dto.js.map