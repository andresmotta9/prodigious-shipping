import { Person } from './Person';

export class Shipping {
    public from: Person;
    public to: Person;
    public weight: number = 0;
    public shippingOption: number = 0;
}