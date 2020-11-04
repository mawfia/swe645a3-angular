import { Likes } from './likes';

export class Survey {
	constructor(
		public firstName?: string,
    public lastName?: string,
    public address?: string,
		public city?: string,
		public state?: string,
		public zip?: string,
    public telephone?: string,
    public email?: string,
		public dateOfSurvey: Date = new Date(),
    public referral: any = "1",
    public likeMost: any = new Likes(),
    public recommend: any = "Likely",
		public raffle?: string,
    public comments?: string,
		public id?: number
  ){}
}
