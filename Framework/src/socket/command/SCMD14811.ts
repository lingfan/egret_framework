class SCMD14811 {
	public boss_id:number;
	public hp:number;
	public max_hp:number;
	public shield_rate:number;
	public my_hit:number;
	public boss_round_hits:any[]=[NodeBoss_round_hits];

	public list=[{name:"boss_id",type:"Int32"},{name:"hp",type:"Int64"},{name:"max_hp",type:"Int64"},{name:"shield_rate",type:"Int8"},{name:"my_hit",type:"Int64"},{name:"boss_round_hits",type:"array"}];
	public constructor() {}
}