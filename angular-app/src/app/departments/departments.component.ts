import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }
  
  departments: {
    name: string,
    id: string
  }[] = [];

  ngOnInit() {
  }

  submit(form: NgForm){
    const value = form.control.get('name').value;;
    form.control.get('name').setValue('');
    this.departments.push({
      id: Math.random().toString(),
      name: value
    })
  }

}
