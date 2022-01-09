import { ITest, IPsychologyTest } from "./entities";

export interface IFetchTests {
  error: string;
  tests: ITest[];
}



export interface IFetchMBTI {
  error: string;
  mbti: IPsychologyTest;
}




export interface IFetchCreateMbti {
  error: string;
  mbtiResult: any 
}