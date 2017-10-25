import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareOverzichtComponent } from './hardware-overzicht/hardware-overzicht.component';
import { HardwareToevoegenComponent } from './hardware-toevoegen/hardware-toevoegen.component';
import { HardwareVerwijderenComponent } from './hardware-verwijderen/hardware-verwijderen.component';
import { HardwareWijzigenComponent } from './hardware-wijzigen/hardware-wijzigen.component';
import {HardwareService} from './hardware-service.service'
@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent, HardwareWijzigenComponent],
  exports:[HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent, HardwareWijzigenComponent],
  providers:[HardwareService]
})
export class HardwareModule { }
