import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ForbiddenNameValidator(forbiddenNameArg:RegExp):ValidatorFn
{
     return (control:AbstractControl)=>{
            const forbidden= forbiddenNameArg.test(control.value.toLowerCase());   
            return forbidden? {'forbiddenName':{value:control.value}} :null; 
     }
}