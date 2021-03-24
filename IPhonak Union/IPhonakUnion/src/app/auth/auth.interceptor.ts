import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginServiceService } from '../pages/registration-page/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginServiceService,private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('noauth')){
            return next.handle(req.clone());
        }
        else{
            const clonereq = req.clone({
                headers:req.headers.set('Authorization',"Bearer " + this.loginService.getToken())
            });
            return next.handle(clonereq).pipe(
                tap(
                    event => { },
                    err => {
                        if(err.error.auth == false){
                            this.router.navigate(['/login'])
                        }
                    }
                )
            )
        }
    }
    
}