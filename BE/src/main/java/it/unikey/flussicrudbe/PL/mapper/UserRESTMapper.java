package it.unikey.flussicrudbe.PL.mapper;

import it.unikey.flussicrudbe.BLL.DTO.UserDTO;
import it.unikey.flussicrudbe.PL.REST.UserREST;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserRESTMapper {
    UserDTO toDTO(UserREST userREST);
    UserREST toREST(UserDTO userDTO);
}
