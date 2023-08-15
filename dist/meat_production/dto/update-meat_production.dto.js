"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMeatProductionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_meat_production_dto_1 = require("./create-meat_production.dto");
class UpdateMeatProductionDto extends (0, mapped_types_1.PartialType)(create_meat_production_dto_1.CreateMeatProductionDto) {
}
exports.UpdateMeatProductionDto = UpdateMeatProductionDto;
//# sourceMappingURL=update-meat_production.dto.js.map