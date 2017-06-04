package com.spring.controller;

import com.spring.pojo.Book;
import com.spring.repository.BookRepository;
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
@RequestMapping(path="/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewBook(@RequestParam String bookname
            ,@RequestParam String author,@RequestParam String introduction
            ,@RequestParam String content){
        Book book = new Book();
        book.setBookname(bookname);
        book.setAuthor(author);
        book.setIntroduction(introduction);
        book.setContent(content);
        bookRepository.save(book);
        return "Book Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @Transactional
    @GetMapping(path="/increase")
    public @ResponseBody String increaseLikeNumber(@RequestParam Integer book_id){
        bookRepository.increase(book_id);
        return "Like Number++";
    }
}
