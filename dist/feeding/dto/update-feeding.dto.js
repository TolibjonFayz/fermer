"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeedingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_feeding_dto_1 = require("./create-feeding.dto");
class UpdateFeedingDto extends (0, mapped_types_1.PartialType)(create_feeding_dto_1.CreateFeedingDto) {
}
exports.UpdateFeedingDto = UpdateFeedingDto;
//# sourceMappingURL=update-feeding.dto.js.map