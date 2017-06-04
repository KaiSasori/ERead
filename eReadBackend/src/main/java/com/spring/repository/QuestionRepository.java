package com.spring.repository;

import com.spring.pojo.Question;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface QuestionRepository extends CrudRepository<Question, Integer> {

    @Query("select a from Question a where a.username=?1")
    public Iterable<Question> findAllByUsername(String username);

    @Query("select a from Question a where a.bookname=?1")
    public Iterable<Question> findAllByBookname(String bookname);

    @Modifying
    @Query("update Question a set a.question=?1 where a.question_id=?2")
    public int updateQuestion(String question,Integer question_id);
}
