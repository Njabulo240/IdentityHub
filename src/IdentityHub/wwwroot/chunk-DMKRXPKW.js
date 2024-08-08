import{a as M}from"./chunk-2T45TSII.js";import{A as h,Aa as ye,D as w,E as S,F as _,I as ie,J as re,K as ne,M as a,N as he,Q as ve,R as _e,T as oe,V as F,X as be,Z as xe,c as W,da as k,e as C,fa as I,ga as D,h as X,ha as $,j as E,ja as Se,k as Y,ka as N,l as b,m as x,n as ee,oa as se,q as m,qa as T,r as d,ra as P,sa as f,t as te,ta as R,ua as B,v as g,va as j,w as l,wa as L,x as y,xa as V,y as o,ya as U,z as s,za as q}from"./chunk-N57SZSMP.js";var O=class{constructor(n,u,e){this.accessToken=n,this.userId=u,this.provider=e}};var Me=["googleButton"];function Te(r,n){r&1&&(o(0,"span",26),a(1," Username is required "),s())}function Pe(r,n){r&1&&(o(0,"span",26),a(1," Password is required "),s())}function Re(r,n){if(r&1){let u=w();o(0,"a",30),S("click",function(){b(u);let i=_(2);return x(i.resendEmailConfirmationLink())}),a(1," Click here to resend email confirmation link in case you didn't receive it. "),s()}}function Be(r,n){if(r&1&&(o(0,"div",27),h(1,"app-validation-messages",28),g(2,Re,2,0,"a",29),s()),r&2){let u=_();m(),l("errorMessages",u.errorMessages),m(),l("ngIf",u.errorMessages[0].includes("Please confirm your email"))}}var we=(()=>{let n=class n{constructor(e,i,t,c,v,p,G){this.accountService=e,this.formBuilder=i,this.router=t,this.activatedRoute=c,this.sharedService=v,this._renderer2=p,this._document=G,this.googleButton=new ee({}),this.loginForm=new j({}),this.submitted=!1,this.errorMessages=[],this.returnUrl=null,this.accountService.user$.pipe(C(1)).subscribe({next:J=>{J?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:z=>{z&&(this.returnUrl=z.get("returnUrl"))}})}})}ngOnInit(){this.initiazeGoogleButton(),this.initializeForm()}ngAfterViewInit(){let e=this._renderer2.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async="true",e.defer="true",this._renderer2.appendChild(this._document.body,e)}initializeForm(){this.loginForm=this.formBuilder.group({userName:["",f.required],password:["",f.required]})}login(){this.submitted=!0,this.errorMessages=[],this.loginForm.valid&&this.accountService.login(this.loginForm.value).subscribe({next:e=>{this.returnUrl?this.router.navigateByUrl(this.returnUrl):this.router.navigateByUrl("/")},error:e=>{e.error.errors?this.errorMessages=e.error.errors:this.errorMessages.push(e.error)}})}loginWithFacebook(){FB.login(e=>W(this,null,function*(){if(e.authResponse){let i=e.authResponse.accessToken,t=e.authResponse.userID;this.accountService.loginWithThirdParty(new O(i,t,"facebook")).subscribe({next:()=>{this.returnUrl?this.router.navigateByUrl(this.returnUrl):this.router.navigateByUrl("/")},error:c=>{this.sharedService.showNotification(!1,"Failed",c.error)}})}else this.sharedService.showNotification(!1,"Failed","Unable to login with your facebook")}))}resendEmailConfirmationLink(){this.router.navigateByUrl("/account/send-email/resend-email-confirmation-link")}initiazeGoogleButton(){window.onGoogleLibraryLoad=()=>{google.accounts.id.initialize({client_id:"187373295394-he32hkahbth3jo0e44jtva56q1n22e5i.apps.googleusercontent.com",callback:this.googleCallBack.bind(this),auto_select:!1,cancel_on_tap_outside:!0}),google.accounts.id.renderButton(this.googleButton.nativeElement,{size:"medium",shape:"rectangular",text:"signin_with",logo_alignment:"center"})}}googleCallBack(e){return W(this,null,function*(){let i=se(e.credential);this.accountService.loginWithThirdParty(new O(e.credential,i.sub,"google")).subscribe({next:t=>{this.returnUrl?this.router.navigateByUrl(this.returnUrl):this.router.navigateByUrl("/")},error:t=>{this.sharedService.showNotification(!1,"Failed",t.error)}})})}};n.\u0275fac=function(i){return new(i||n)(d(N),d(q),d(I),d(k),d(M),d(te),d(oe))},n.\u0275cmp=E({type:n,selectors:[["app-login"]],viewQuery:function(i,t){if(i&1&&ie(Me,7),i&2){let c;re(c=ne())&&(t.googleButton=c.first)}},decls:42,vars:8,consts:[["googleButton",""],[1,"mt-5"],[1,"d-flex","justify-content-center"],[1,"card","col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"form-floating","mb-3"],["formControlName","userName","type","text","placeholder","Username (your email address)",1,"form-control"],["for","userName"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],["for","password"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],[1,"mt-4","text-center"],["routerLink","/account/send-email/forgot-username-or-password",1,"btn","btn-link"],[1,"row","d-flex","justify-content-center","mt-3"],[1,"col-5"],[1,"col-2","text-center"],[1,"d-flex","justify-content-between","my-3"],[1,"btn","btn-primary","btn-sm",2,"width","180px",3,"click"],[1,"font-monospace","fw-medium","text-center","text-muted","mt-2","mb-0"],["routerLink","/account/register",1,"text-decoration-none"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"],["class","btn btn-link",3,"click",4,"ngIf"],[1,"btn","btn-link",3,"click"]],template:function(i,t){if(i&1){let c=w();o(0,"div",1)(1,"div",2)(2,"div",3)(3,"main",4)(4,"form",5),S("ngSubmit",function(){return b(c),x(t.login())}),o(5,"div",6)(6,"h3",7),a(7,"Sign in"),s()(),o(8,"div",8),h(9,"input",9),o(10,"label",10),a(11,"Username (your email address)"),s(),g(12,Te,2,0,"span",11),s(),o(13,"div",8),h(14,"input",12),o(15,"label",13),a(16,"Password"),s(),g(17,Pe,2,0,"span",11),s(),g(18,Be,3,2,"div",14),o(19,"div",15)(20,"button",16),a(21,"Log in"),s()()(),o(22,"div",17)(23,"a",18)(24,"h6"),a(25,"Forgot username or password"),s()()(),o(26,"div",19)(27,"div",20),h(28,"hr"),s(),o(29,"div",21),a(30,"OR"),s(),o(31,"div",20),h(32,"hr"),s()(),o(33,"div",22),h(34,"div",null,0),o(36,"button",23),S("click",function(){return b(c),x(t.loginWithFacebook())}),a(37," Facebook "),s()(),o(38,"p",24),a(39," Don't have an account yet? "),o(40,"a",25),a(41,"Create account"),s()()()()()()}if(i&2){let c,v,p,G;m(4),l("formGroup",t.loginForm),m(5),y("is-invalid",t.submitted&&((c=t.loginForm.get("userName"))==null?null:c.errors)),m(3),l("ngIf",t.submitted&&((v=t.loginForm.get("userName"))==null?null:v.hasError("required"))),m(2),y("is-invalid",t.submitted&&((p=t.loginForm.get("userName"))==null?null:p.errors)),m(3),l("ngIf",t.submitted&&((G=t.loginForm.get("password"))==null?null:G.hasError("required"))),m(),l("ngIf",t.errorMessages.length>0)}},dependencies:[F,D,L,P,R,B,V,U,T]});let r=n;return r})();var je=["googleButton"];function Le(r,n){r&1&&(o(0,"span",8),a(1," First name is required "),s())}function Ve(r,n){r&1&&(o(0,"span",8),a(1," First name must be at least 3, and maximum 15 characters "),s())}function Ue(r,n){r&1&&(o(0,"span",8),a(1," Last name is required "),s())}function qe(r,n){r&1&&(o(0,"span",8),a(1," Last name must be at least 3, and maximum 15 characters "),s())}function Ge(r,n){r&1&&(o(0,"span",8),a(1," Email is required "),s())}function De(r,n){r&1&&(o(0,"span",8),a(1," Invalid email address "),s())}function ze(r,n){r&1&&(o(0,"span",8),a(1," Password is required "),s())}function Ae(r,n){r&1&&(o(0,"span",8),a(1," Password must be at least 6, and maximum 15 characters "),s())}function We(r,n){if(r&1&&(o(0,"div",29),h(1,"app-validation-messages",30),s()),r&2){let u=_();m(),l("errorMessages",u.errorMessages)}}var Ce=(()=>{let n=class n{constructor(e,i,t,c,v,p){this.accountService=e,this.sharedService=i,this.formBuilder=t,this.router=c,this._renderer2=v,this._document=p,this.googleButton=new ee({}),this.registerForm=new j({}),this.submitted=!1,this.errorMessages=[],this.accountService.user$.pipe(C(1)).subscribe({next:G=>{G&&this.router.navigateByUrl("/")}})}ngOnInit(){this.initiazeGoogleButton(),this.initializeForm()}ngAfterViewInit(){let e=this._renderer2.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async="true",e.defer="true",this._renderer2.appendChild(this._document.body,e)}initializeForm(){this.registerForm=this.formBuilder.group({firstName:["",[f.required,f.minLength(3),f.maxLength(15)]],lastName:["",[f.required,f.minLength(3),f.maxLength(15)]],email:["",[f.required,f.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],password:["",[f.required,f.minLength(6),f.maxLength(15)]]})}register(){this.submitted=!0,this.errorMessages=[],this.registerForm.valid&&this.accountService.register(this.registerForm.value).subscribe({next:e=>{this.sharedService.showNotification(!0,e.value.title,e.value.message),this.router.navigateByUrl("/account/login")},error:e=>{e.error.errors?this.errorMessages=e.error.errors:this.errorMessages.push(e.error)}})}registerWithFacebook(){FB.login(e=>W(this,null,function*(){if(e.authResponse){let i=e.authResponse.accessToken,t=e.authResponse.userID;this.router.navigateByUrl(`/account/register/third-party/facebook?access_token=${i}&userId=${t}`)}else this.sharedService.showNotification(!1,"Failed","Unable to register with your facebook")}))}initiazeGoogleButton(){window.onGoogleLibraryLoad=()=>{google.accounts.id.initialize({client_id:Se.googleClientId,callback:this.googleCallBack.bind(this),auto_select:!1,cancel_on_tap_outside:!0}),google.accounts.id.renderButton(this.googleButton.nativeElement,{size:"medium",shape:"rectangular",text:"signup_with",logo_alignment:"center"})}}googleCallBack(e){return W(this,null,function*(){console.log(e);let i=se(e.credential);this.router.navigateByUrl(`/account/register/third-party/google?access_token=${e.credential}&userId=${i.sub}`)})}};n.\u0275fac=function(i){return new(i||n)(d(N),d(M),d(q),d(I),d(te),d(oe))},n.\u0275cmp=E({type:n,selectors:[["app-register"]],viewQuery:function(i,t){if(i&1&&ie(je,7),i&2){let c;re(c=ne())&&(t.googleButton=c.first)}},decls:54,vars:18,consts:[["googleButton",""],[1,"mt-5"],[1,"d-flex","justify-content-center"],[1,"card","col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"text-danger"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last name",1,"form-control"],["for","lastName"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],["for","password"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],[1,"row","d-flex","justify-content-center","mt-3"],[1,"col-5"],[1,"col-2","text-center"],[1,"d-flex","justify-content-between","my-3"],[1,"btn","btn-primary","btn-sm",2,"width","180px",3,"click"],[1,"font-monospace","fw-medium","text-center","text-muted","mt-2","mb-0"],["routerLink","/account/login",1,"text-decoration-none"],[1,"form-floatin"],[3,"errorMessages"]],template:function(i,t){if(i&1){let c=w();o(0,"div",1)(1,"div",2)(2,"div",3)(3,"main",4)(4,"form",5),S("ngSubmit",function(){return b(c),x(t.register())}),o(5,"div",6)(6,"h3",7),a(7," Sign up for free "),o(8,"span",8),a(9,"Today"),s()()(),o(10,"div",9),h(11,"input",10),o(12,"label",11),a(13,"First name"),s(),g(14,Le,2,0,"span",12)(15,Ve,2,0,"span",12),s(),o(16,"div",9),h(17,"input",13),o(18,"label",14),a(19,"Last name"),s(),g(20,Ue,2,0,"span",12)(21,qe,2,0,"span",12),s(),o(22,"div",9),h(23,"input",15),o(24,"label",16),a(25,"Email"),s(),g(26,Ge,2,0,"span",12)(27,De,2,0,"span",12),s(),o(28,"div",9),h(29,"input",17),o(30,"label",18),a(31,"Password"),s(),g(32,ze,2,0,"span",12)(33,Ae,2,0,"span",12),s(),g(34,We,2,1,"div",19),o(35,"div",20)(36,"button",21),a(37,"Create Account"),s()()(),o(38,"div",22)(39,"div",23),h(40,"hr"),s(),o(41,"div",24),a(42,"OR"),s(),o(43,"div",23),h(44,"hr"),s()(),o(45,"div",25),h(46,"div",null,0),o(48,"button",26),S("click",function(){return b(c),x(t.registerWithFacebook())}),a(49," Facebook "),s()(),o(50,"p",27),a(51," Already have an account? "),o(52,"a",28),a(53,"Login"),s()()()()()()}if(i&2){let c,v,p,G,J,z,de,ue,pe,fe,ge,K;m(4),l("formGroup",t.registerForm),m(7),y("is-invalid",t.submitted&&((c=t.registerForm.get("firstName"))==null?null:c.errors)),m(3),l("ngIf",t.submitted&&((v=t.registerForm.get("firstName"))==null?null:v.hasError("required"))),m(),l("ngIf",t.submitted&&((p=t.registerForm.get("firstName"))==null?null:p.hasError("minlength"))||((p=t.registerForm.get("firstName"))==null?null:p.hasError("maxlength"))),m(2),y("is-invalid",t.submitted&&((G=t.registerForm.get("lastName"))==null?null:G.errors)),m(3),l("ngIf",t.submitted&&((J=t.registerForm.get("lastName"))==null?null:J.hasError("required"))),m(),l("ngIf",t.submitted&&((z=t.registerForm.get("lastName"))==null?null:z.hasError("minlength"))||((z=t.registerForm.get("lastName"))==null?null:z.hasError("maxlength"))),m(2),y("is-invalid",t.submitted&&((de=t.registerForm.get("email"))==null?null:de.errors)),m(3),l("ngIf",t.submitted&&((ue=t.registerForm.get("email"))==null?null:ue.hasError("required"))),m(),l("ngIf",t.submitted&&((pe=t.registerForm.get("email"))==null?null:pe.hasError("pattern"))),m(2),y("is-invalid",t.submitted&&((fe=t.registerForm.get("password"))==null?null:fe.errors)),m(3),l("ngIf",t.submitted&&((ge=t.registerForm.get("password"))==null?null:ge.hasError("required"))),m(),l("ngIf",t.submitted&&((K=t.registerForm.get("password"))==null?null:K.hasError("minlength"))||((K=t.registerForm.get("password"))==null?null:K.hasError("maxlength"))),m(),l("ngIf",t.errorMessages.length>0)}},dependencies:[F,D,L,P,R,B,V,U,T]});let r=n;return r})();function $e(r,n){r&1&&(o(0,"div",1)(1,"a",2),a(2," Login "),s()())}function Oe(r,n){if(r&1){let u=w();o(0,"div",1)(1,"a",3),S("click",function(){b(u);let i=_();return x(i.resendEmailConfirmationLink())}),a(2," Click here to resend email confirmation link "),s()()}}var Ee=(()=>{let n=class n{constructor(e,i,t,c){this.accountService=e,this.sharedService=i,this.router=t,this.activatedRoute=c,this.success=!0}ngOnInit(){this.accountService.user$.pipe(C(1)).subscribe({next:e=>{e?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:i=>{let t={token:i.get("token"),email:i.get("email")};this.accountService.confirmEmail(t).subscribe({next:c=>{this.sharedService.showNotification(!0,c.value.title,c.value.message)},error:c=>{this.success=!1,this.sharedService.showNotification(!1,"Failed",c.error)}})}})}})}resendEmailConfirmationLink(){this.router.navigateByUrl("/account/send-email/resend-email-confirmation-link")}};n.\u0275fac=function(i){return new(i||n)(d(N),d(M),d(I),d(k))},n.\u0275cmp=E({type:n,selectors:[["app-confirm-email"]],decls:2,vars:2,consts:[["class","container text-center",4,"ngIf"],[1,"container","text-center"],["routerLink","/account/login",1,"btn","btn-primary"],[1,"btn","btn-link",3,"click"]],template:function(i,t){i&1&&g(0,$e,3,0,"div",0)(1,Oe,3,0,"div",0),i&2&&(l("ngIf",t.success),m(),l("ngIf",!t.success))},dependencies:[F,D]});let r=n;return r})();function Qe(r,n){r&1&&(o(0,"span"),a(1," Resend email confirmation link "),s())}function Ze(r,n){r&1&&(o(0,"span"),a(1," Retrieve your username or password "),s())}function He(r,n){r&1&&(o(0,"span",19),a(1," Email is required "),s())}function Je(r,n){r&1&&(o(0,"span",19),a(1," Invalid email address "),s())}function Ke(r,n){if(r&1&&(o(0,"div",20),h(1,"app-validation-messages",21),s()),r&2){let u=_(2);m(),l("errorMessages",u.errorMessages)}}function Xe(r,n){if(r&1){let u=w();o(0,"div",2)(1,"div",3)(2,"main",4)(3,"form",5),S("ngSubmit",function(){b(u);let i=_();return x(i.sendEmail())}),o(4,"div",6)(5,"h1",7),g(6,Qe,2,0,"span",8)(7,Ze,2,0,"span",8),s()(),o(8,"div",9),h(9,"input",10),o(10,"label",11),a(11,"Email"),s(),g(12,He,2,0,"span",12)(13,Je,2,0,"span",12),s(),g(14,Ke,2,1,"div",13),o(15,"div",14)(16,"div",15)(17,"div",16)(18,"button",17),a(19,"Send"),s()()(),o(20,"div",15)(21,"div",16)(22,"button",18),S("click",function(){b(u);let i=_();return x(i.cancel())}),a(23,"Cancel"),s()()()()()()()()}if(r&2){let u,e,i,t=_();m(3),l("formGroup",t.emailForm),m(3),l("ngIf",t.mode.includes("resend-email-confirmation-link")),m(),l("ngIf",t.mode.includes("forgot-username-or-password")),m(2),y("is-invalid",t.submitted&&((u=t.emailForm.get("email"))==null?null:u.errors)),m(3),l("ngIf",t.submitted&&((e=t.emailForm.get("email"))==null?null:e.hasError("required"))),m(),l("ngIf",t.submitted&&((i=t.emailForm.get("email"))==null?null:i.hasError("pattern"))),m(),l("ngIf",t.errorMessages.length>0)}}var Fe=(()=>{let n=class n{constructor(e,i,t,c,v){this.accountService=e,this.sharedService=i,this.formBuilder=t,this.router=c,this.activatedRoute=v,this.emailForm=new j({}),this.submitted=!1,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe(C(1)).subscribe({next:e=>{if(e)this.router.navigateByUrl("/");else{let i=this.activatedRoute.snapshot.paramMap.get("mode");i&&(this.mode=i,this.initializeForm())}}})}initializeForm(){this.emailForm=this.formBuilder.group({email:["",[f.required,f.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]]})}sendEmail(){this.submitted=!0,this.errorMessages=[],this.emailForm.valid&&this.mode&&(this.mode.includes("resend-email-confirmation-link")?this.accountService.resendEmailConfirmationLink(this.emailForm.get("email")?.value).subscribe({next:e=>{this.sharedService.showNotification(!0,e.value.title,e.value.message),this.router.navigateByUrl("/account/login")},error:e=>{e.error.errors?this.errorMessages=e.error.errors:this.errorMessages.push(e.error)}}):this.mode.includes("forgot-username-or-password")&&this.accountService.forgotUsernameOrPassword(this.emailForm.get("email")?.value).subscribe({next:e=>{this.sharedService.showNotification(!0,e.value.title,e.value.message),this.router.navigateByUrl("/account/login")},error:e=>{e.error.errors?this.errorMessages=e.error.errors:this.errorMessages.push(e.error)}}))}cancel(){this.router.navigateByUrl("/account/login")}};n.\u0275fac=function(i){return new(i||n)(d(N),d(M),d(q),d(I),d(k))},n.\u0275cmp=E({type:n,selectors:[["app-send-email"]],decls:2,vars:1,consts:[[1,"mt-5"],["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"card","col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",1,"form-signin",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[4,"ngIf"],[1,"form-floating","mb-3"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["class","text-danger",4,"ngIf"],["class","form-floatin",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-success"],["type","button",1,"btn","btn-block","btn-danger",3,"click"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(i,t){i&1&&(o(0,"div",0),g(1,Xe,24,8,"div",1),s()),i&2&&(m(),l("ngIf",t.mode))},dependencies:[F,L,P,R,B,V,U,T]});let r=n;return r})();function Ye(r,n){r&1&&(o(0,"span",19),a(1," New Password is required "),s())}function et(r,n){r&1&&(o(0,"span",19),a(1," New Password must be at least 6, and maximum 15 characters "),s())}function tt(r,n){if(r&1&&(o(0,"div",20),h(1,"app-validation-messages",21),s()),r&2){let u=_(2);m(),l("errorMessages",u.errorMessages)}}function it(r,n){if(r&1){let u=w();o(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),S("ngSubmit",function(){b(u);let i=_();return x(i.resetPassword())}),o(4,"div",5)(5,"h1",6),a(6," Change your password "),s()(),o(7,"div",7),h(8,"input",8),o(9,"label",9),a(10,"Email"),s()(),o(11,"div",7),h(12,"input",10),o(13,"label",11),a(14,"New Password"),s(),g(15,Ye,2,0,"span",12)(16,et,2,0,"span",12),s(),g(17,tt,2,1,"div",13),o(18,"div",14)(19,"div",15)(20,"div",16)(21,"button",17),a(22,"Change Password"),s()()(),o(23,"div",15)(24,"div",16)(25,"button",18),a(26,"Cancel"),s()()()()()()()()}if(r&2){let u,e,i,t=_();m(3),l("formGroup",t.resetPasswordForm),m(9),y("is-invalid",t.submitted&&((u=t.resetPasswordForm.get("newPassword"))==null?null:u.errors)),m(3),l("ngIf",t.submitted&&((e=t.resetPasswordForm.get("newPassword"))==null?null:e.hasError("required"))),m(),l("ngIf",t.submitted&&((i=t.resetPasswordForm.get("newPassword"))==null?null:i.hasError("minlength"))||((i=t.resetPasswordForm.get("newPassword"))==null?null:i.hasError("maxlength"))),m(),l("ngIf",t.errorMessages.length>0)}}var Ie=(()=>{let n=class n{constructor(e,i,t,c,v){this.accountService=e,this.sharedService=i,this.formBuilder=t,this.router=c,this.activatedRoute=v,this.resetPasswordForm=new j({}),this.submitted=!1,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe(C(1)).subscribe({next:e=>{e?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:i=>{this.token=i.get("token"),this.email=i.get("email"),this.token&&this.email?this.initializeForm(this.email):this.router.navigateByUrl("/account/login")}})}})}initializeForm(e){this.resetPasswordForm=this.formBuilder.group({email:[{value:e,disabled:!0}],newPassword:["",[f.required,f.minLength(6),f.maxLength(15)]]})}resetPassword(){if(this.submitted=!0,this.errorMessages=[],this.resetPasswordForm.valid&&this.email&&this.token){let e={token:this.token,email:this.email,newPassword:this.resetPasswordForm.get("newPassword")?.value};this.accountService.resetPassword(e).subscribe({next:i=>{this.sharedService.showNotification(!0,i.value.title,i.value.message),this.router.navigateByUrl("/account/login")},error:i=>{i.error.errors?this.errorMessages=i.error.errors:this.errorMessages.push(i.error)}})}}};n.\u0275fac=function(i){return new(i||n)(d(N),d(M),d(q),d(I),d(k))},n.\u0275cmp=E({type:n,selectors:[["app-reset-password"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",1,"form-signin",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"form-floating","mb-3"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["formControlName","newPassword","type","password","placeholder","New Password",1,"form-control"],["for","newPassword"],["class","text-danger",4,"ngIf"],["class","form-floatin",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-success"],["type","button","routerLink","/account/login",1,"btn","btn-block","btn-danger"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(i,t){i&1&&g(0,it,27,6,"div",0),i&2&&l("ngIf",t.token&&t.email)},dependencies:[F,D,L,P,R,B,V,U,T]});let r=n;return r})();var ce=class{constructor(n,u,e,i,t){this.firstName=n,this.lastName=u,this.userId=e,this.accessToken=i,this.provider=t}};function rt(r,n){r&1&&(o(0,"span",18),a(1," First name is required "),s())}function nt(r,n){r&1&&(o(0,"span",18),a(1," First name must be at least 3, and maximum 15 characters "),s())}function ot(r,n){r&1&&(o(0,"span",18),a(1," Last name is required "),s())}function st(r,n){r&1&&(o(0,"span",18),a(1," Last name must be at least 3, and maximum 15 characters "),s())}function at(r,n){if(r&1&&(o(0,"div",19),h(1,"app-validation-messages",20),s()),r&2){let u=_(2);m(),l("errorMessages",u.errorMessages)}}function mt(r,n){if(r&1){let u=w();o(0,"div",2)(1,"div",3)(2,"main",4)(3,"form",5),S("ngSubmit",function(){b(u);let i=_();return x(i.register())}),o(4,"div",6)(5,"h3",7),a(6," Creating an account using your "),o(7,"span",8),a(8),ve(9,"titlecase"),s()()(),o(10,"div",9),h(11,"input",10),o(12,"label",11),a(13,"First name"),s(),g(14,rt,2,0,"span",12)(15,nt,2,0,"span",12),s(),o(16,"div",9),h(17,"input",13),o(18,"label",14),a(19,"Last name"),s(),g(20,ot,2,0,"span",12)(21,st,2,0,"span",12),s(),g(22,at,2,1,"div",15),o(23,"div",16)(24,"button",17),a(25,"Create Account"),s()()()()()()}if(r&2){let u,e,i,t,c,v,p=_();m(3),l("formGroup",p.registerForm),m(5),he(_e(9,11,p.provider)),m(3),y("is-invalid",p.submitted&&((u=p.registerForm.get("firstName"))==null?null:u.errors)),m(3),l("ngIf",p.submitted&&((e=p.registerForm.get("firstName"))==null?null:e.hasError("required"))),m(),l("ngIf",p.submitted&&((i=p.registerForm.get("firstName"))==null?null:i.hasError("minlength"))||((i=p.registerForm.get("firstName"))==null?null:i.hasError("maxlength"))),m(2),y("is-invalid",p.submitted&&((t=p.registerForm.get("lastName"))==null?null:t.errors)),m(3),l("ngIf",p.submitted&&((c=p.registerForm.get("lastName"))==null?null:c.hasError("required"))),m(),l("ngIf",p.submitted&&((v=p.registerForm.get("lastName"))==null?null:v.hasError("minlength"))||((v=p.registerForm.get("lastName"))==null?null:v.hasError("maxlength"))),m(),l("ngIf",p.errorMessages.length>0)}}var Ne=(()=>{let n=class n{constructor(e,i,t,c){this.accountService=e,this.router=i,this.activatedRoute=t,this.formBuilder=c,this.registerForm=new j({}),this.submitted=!1,this.provider=null,this.access_token=null,this.userId=null,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe(C(1)).subscribe({next:e=>{e?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:i=>{this.provider=this.activatedRoute.snapshot.paramMap.get("provider"),this.access_token=i.get("access_token"),this.userId=i.get("userId"),this.provider&&this.access_token&&this.userId&&(this.provider==="facebook"||this.provider==="google")?this.initializeForm():this.router.navigateByUrl("/account/register")}})}})}initializeForm(){this.registerForm=this.formBuilder.group({firstName:["",[f.required,f.minLength(3),f.maxLength(15)]],lastName:["",[f.required,f.minLength(3),f.maxLength(15)]]})}register(){if(this.submitted=!0,this.errorMessages=[],this.registerForm.valid&&this.userId&&this.access_token&&this.provider){let e=this.registerForm.get("firstName")?.value,i=this.registerForm.get("lastName")?.value,t=new ce(e,i,this.userId,this.access_token,this.provider);this.accountService.registerWithThirdParty(t).subscribe({next:c=>{this.router.navigateByUrl("/")},error:c=>{c.error.errors?this.errorMessages=c.error.errors:this.errorMessages.push(c.error)}})}}};n.\u0275fac=function(i){return new(i||n)(d(N),d(I),d(k),d(q))},n.\u0275cmp=E({type:n,selectors:[["app-register-with-third-party"]],decls:2,vars:1,consts:[[1,"mt-5"],["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"card","col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"text-warning"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last name",1,"form-control"],["for","lastName"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(i,t){i&1&&(o(0,"div",0),g(1,mt,26,13,"div",1),s()),i&2&&(m(),l("ngIf",t.provider&&t.access_token&&t.userId))},dependencies:[F,L,P,R,B,V,U,T,be]});let r=n;return r})();var lt=[{path:"login",component:we},{path:"register",component:Ce},{path:"confirm-email",component:Ee},{path:"send-email/:mode",component:Fe},{path:"reset-password",component:Ie},{path:"register/third-party/:provider",component:Ne}],ke=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=Y({type:n}),n.\u0275inj=X({imports:[$.forChild(lt),$]});let r=n;return r})();var hi=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=Y({type:n}),n.\u0275inj=X({imports:[xe,ke,ye,$]});let r=n;return r})();export{hi as AccountModule};
