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

  apiBase: string = 'http://localhost:3000/api/departments';
  editMode: boolean = false;
  department: Department = {
    name: '',
    _id: ''
  };

  departments: Department[] = [];

  ngOnInit() {
    this.http.get<Department[]>(this.apiBase)
      .subscribe(result => this.departments = [...result]);
  }

  submit(form: NgForm) {

    const value = form.control.get('name').value;
    form.control.get('name').setValue('');

    this.http.post<Department>(this.apiBase, { name: value })
      .subscribe(result => this.departments.push(result))
  }

  editDepartment(department: Department) {
    this.editMode = true;
    this.department = { ...department };
  }

  saveEdit(form: NgForm) {

    this.editMode = false;

    const value = form.control.get('name').value;
    form.control.get('name').setValue('');

    this.http.put<Department>(this.apiBase + '/' + this.department._id, { name: value })
      .subscribe(result => {
        const department = this.departments.find(dep => dep._id === result._id);
        department.name = result.name;
        this.department = {
          name: '',
          _id: ''
        };
      });
  }

  deleteDepartment(id: string) {
    this.http.delete<Department>(this.apiBase + '/' + id)
      .subscribe(result => {
        this.departments = this.departments.filter(dep => dep._id !== result._id);
      })
  }
}

class Department {
  name: string;
  _id?: string;
}
