// function Character(name, hp, attack) {
//     this.name = name;	// 이름
//     this.hp = hp;	// 체력. 생명력
//     this.maxHp = hp;
//     this.attack = attack;	// 공격력
//     this.exp;	// 경험치
//     this.next_exp;	// 필요 경험치
//     this.money;


// 	this.info = function(){
// 		document.write("["+this.name+"(💖"+this.hp+ " / "+this.maxHp+")]"+"(exp: "+this.exp+"/"+this.next_exp+")");
// 	}
// }



function Character(){
	this.name;	// 이름
	this.hp;	// 체력. 생명력
	this.max_hp;	// 체력. 생명력
	this.attack;	// 공격력

	this.exp;	// 경험치
	this.next_exp;	// 필요 경험치

	this.gold;	// 보유금

	this.info = function(){
		document.write("["+this.name+"(💖"+this.hp+ " / "+this.max_hp+")]"+"(exp: "+this.exp+"/"+this.next_exp+")"
			+"🍁:"+this.gold
		);
	}
}
