import { Component, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';

  // Formulaire 1 piloté par Template ----------------------------
  user: UserModel = {
    userName: '',
    emailAddress: '',
    secretQuestion: ''
  };

  // @ViewChild('userForm')
  // userForm: NgForm;

  // register(value: UserModel) {
  //   console.log('Submitted!' + JSON.stringify(value));
  // }

  register() {
    // console.log(this.userForm);
    console.log(this.user);
  }

  suggestAUserName() {
    // this.userForm.form.setValue({
    //   username : 'Bob',
    //   email : '',
    //   secretQuestion : ''
    // });
    // this.userForm.form.patchValue({
    //   username : 'Bob'
    // });
    this.user.userName = 'Bob';
  }

  // Fin Formulaire 1 piloté par Template ----------------------

  // Formulaire 2 piloté par le code -----------------------------

  userReactiveForm: FormGroup;
  userNameCtrl: FormControl;
  userEmailCtrl: FormControl;
  userQuestionCtrl: FormControl;
  birthDateCtrl: FormControl;
  userPasswordCtrl: FormControl;
  passwordStrength = 0;
  customInputCtrl: FormControl;

  static isOldEnough(control: FormControl): { [s: string]: boolean } {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  constructor(formBuilder: FormBuilder) {
    // Define separate controls
    this.userNameCtrl = formBuilder.control('', [Validators.required, Validators.minLength(3)]);
    this.userEmailCtrl = formBuilder.control('', [Validators.required, Validators.email], AppComponent.forbiddenEmails);
    this.userQuestionCtrl = formBuilder.control('pet', Validators.required);
    this.birthDateCtrl = formBuilder.control('', [Validators.required, AppComponent.isOldEnough]);
    this.userPasswordCtrl = formBuilder.control('');
    this.customInputCtrl = formBuilder.control('initialValue', Validators.required);
    // Define the Global FormGroup
    this.userReactiveForm = formBuilder.group({
      userName: this.userNameCtrl,
      userEmail: this.userEmailCtrl,
      userSecretQuestion: this.userQuestionCtrl,
      birthDate: this.birthDateCtrl,
      userPassword: this.userPasswordCtrl,
      customInput: this.customInputCtrl
    });

    // we subscribe to every password changes
    this.userPasswordCtrl.valueChanges.pipe(
      // Only recompute when the user stop typing for 1 second
      debounceTime(1000),
      // Only recompute when new value is different than the last
      distinctUntilChanged()
    ).subscribe(newValue => { 
      this.passwordStrength = newValue.length;
      console.log('Stength: ' + this.passwordStrength);
    });

    // this.userReactiveForm = formBuilder.group({
    //   userName: formBuilder.control(''),
    //   userEmail: formBuilder.control(''),
    //   userSecretQuestion: formBuilder.control('')
    // });
  }

  registerReactiveForm() {
    console.log(this.userReactiveForm);
  }

  resetReactiveForm() {
    this.userReactiveForm.reset({
      userName: '',
      userEmail: '',
      userSecretQuestion: 'pet'
    });
    // this.userEmailCtrl.setValue('');
    // this.userEmailCtrl.setValue('');
    // this.userQuestionCtrl.setValue('pet')
  }

  suggestAUserNameReactiveForm() {
    this.userNameCtrl.setValue('Bob');
  }

  // Fin Formulaire 2 piloté par le code -------------------------
}

export interface UserModel {
  userName: string;
  emailAddress: string;
  secretQuestion: string;
}
