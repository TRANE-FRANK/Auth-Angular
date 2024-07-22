import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { Inject } from '@angular/core'


export const authGuard: CanActivateFn = 
(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const authService = Inject(AuthService)
  const router = Inject(Router)
  
  authService.isLoggedIn || router.navigate(['login'])
  return true
}
