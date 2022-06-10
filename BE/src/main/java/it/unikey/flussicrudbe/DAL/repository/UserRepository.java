package it.unikey.flussicrudbe.DAL.repository;

import it.unikey.flussicrudbe.DAL.entity.UserEntity;
import org.mapstruct.ap.internal.util.Strings;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.function.Predicate;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    Page<UserEntity> findAll(Pageable pageable);


}
