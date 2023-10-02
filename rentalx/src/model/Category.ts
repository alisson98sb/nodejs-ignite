import { v4 as uuidV4 } from "uuid";


class Category {
  id? : string;  //Como estamos usando a biblioteca uuid, salvaremos como string
  name: string;
  description: string;
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
} 

export { Category };