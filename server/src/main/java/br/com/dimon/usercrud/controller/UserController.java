package br.com.dimon.usercrud.controller;


import br.com.dimon.usercrud.model.User;
import br.com.dimon.usercrud.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserRepository repository;

    @GetMapping("/api/v1/user/")
    public List<User> getUsers(){
        return repository.findAll(new Sort("id"));
    }

    @GetMapping("/api/v1/user/{searchParam}")
    public List<User> getUsersByParam(@PathVariable("searchParam") String searchParam){
        return repository.findByParam(searchParam);
    }

    @PostMapping("/api/v1/user/save")
    public User saveUser(@RequestBody User user) throws NullPointerException {
        if (user != null) {
            repository.save(user);
            return user;
        } else {
            throw new NullPointerException("User null");
        }

    }

    @DeleteMapping(value = "/api/v1/user/delete/{id}")
    public String deleteUser(@PathVariable("id") Integer id) throws NullPointerException {
        if (id != null) {
            repository.deleteById(id);
            return "User with id: "+id+" deleted with success!";
        } else {
            throw new NullPointerException("User id null");
        }
    }
}
