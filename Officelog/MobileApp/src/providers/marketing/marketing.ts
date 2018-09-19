import { ServiceItems } from "../../pages/marketing-log-form/marketing-log-form";

export interface IMarketinglog{
    id: number;
    name: string;
    contactNumber: number;
    softwareInterested: string;
    rateUs: string;
    serviceInterested: string;
    rateUsForNo: string;
    currentScenario: string;
    suggestionForNo: string;
    suggestionForYes: string;
    area: string;
    fee: number;
    date:Date;
    Conversion:string;
    serviceItems : ServiceItems[];
  
}