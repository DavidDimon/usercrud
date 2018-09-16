package br.com.dimon.usercrud.repository;

import br.com.dimon.usercrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

import static br.com.dimon.usercrud.constant.Constant.USER_BY_PARAM_QUERY;


@RepositoryRestResource(path = "/api/v1/user",exported = true)
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = USER_BY_PARAM_QUERY, nativeQuery = true)
    List<User> findByParam(String param);
}
