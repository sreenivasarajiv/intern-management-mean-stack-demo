import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  departments: {
    name: string,
    id: string
  }[] = [];

  ngOnInit() {
    this.http.get<{name: string, id: string}[]>('http://localhost:3000/api/departments')
    .subscribe(result => this.departments = [...result]);
  }

  submit(form: NgForm){
    
    const value = form.control.get('name').value;;
    form.control.get('name').setValue('');
    
    this.http.post<{name: string, id: string}>('http://localhost:3000/api/departments', { name: value })
    .subscribe(result => this.departments.push(result))
  }

}
