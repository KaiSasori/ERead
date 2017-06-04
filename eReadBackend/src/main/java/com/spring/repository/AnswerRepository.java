package com.spring.repository;

import com.spring.pojo.Answer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface AnswerRepository extends CrudRepository<Answer, Integer> {

    @Query("select a from Answer a where a.question_id=?1")
    public Iterable<Answer> findAllByQuestionID(Integer question_id);
}
