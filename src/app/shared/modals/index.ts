// import components first
import { CreateFirmComponent } from './create-firm/create-firm.component';
import { CreateFundComponent } from './create-fund/create-fund.component';
import { CreateStartegyComponent } from './create-startegy/create-startegy.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

// Add it to a named exported object
export const modals: any[] = [
    CreateFirmComponent,
    CreateFundComponent,
    CreateStartegyComponent,
    CreateContactComponent,
    CreateVehicleComponent
];

// Export the Component

