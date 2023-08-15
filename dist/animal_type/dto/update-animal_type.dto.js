"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnimalTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_animal_type_dto_1 = require("./create-animal_type.dto");
class UpdateAnimalTypeDto extends (0, mapped_types_1.PartialType)(create_animal_type_dto_1.CreateAnimalTypeDto) {
}
exports.UpdateAnimalTypeDto = UpdateAnimalTypeDto;
//# sourceMappingURL=update-animal_type.dto.js.map