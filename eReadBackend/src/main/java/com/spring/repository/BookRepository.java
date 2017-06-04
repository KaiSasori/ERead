package com.spring.repository;

import com.spring.pojo.Book;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface BookRepository extends CrudRepository<Book, Long> {

    @Modifying
    @Query("update Book a set a.like_number=a.like_number+1 where a.book_id=?1")
    public int increase(Integer book_id);
}
