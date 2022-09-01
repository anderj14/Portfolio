import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ChangeColorComponent } from './pages/change-color/change-color.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { PageComponent } from './pages/page/page.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { YourNameComponent } from './pages/your-name/your-name.component';
import { CatalogeComponent } from './cataloge.component';
import { InventionsComponent } from './pages/inventions/inventions.component';

const routes: Routes = [
  {path: '', component: CatalogeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'inventions', component: InventionsComponent},
  {path: 'change-color', component: ChangeColorComponent},
  {path: 'ecommerce', component: EcommerceComponent},
  {path: 'page', component: PageComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'todo', component: ToDoComponent},
  {path: 'your-name', component: YourNameComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogeRoutingModule { }
