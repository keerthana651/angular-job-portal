import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private router = inject(Router);

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // register() {

  //   if (this.user.password !== this.user.confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }

  //   localStorage.setItem('user', JSON.stringify(this.user));

  //   alert('Registration Successful');

  //   this.router.navigate(['/login']);

  // }

  register() {

    if (this.user.password !== this.user.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        text: 'password do not match'
      });
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.user));

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You can now login.',
      confirmButtonColor: '#16A34A'
    });

    this.router.navigate(['/login']);

  }

}