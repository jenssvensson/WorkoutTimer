import { WorkoutService } from './common/workout/workout.service';
import { SoundService } from './timer/sound/sound.service';
import { AngularMaterialModule } from './common/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer/timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondsMinutesPipe } from './common/pipes/seconds-minutes.pipe';
import { CapitalizePipe } from './common/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    NavbarComponent,
    SecondsMinutesPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [SoundService, WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
