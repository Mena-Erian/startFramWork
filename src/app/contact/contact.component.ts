import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form(event: SubmitEvent) {
    event.preventDefault();
  }
  regexNumber: RegExp = /^[0-9]$/;

  putRegexNumber() {
    let test = this.regexNumber.test('');
    console.log(test, 'sdf');
  }
}
// import { Directive } from '@angular/core';
// import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

// @Directive({
//   selector: '[validatorName][ngModel]',
//   providers: [
//     { provide: NG_VALIDATORS, useExisting: className, multi: true }
//   ]
// })

// export class className implements Validator {
//   validate(c: AbstractControl): ValidationErrors | null {
//     if (valid) {
//       return null;
//     }

//     return {
//       validatorName: {
//         valid: false
//       }
//     };
//   }
// }
