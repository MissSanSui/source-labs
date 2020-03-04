package com.frame.web.dao;

import com.frame.web.domain.User;
import org.apache.ibatis.annotations.*;

import java.util.List;


@Mapper
public interface UserMapper {

	@Insert("insert sys_user(id,userName) values(#{id},#{userName})")
	void insert(User u);
	
	@Update("update sys_user set userName = #{userName} where id=#{id} ")
	void update(User u);
	
	@Delete("delete from sys_user where id=#{id} ")
	void delete(@Param("id") String id);
	
	@Select("select id,userName from sys_user where id=#{id} ")
	User find(@Param("id") String id);
	
	//注：方法名和要UserMapper.xml中的id一致
	List<User> query(@Param("userName") String userName);
	
	@Delete("delete from sys_user")
	void deleteAll();
}
