package it.unikey.flussicrudbe.BLL.mapper;

import it.unikey.flussicrudbe.BLL.DTO.UserDTO;
import it.unikey.flussicrudbe.DAL.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserEntity toEntity(UserDTO userDto);
    UserDTO toDto(UserEntity userEntity);

}
