import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  // login() {

  //   if (!this.email || !this.password) {
  //     alert('Please enter Email and Password');
  //     return;
  //   }

  //   this.authService.login();

  //   alert('Login Successful');

  //   this.router.navigate(['/']);

  // }
  login() {

    if (!this.email || !this.password) {
     Swal.fire({
  icon: 'warning',
  title: 'Required',
  text: 'Please enter Email and Password'
});
      return;
    }

    const user = localStorage.getItem('user');

    if (!user) {
      alert('No account found. Please register first.');
      return;
    }

    const registeredUser = JSON.parse(user);

    if (
      this.email === registeredUser.email &&
      this.password === registeredUser.password
    ) {

      this.authService.login();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Successful',
        confirmButtonColor: '#2563EB'
      });

      this.router.navigate(['/']);

    } else {

    Swal.fire({
  icon: 'error',
  title: 'Login Failed',
  text: 'Incorrect Email or Password'
});

    }

  }
}