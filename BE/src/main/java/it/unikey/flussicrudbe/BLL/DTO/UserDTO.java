package it.unikey.flussicrudbe.BLL.DTO;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class UserDTO {
    private Integer id;
    private String firstName;
    private String lastName;
}
