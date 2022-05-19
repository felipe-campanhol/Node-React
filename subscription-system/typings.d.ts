import { Currency } from "aws-sdk/clients/route53domains";

export interface AccessType {
    _id: string;
    access_name: string;
    price: Currency;
}
