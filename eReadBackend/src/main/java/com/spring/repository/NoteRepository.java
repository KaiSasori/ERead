package com.spring.repository;

import com.spring.pojo.Note;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jinkai on 2017/4/26.
 */
public interface NoteRepository extends CrudRepository<Note, Integer> {

    @Modifying
    @Query("update Note a set a.note_content=?1 where a.note_id=?2")
    public int updateNoteByID(String note_content,Integer note_id);

    @Query("select a from Note a where a.username=?1")
    public Iterable<Note> findAllByUsername(String username);
}
