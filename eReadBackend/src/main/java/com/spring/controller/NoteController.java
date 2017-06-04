package com.spring.controller;

import com.spring.pojo.Note;
import com.spring.repository.NoteRepository;
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
@RequestMapping(path="/note")
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewNote(@RequestParam String username
            , @RequestParam String bookname, @RequestParam String time
            , @RequestParam String content, @RequestParam String note_content){
        Note note = new Note();
        note.setUsername(username);
        note.setBookname(bookname);
        note.setTime(time);
        note.setContent(content);
        note.setNote_content(note_content);
        noteRepository.save(note);
        return "Note Saved";
    }

    @GetMapping(path="/delete")
    public  @ResponseBody String deleteNoteByID(@RequestParam Integer note_id){
        noteRepository.delete(note_id);
        return "Note Deleted";
    }

    //修改前启用事务
    @Transactional
    @GetMapping(path="/update")
    public @ResponseBody String updateNote(@RequestParam Integer note_id
            , @RequestParam String note_content){
        noteRepository.updateNoteByID(note_content,note_id);
        return "Note Updated";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Note> getAllNotes(@RequestParam String username){
        return noteRepository.findAllByUsername(username);
    }
}
