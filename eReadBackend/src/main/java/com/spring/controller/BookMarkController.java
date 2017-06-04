package com.spring.controller;

import com.spring.pojo.BookMark;
import com.spring.repository.BookMarkRepository;
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
@RequestMapping(path="/bookmark")
public class BookMarkController {
    @Autowired
    private BookMarkRepository bookMarkRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewBookMark(@RequestParam String username
            ,@RequestParam String bookname,@RequestParam String time
            ,@RequestParam String content,@RequestParam String location){
        BookMark bookMark = new BookMark();
        bookMark.setUsername(username);
        bookMark.setBookname(bookname);
        bookMark.setTime(time);
        bookMark.setContent(content);
        bookMark.setLocation(location);
        bookMarkRepository.save(bookMark);
        return "BookMark Saved";
    }

    @GetMapping(path="/delete")
    public  @ResponseBody String deleteBookMarkByID(@RequestParam Integer bm_id){
        bookMarkRepository.delete(bm_id);
        return "BookMark Deleted";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<BookMark> getAllBookMarks(@RequestParam String username){
        return bookMarkRepository.findAllByUsername(username);
    }
}
