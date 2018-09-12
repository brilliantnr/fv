package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;


public class Util {
	/*
	Consumer<T>  	void accept(T t) 	- C,U,D
	Function<T,R>  	R apply(T t) 		: R
	Predicate<T>	boolean test(T t) 	: Login
	Supplier<T>		T get()				: count
	UnaryOperator<T>
	 * 	*/
	public static Consumer<Integer> Logi = System.out::println;
	public static Consumer<String> Log = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Predicate<String> isnull = s -> s.equals("");
	public static Predicate<String> notNull = isnull.negate();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
	//public static Function<HttpServletRequest,String> ctx = x -> x.getContextPath();
	
}
