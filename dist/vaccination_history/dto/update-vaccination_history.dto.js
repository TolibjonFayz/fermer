"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVaccinationHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vaccination_history_dto_1 = require("./create-vaccination_history.dto");
class UpdateVaccinationHistoryDto extends (0, mapped_types_1.PartialType)(create_vaccination_history_dto_1.CreateVaccinationHistoryDto) {
}
exports.UpdateVaccinationHistoryDto = UpdateVaccinationHistoryDto;
//# sourceMappingURL=update-vaccination_history.dto.js.map