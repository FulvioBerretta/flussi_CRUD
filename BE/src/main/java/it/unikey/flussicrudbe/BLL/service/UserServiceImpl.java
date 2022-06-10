package it.unikey.flussicrudbe.BLL.service;

import it.unikey.flussicrudbe.BLL.DTO.UserDTO;
import it.unikey.flussicrudbe.BLL.exception.NotFoundException;
import it.unikey.flussicrudbe.BLL.mapper.UserMapper;
import it.unikey.flussicrudbe.DAL.entity.UserEntity;
import it.unikey.flussicrudbe.DAL.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.mapstruct.ap.internal.util.Strings;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements CrudService<UserDTO> {
    private UserMapper mapper;
    private UserRepository repository;

    @Override
    public UserDTO insert(UserDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    @Override
    public UserDTO getById(Integer id) {
        return mapper.toDto(
                repository.
                        findById(id)
                        .orElseThrow(() -> new NotFoundException("User not found"))
        );
    }
    //per fare la ricerca del name su tutta la collection e non solo sulla singola pagina devo farmi una chiamata alla getAll senza parametri e poi filtrare la collection
    @Override
    public List<UserDTO> getAll(Integer index, Integer limit, String name) {

        return repository.findAll(PageRequest.of(index, limit))
                .getContent()
                .stream()
                .filter(firstNameOrLastNameEqualsLowerCase(name))
                .map(mapper::toDto)
                .collect(Collectors.toList());

    }

    private Predicate<UserEntity> firstNameOrLastNameEqualsLowerCase(String name) {
        return  user -> user.getFirstName()
                        .toLowerCase()
                        .contains(name.toLowerCase()) ||

                        user.getLastName()
                        .toLowerCase()
                        .contains(name.toLowerCase()) &&

                        Strings.isNotEmpty(name);
    }


    @Override
    public UserDTO update( UserDTO dto) throws NotFoundException {
        if (!repository.findById(dto.getId()).isPresent())
            throw new NotFoundException("User not found");
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    @Override
    public UserDTO  delete(Integer id) throws NotFoundException {
        UserDTO dto = getById(id);
        if (!repository.findById(id).isPresent())
            throw new NotFoundException("User not found");
        repository.deleteById(id);
       return dto;
    }

    //existbyid
    public boolean existById(Integer id) {
        return repository.findById(id).isPresent();
    }


}
