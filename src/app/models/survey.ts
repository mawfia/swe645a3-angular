export class Survey {
	constructor(
		public firstName: string,
    public lastName: string,
    public address: string,
		public city: string,
		public state: string,
    public telephone: string,
    public email: string,
		public dateOfSurvey: Date = new Date(),
    public referral: number = 0,
    public likeMost: number = 0,
    public recommend: number = 0,
    public comments?: string,
		public id?: number
  ){}
}
