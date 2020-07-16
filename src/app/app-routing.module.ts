import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import("./pages/reset-password/reset-password.module").then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'felsefe',
    loadChildren: () => import('./pages/felsefe/felsefe.module').then( m => m.FelsefePageModule)
  },
  {
    path: 'kisiselgelisim',
    loadChildren: () => import('./pages/kisiselgelisim/kisiselgelisim.module').then( m => m.KisiselgelisimPageModule)
  },
  {
    path: 'tarih',
    loadChildren: () => import('./pages/tarih/tarih.module').then( m => m.TarihPageModule)
  },
  {
    path: 'cocuk',
    loadChildren: () => import('./pages/cocuk/cocuk.module').then( m => m.CocukPageModule)
  },
  {
    path: 'ask',
    loadChildren: () => import('./pages/ask/ask.module').then( m => m.AskPageModule)
  },
  {
    path: 'book-felsefe-one',
    loadChildren: () => import('./pages/book-felsefe-one/book-felsefe-one.module').then( m => m.BookFelsefeOnePageModule)
  },
  {
    path: 'book-cocuk-one',
    loadChildren: () => import('./pages/book-cocuk-one/book-cocuk-one.module').then( m => m.BookCocukOnePageModule)
  },
  {
    path: 'book-ask-one',
    loadChildren: () => import('./pages/book-ask-one/book-ask-one.module').then( m => m.BookAskOnePageModule)
  },
  {
    path: 'book-ask-two',
    loadChildren: () => import('./pages/book-ask-two/book-ask-two.module').then( m => m.BookAskTwoPageModule)
  },
  {
    path: 'book-ask-three',
    loadChildren: () => import('./pages/book-ask-three/book-ask-three.module').then( m => m.BookAskThreePageModule)
  },
  {
    path: 'book-ask-four',
    loadChildren: () => import('./pages/book-ask-four/book-ask-four.module').then( m => m.BookAskFourPageModule)
  },
  {
    path: 'book-felsefe-two',
    loadChildren: () => import('./pages/book-felsefe-two/book-felsefe-two.module').then( m => m.BookFelsefeTwoPageModule)
  },
  {
    path: 'book-felsefe-three',
    loadChildren: () => import('./pages/book-felsefe-three/book-felsefe-three.module').then( m => m.BookFelsefeThreePageModule)
  },
  {
    path: 'book-felsefe-four',
    loadChildren: () => import('./pages/book-felsefe-four/book-felsefe-four.module').then( m => m.BookFelsefeFourPageModule)
  },
  {
    path: 'book-cocuk-two',
    loadChildren: () => import('./pages/book-cocuk-two/book-cocuk-two.module').then( m => m.BookCocukTwoPageModule)
  },
  
  {
    path: 'book-kisiselgelisim-two',
    loadChildren: () => import('./pages/book-kisiselgelisim-two/book-kisiselgelisim-two.module').then( m => m.BookKisiselgelisimTwoPageModule)
  },
  {
    path: 'book-kisiselgelisim-three',
    loadChildren: () => import('./pages/book-kisiselgelisim-three/book-kisiselgelisim-three.module').then( m => m.BookKisiselgelisimThreePageModule)
  },
  {
    path: 'book-tarih-one',
    loadChildren: () => import('./pages/book-tarih-one/book-tarih-one.module').then( m => m.BookTarihOnePageModule)
  },
  {
    path: 'book-tarih-two',
    loadChildren: () => import('./pages/book-tarih-two/book-tarih-two.module').then( m => m.BookTarihTwoPageModule)
  },
  {
    path: 'book-tarih-three',
    loadChildren: () => import('./pages/book-tarih-three/book-tarih-three.module').then( m => m.BookTarihThreePageModule)
  },
  {
    path: 'book-tarih-four',
    loadChildren: () => import('./pages/book-tarih-four/book-tarih-four.module').then( m => m.BookTarihFourPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
