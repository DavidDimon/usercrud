package br.com.dimon.usercrud.constant;

public class Constant {

    public static final String USER_BY_PARAM_QUERY = "select * from user where name like %?1% or username like %?1% or email like %?1%";
}
