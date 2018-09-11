package com.gms.web.generic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
Generic : 타입을 생성하는데
class Member{} -> static 상태로 Member 타입을 생성
List<Member>
<-> Dynamic한 타입 생성
generic - 캐스팅 안해도 됨. 동적으로 생성하니까
타입의 안정성 제공, 형변환 생략
T : type
*/
public class genericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		
		System.out.println("===========[1]===========");
		Item<String> itName = new Item<>();
		itName.setOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println("삼성 신상폰 이름은 : \n"+itName.getOne()+itVers.getOne());
		System.out.println("===========2]===========");
		Item<List<String>> it = new Item<>();
		//for문 제거해야함! 자바8는 for문 안쓴다
		it.setSome(Arrays.asList(new String[] {"Hello", "world","Generic"}));
		System.out.println(it.getSome());
		System.out.println("===========[3]===========");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
		
	}

}
