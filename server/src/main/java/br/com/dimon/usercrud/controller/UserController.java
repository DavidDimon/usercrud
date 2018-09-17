package br.com.dimon.usercrud.controller;


import br.com.dimon.usercrud.model.User;
import br.com.dimon.usercrud.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static br.com.dimon.usercrud.constant.Constant.GENERIC_NAMES;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserRepository repository;

    @GetMapping("/api/v1/user/")
    public List<User> getUsers(){
        return repository.findAll(new Sort(Sort.Direction.DESC,"id"));
    }

    @GetMapping("/api/v1/user/{searchParam}")
    public List<User> getUsersByParam(@PathVariable("searchParam") String searchParam){
        return repository.findByParam(searchParam);
    }

    @PostMapping("/api/v1/user/generate/{countUser}")
    public List<User> generateUsers(@PathVariable("countUser") Integer countUser){
        if(countUser > 0){
            List<User> newUsers = new ArrayList();
            for(int i = 0; i < countUser; i++){
                User user = new User();
                user.setUsername(GENERIC_NAMES[this.getRandomIndex()]+i);
                user.setName(GENERIC_NAMES[this.getRandomIndex()]+i);
                user.setEmail(GENERIC_NAMES[this.getRandomIndex()]+i+"_"+GENERIC_NAMES[this.getRandomIndex()]+"@mail.com");
                newUsers.add(user);
            }
            repository.saveAll(newUsers);
        }
        return repository.findAll(new Sort(Sort.Direction.DESC,"id"));
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

    private Integer getRandomIndex(){
        Random random = new Random();
        return (random.nextInt(3 - 1 + 1) + 1) - 1;
    }
}
