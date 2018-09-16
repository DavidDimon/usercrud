package br.com.dimon.usercrud.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    private String password;
    private Boolean isEnabled;
    @Temporal(TemporalType.TIMESTAMP)
    private Date registerDate;
    private String name;
    private String surname;
    private String email;
    private String phone;

    public User() {
        this.registerDate = this.registerDate == null ? new Date() : this.registerDate;
    }
}
