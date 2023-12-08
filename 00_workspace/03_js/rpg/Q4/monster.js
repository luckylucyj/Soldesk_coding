function Monster(name, hp, attack) {
    this.name = name;	// 이름
    this.hp = hp;
    this.maxHp = hp;	// 체력. 생명력
    this.attack = attack;	// 공격력

    this.info = function () {
        document.write(this.name + "(" + this.hp + "/" + this.maxHp + ")");
    }
}