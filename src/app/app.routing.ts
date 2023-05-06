import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TestwsComponent } from './testws';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'testws', component: TestwsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

/*
const appRoutes: Routes = [
    {path:"license",component:wc},
    {path:"login",component:fg,canActivate:[jB],data:GB},
    {path:"home",component:tI,canActivate:[jB],data:zB},
    {path:"activity",component:gS,canActivate:[jB],data:KB},
    {path:"alerts",component:oA,canActivate:[jB],data:$B},
    {path:"sds/create",component:Rx,canActivate:[jB],data:ZB},
    {path:"sds/create/pool/:poolId",component:Rx,canActivate:[jB],data:UB},
    {path:"pool/create",component:nM,canActivate:[jB],data:XB},
    {path:"pool/list",component:iO,canActivate:[jB],data:JB},
    {path:"sds/list",component:xO,canActivate:[jB],data:qB},
    {path:"node/list",component:QO,canActivate:[jB],data:QB},
    {path:"sds/edit/:uuid",component:MF,canActivate:[jB],data:eY},
    {path:"sds/edit/advanced/:uuid",component:bD,canActivate:[jB],data:tY},
    {path:"pool/edit/:uuid",component:CD,canActivate:[jB],data:nY},
    {path:"pool/:uuid",component:xD,canActivate:[jB],data:iY},
    {path:"sds/:uuid",component:sP,canActivate:[jB],data:lY},
    {path:"node/:uuid",component:lE,canActivate:[jB],data:oY},

    {path:"",redirectTo:"/home",pathMatch:"full"},

    {path:"**",component:OE}
];
*/

export const routing = RouterModule.forRoot(appRoutes);