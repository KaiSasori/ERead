package com.spring.repository;

import com.spring.pojo.Compile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface CompileRepository  extends CrudRepository<Compile, Integer> {
    @Query("select a from Compile a where a.username=?1")
    public Iterable<Compile> findAllByUsername(String username);
}
