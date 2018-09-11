package com.gms.web.lambda;
/*
람다식은 
식 : expression ${tot-page}
함수 : function aa(p)(x=2+p; return x;)
연신삭이 하나면 {} 생략가능



* */
public class LambdaIntro {
	public static void main(String[] args) {
		int a = Num.execute((t1,t2)-> t1>t2?t1:t2, 5, 3);
		System.out.println(a);

	}
	@FunctionalInterface
	interface Calc<T>{T execute(T t1, T t2);}
	static class Num{
		public static <T> T execute(Calc<T> c,T t1, T t2 ) {
			return c.execute(t1, t2);
		}
	}
}