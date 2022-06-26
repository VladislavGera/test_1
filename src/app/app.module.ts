import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../../src/material.module';
import { CounterComponent } from './counter/counter/counter.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { OutputComponent } from './counter/output/output.component';
import { couterReducer } from './counter/state/counter.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent, ButtonsComponent, OutputComponent],
  imports: [
    BrowserModule,
    MaterialExampleModule,
    AppRoutingModule,
    MatNativeDateModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: couterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
