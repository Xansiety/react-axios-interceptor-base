import { TypeWithKey } from "../models";

export const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Se ha producido un error de red",
    required: "This field is required",
    min: "This field must be at least 6 characters",
    max: "This field must be at most 20 characters",
    maxLength: "This field must be at most 20 characters",
    minLength: "This field must be at least 6 characters",
    email: "This field must be a valid email",
    pattern: "This field must be a valid email",
    notEqual: "This field must be different from the password",
    equal: "This field must be the same as the password",
    alreadyExists: "This email is already registered",
    withSpecialCharacters: "This field must contain special characters",
    withNumbers: "This field must contain numbers",
    withUppercase: "This field must contain uppercase characters",
    withLowercase: "This field must contain lowercase characters",
    withSpaces: "This field must not contain spaces",
    withLetters: "This field must contain letters",
    withSymbols: "This field must contain symbols",
    withLettersAndNumbers: "This field must contain letters and numbers",
    withLettersAndSymbols: "This field must contain letters and symbols",
    withNumbersAndSymbols: "This field must contain numbers and symbols",
    withLettersNumbersAndSymbols:
      "This field must contain letters, numbers and symbols",
    withLettersAndUppercase:
      "This field must contain letters and uppercase characters",
  };
  return codeMatcher[errorCode];
};
