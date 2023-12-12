
function displayCharactersInfo() {
    elf.info();
    orc.info();
    // tv("\n");
}

dw('전투시작');

// let elf = new Character("엠피스", 200, 30);
let elf=new Character();
var orc = new Monster("오크전사", 100, 10,100,40);
elf.name='엠피스';
elf.hp=200;
elf.max_hp=elf.hp;
elf.attack=30;
elf.exp = 0;
elf.next_exp = 300;
elf.gold=0;

function proc_battle(){

	var elf_attack = r(elf.attack);
	var orc_attack = r(orc.attack);

	hr();
	dw("플레이어 데미지:"+elf_attack);
	hr();
	dw("몬스터 데미지:"+orc_attack);
	hr();
	
	elf.hp = elf.hp - orc_attack;		// 1~10 랜덤 뎀
	orc.hp = orc.hp - elf_attack;	
	
    elf.info();
    orc.info();
}


while(true){
    proc_battle();

    if(elf.hp<=0||orc.hp<=0){
        br()
        hr();
        dw('게임종료');
        br()
        hr();
        elf.exp = elf.exp + orc.exp;
        br();
        dw(orc.gold+" 골드를 얻었습니다.");
        elf.gold = elf.gold + orc.gold;
        br()
        hr();
        dw('불쌍한 '+orc.name+', '+elf.name+'에게 경험치'+elf.exp+' 을 주고 죽었습니다.');
        break;
    }
}

