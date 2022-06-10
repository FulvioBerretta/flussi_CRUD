package it.unikey.flussicrudbe.BLL.service;

import it.unikey.flussicrudbe.BLL.exception.NotFoundException;

import java.util.List;
import java.util.Optional;


public interface CrudService<T>  {
    T insert(T dto);
    T getById(Integer id);
    List<T> getAll(Integer index, Integer limit, String filter);
    T update( T dto);
    T delete(Integer id);
}
