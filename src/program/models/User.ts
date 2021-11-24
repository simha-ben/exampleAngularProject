export class User {
 
   declare id: number 
   declare name: { 
      firstName: string;
      LastName: string;
    };
   declare email: string;
   declare phone: string;
   declare address: string;
   declare password: { 
      pwd: string;
      confirmPwd: string;
    };
   declare gender: string;
 /**
  *
  */
/* constructor() {
   this.name={LastName:"",firstName:""};
   this.password={confirmPwd:"",pwd:""};
  }
  */
}
