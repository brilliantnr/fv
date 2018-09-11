package com.gms.web.lambda;

import java.util.function.Predicate;

/*
Consumer<T>  	void accept(T t) 	- C,U,D
Function<T,R>  	R apply(T t) 		: R
Predicate<T>	boolean test(T t) 	: Login
Supplier<T>		T get()				: count
UnaryOperator<T>
*/

public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p= s-> s.length() ==0;
		String x= "";
		String y = "hello";
		String r = (p.test(x)) ?  "NULL":"NOT NULL";
		System.out.println(r);
	}
}
