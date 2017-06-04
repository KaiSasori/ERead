package com.spring.controller;

import com.spring.pojo.Answer;
import com.spring.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Jinkai on 2017/4/26.
 */
@Controller
@RequestMapping(path="/answer")
public class AnswerController {
    @Autowired
    private AnswerRepository answerRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewAnswer(@RequestParam Integer question_id
            , @RequestParam String username, @RequestParam String time
            , @RequestParam String answer){
        Answer a = new Answer();
        a.setQuestion_id(question_id);
        a.setUsername(username);
        a.setTime(time);
        a.setAnswer(answer);
        answerRepository.save(a);
        return "Answer Saved";
    }

    @GetMapping(path="/allByQID")
    public @ResponseBody Iterable<Answer> getAllAnswersByQuestionID(@RequestParam Integer question_id){
        return answerRepository.findAllByQuestionID(question_id);
    }
}
