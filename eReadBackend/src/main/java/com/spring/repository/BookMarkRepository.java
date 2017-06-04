package com.spring.repository;

import com.spring.pojo.BookMark;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface BookMarkRepository  extends CrudRepository<BookMark, Integer> {

    @Query("select a from BookMark a where a.username=?1")
    public Iterable<BookMark> findAllByUsername(String username);
}
