import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductResolverService } from './catalog/product-resolver.service';
import { CartRouteActivator } from './cart/cart-route-activator.service';

function canDeactivateCart() {
  return window.confirm(
    'Are you sure you want to leave your cart without checking out?'
  );
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: { products: ProductResolverService },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [CartRouteActivator],
    canDeactivate: ['canDeactivateCart'],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: 'canDeactivateCart', useValue: canDeactivateCart }],
})
export class AppRoutingModule {}
