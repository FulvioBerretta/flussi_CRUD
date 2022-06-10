package it.unikey.flussicrudbe.PL.controller;

import it.unikey.flussicrudbe.BLL.DTO.UserDTO;
import it.unikey.flussicrudbe.BLL.exception.NotFoundException;
import it.unikey.flussicrudbe.BLL.service.UserServiceImpl;
import it.unikey.flussicrudbe.PL.REST.UserREST;
import it.unikey.flussicrudbe.PL.mapper.UserRESTMapper;
import lombok.AllArgsConstructor;
import org.mapstruct.ap.internal.util.Strings;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/users")

public class UserController {

    private final UserServiceImpl userService;
    private final UserRESTMapper userRESTMapper;

    @GetMapping
    public ResponseEntity<List<UserREST>> findAll(
            @RequestParam(required = false, defaultValue = "0")
            int index,
            @RequestParam(required = false, defaultValue = "100")
            int limit, //TODO: add filter by name
            @RequestParam(required = false, defaultValue = "")
            String name) {
        System.out.println("getAllUsers");
        List<UserDTO> userDTOList = userService.getAll(index, limit, name);

        List<UserREST> userRESTList = userDTOList
                .stream()
                .map(userRESTMapper::toREST)
                .collect(Collectors.toList());
        ;

        return new ResponseEntity<>(userRESTList, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    //@CrossOrigin(origins = "http://localhost:4200/get-by-id")
    public ResponseEntity<UserREST> getUserById(@PathVariable("id") Integer id) {

        try {
            UserDTO userDTO = userService.getById(id);
            UserREST userREST = userRESTMapper.toREST(userDTO);
            return new ResponseEntity<>(userREST, HttpStatus.OK);
        } catch (NotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

    @PostMapping
    public ResponseEntity<UserREST> postUser(@RequestBody UserREST user) {

        UserDTO userDTO = userService.insert(userRESTMapper.toDTO(user));
        UserREST userREST = userRESTMapper.toREST(userDTO);

        return new ResponseEntity<UserREST>(userREST, HttpStatus.CREATED);
    }

    //put method TODO: add the path variable id
    @PutMapping( )
    public ResponseEntity<UserREST> putUser(@RequestBody UserREST user) {

        try {

            UserDTO userDTO = userService.update(userRESTMapper.toDTO(user));
            UserREST userREST = userRESTMapper.toREST(userDTO);
            return new ResponseEntity<UserREST>(userREST, HttpStatus.OK);

        } catch (NotFoundException e) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //delete method
    @DeleteMapping("/{id}")
    public ResponseEntity<UserREST> deleteUser(@PathVariable("id") Integer id) {

        try {
            UserDTO userDTO = userService.delete(id);
            UserREST userREST = userRESTMapper.toREST(userDTO);
            return new ResponseEntity<UserREST>(userREST, HttpStatus.OK);
        } catch (NotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
























//    private UserRESTMapper userMapper;
//    private UserServiceImpl service;
//
//    //implementing CRUD operations
//
//    //get all users
//    @GetMapping
//    public ResponseEntity<List<UserREST>> getAllUsers() {
//        return ResponseEntity.ok(
//                service.getAll()
//                        .stream()
//                        .map(userMapper::toREST)
//                        .collect(Collectors.toList())
//        );
//    }
//
//    //get user by id
//    @GetMapping("/{id}")
//    public ResponseEntity<UserREST> getUserById(@PathVariable("id") Integer id) {
//        try {
//            UserREST userREST = userMapper.toREST(service.getById(id)).orElseThrow(() -> new NotFoundException("User with id " + id + "not found"));
//        } catch (NotFoundException e) {
//            e.printStackTrace();
//        }
//        return ResponseEntity<UserREST>(service.)
//    }
//
//    //post user
//    @PostMapping()
//    public ResponseEntity<UserREST> postUser(@RequestBody UserREST user) {
//        if (user.getId() != null)
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        UserDTO userDTO = service.insert(userMapper.toDTO(user));
//        UserREST userREST = userMapper.toREST(userDTO);
//        return new ResponseEntity<UserREST>(userREST, HttpStatus.CREATED);
//    }
//
//


