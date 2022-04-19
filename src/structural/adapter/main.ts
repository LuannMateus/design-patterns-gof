import { EmailValidatorClassAdapter } from './validation/emailValidatorClassAdapter';
import { emailValidatorFnAdapter } from './validation/emailValidatorFnAdapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/emailValidatorProtocol';

function emailValidatorClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
}

function emailValidatorFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

const email = 'luizomf@gmail.com';

emailValidatorClass(new EmailValidatorClassAdapter(), email);
emailValidatorFn(emailValidatorFnAdapter, email);
