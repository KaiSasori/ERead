package com.spring.controller;

import com.spring.pojo.Question;
import com.spring.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Jinkai on 2017/4/26.
 */
@Controller
@RequestMapping(path="/question")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewQuestion(@RequestParam String bookname
            ,@RequestParam String username,@RequestParam String time
            ,@RequestParam String location,@RequestParam String question){
        Question q = new Question();
        q.setBookname(bookname);
        q.setUsername(username);
        q.setTime(time);
        q.setLocation(location);
        q.setQuestion(question);
        questionRepository.save(q);
        return "Question Saved";
    }

    @GetMapping(path="/allByBook")
    public @ResponseBody Iterable<Question> getAllQuestionsByBookname(@RequestParam String bookname){
        return questionRepository.findAllByBookname(bookname);
    }

    @GetMapping(path="/allByUser")
    public @ResponseBody Iterable<Question> getAllQuestionsByUsername(@RequestParam String username){
        return questionRepository.findAllByUsername(username);
    }

    @GetMapping(path="/delete")
    public  @ResponseBody String deleteQuestionByID(@RequestParam Integer question_id){
        questionRepository.delete(question_id);
        return "Question Deleted";
    }

    //修改前启用事务
    @Transactional
    @GetMapping(path="/update")
    public @ResponseBody String updateNote(@RequestParam Integer question_id
            , @RequestParam String question){
        questionRepository.updateQuestion(question,question_id);
        return "Question Updated";
    }
}
