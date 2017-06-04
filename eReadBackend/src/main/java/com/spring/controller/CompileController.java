package com.spring.controller;

import com.spring.pojo.Compile;
import com.spring.repository.CompileRepository;
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
@RequestMapping(path="/compile")
public class CompileController {
    @Autowired
    private CompileRepository compileRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewCompile(@RequestParam String username
            , @RequestParam String location, @RequestParam String result){
        Compile compile = new Compile();
        compile.setUsername(username);
        compile.setLocation(location);
        compile.setResult(result);
        compileRepository.save(compile);
        return "Compile Saved";
    }

    @GetMapping(path="/allByUsername")
    public @ResponseBody Iterable<Compile> getAllAnswersByQuestionID(@RequestParam String username){
        return compileRepository.findAllByUsername(username);
    }
}
