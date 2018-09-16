package br.com.dimon.usercrud.repository;

import br.com.dimon.usercrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(path = "/user",exported = true)
public interface UserRepository extends JpaRepository<User, Integer> {
}
