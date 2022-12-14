import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FetchService } from 'src/app/services/fetch.service';
import { remainingValidator } from 'src/app/validators/RemainingValidator';

@Component({
  selector: 'app-weird-form',
  templateUrl: './weird-form.component.html',
  styleUrls: ['./weird-form.component.scss']
})
export class WeirdFormComponent implements OnInit {
  myForm!: FormGroup<{
    item: FormControl<string | null>,
    count: FormControl<string | null>
  }>;

  constructor(private fb: FormBuilder, private service: FetchService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      item: ['', [Validators.required]],
      count: ['0', [Validators.required], [remainingValidator.bind(this.service)]]
    })
  }
}
