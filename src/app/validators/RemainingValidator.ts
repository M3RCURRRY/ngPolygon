import { AbstractControl } from '@angular/forms';
import { tap } from 'rxjs';

export function remainingValidator(this: any, control: AbstractControl) {
  return this.fakeFetch(control.value).pipe(
    tap((result) => {
      console.log(result);
      return result ? null : { has: true };
    })
  );
}
