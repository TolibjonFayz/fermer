"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecialityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_speciality_dto_1 = require("./create-speciality.dto");
class UpdateSpecialityDto extends (0, mapped_types_1.PartialType)(create_speciality_dto_1.CreateSpecialityDto) {
}
exports.UpdateSpecialityDto = UpdateSpecialityDto;
//# sourceMappingURL=update-speciality.dto.js.map