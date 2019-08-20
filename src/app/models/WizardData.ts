import { Shipping } from './Shipping';

export interface WizardData {    
    visibility: Boolean;
    wizardContext: Shipping;
    onAction: (action?: string) => void;
};