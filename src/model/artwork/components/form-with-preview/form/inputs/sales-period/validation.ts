import type { NullableDateRange } from "@/common/components/form/date-time-range-input/type";
import {
  notEmptyEndDateValidation,
  notEmptyStartDateValidation,
  startDateIsBeforeEndDateValidation,
} from "@/common/lib/form-validation/date-range-input";
import type { InputValidation } from "@/model/common/lib/validation";

export const artworkSalesPeriodValidation = (
  v: NullableDateRange,
): InputValidation => ({
  onConfirmedSubmit: [
    notEmptyStartDateValidation()(v),
    notEmptyEndDateValidation()(v),
  ],
  onChange: [startDateIsBeforeEndDateValidation()(v)],
});
