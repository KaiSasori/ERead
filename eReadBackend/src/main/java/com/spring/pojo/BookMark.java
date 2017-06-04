package com.spring.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Jinkai on 2017/4/26.
 */
@Entity
public class BookMark {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer bm_id;

    private String username;

    private String bookname;

    private String time;

    private String content;

    private String location;

    public Integer getBm_id() {
        return bm_id;
    }

    public void setBm_id(Integer bm_id) {
        this.bm_id = bm_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
