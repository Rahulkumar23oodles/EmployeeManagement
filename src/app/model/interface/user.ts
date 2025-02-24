export interface User {
    firstName: string;
    middleName: string;
    lastName: string;
    userId: number;
    altMobileNo: string;
    mobileNo: string;
    emailId: string;
  }
  export interface ApiResponsemodel{
    message:string,
    result:boolean,
    data:[]
}
  