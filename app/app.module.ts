import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReativeComponent } from './reative/reative.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { FirstComponent } from './component/first-component/first-component';
import { EntryComponent } from './entry/entry.component';
import { StudentInfoComponent } from './entry/student-info/student-info.component';
import { ParentInfoComponent } from './entry/parent-info/parent-info.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReativeComponent,
    ParentComponent,
    ChildComponent,
    ParentPageComponent,
    ChildPageComponent,
    FirstComponent,
    EntryComponent,
    StudentInfoComponent,
    ParentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StudentInfoComponent,ParentInfoComponent]
})
export class AppModule { }
