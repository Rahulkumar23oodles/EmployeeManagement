import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authRedirectGaurd:CanActivateFn=(route,state)=>{
    const router = inject(Router);

  if (localStorage.getItem('token')) {
    router.navigate(['/homepage']); // Redirect logged-in users
    return false;
  }
  return true;
}