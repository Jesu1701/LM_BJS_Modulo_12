import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationsSchema = {
  field: {
    type: [ Validators.required ],
    alias: [ Validators.required ],
  },
};

export const formValidation = createFormValidation(validationsSchema);
