package com.spring.repository;

import com.spring.pojo.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/25.
 */
public interface UserRepository extends CrudRepository<User, Long> {

}
