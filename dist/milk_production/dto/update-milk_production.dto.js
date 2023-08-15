"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMilkProductionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_milk_production_dto_1 = require("./create-milk_production.dto");
class UpdateMilkProductionDto extends (0, mapped_types_1.PartialType)(create_milk_production_dto_1.CreateMilkProductionDto) {
}
exports.UpdateMilkProductionDto = UpdateMilkProductionDto;
//# sourceMappingURL=update-milk_production.dto.js.map