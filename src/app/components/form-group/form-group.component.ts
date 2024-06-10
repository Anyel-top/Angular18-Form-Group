import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent implements OnInit{

  form: FormGroup;

  constructor(  private formBuilder: FormBuilder  ){
    this.buildForm();
    // this.form?.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(value=>{
    //   console.log(value);
    // })
  }
  ngOnInit(): void {
    
  }

  private buildForm(){
      
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      text: new FormControl('',[Validators.required, Validators.maxLength(200)]),
      category: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }
    )
  }

  save(event : Event){
    event.preventDefault();
    if (this.form.valid){
      const datosFormulario = this.form.value;
      console.log(datosFormulario);
    }
    else{
        this.form.markAllAsTouched();
    }
    
  }

}
