package com.spring.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Jinkai on 2017/4/26.
 */
@Entity
public class Compile {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer compile_id;

    private String username;

    private String location;

    private String result;

    public Integer getCompile_id() {
        return compile_id;
    }

    public void setCompile_id(Integer compile_id) {
        this.compile_id = compile_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
