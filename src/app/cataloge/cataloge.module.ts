import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogeComponent } from './cataloge.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { YourNameComponent } from './pages/your-name/your-name.component';
import { ChangeColorComponent } from './pages/change-color/change-color.component';
import { PageComponent } from './pages/page/page.component';
import { CatalogeRoutingModule } from './cataloge-routing.module';
import { InventionsComponent } from './pages/inventions/inventions.component';



@NgModule({
  declarations: [
    CatalogeComponent,
    EcommerceComponent,
    ToDoComponent,
    BlogComponent,
    ShoppingCartComponent,
    YourNameComponent,
    ChangeColorComponent,
    PageComponent,
    InventionsComponent,
  ],
  imports: [
    CommonModule,
    CatalogeRoutingModule
  ],
  exports: [
    CatalogeComponent
  ]
})
export class CatalogeModule { }
