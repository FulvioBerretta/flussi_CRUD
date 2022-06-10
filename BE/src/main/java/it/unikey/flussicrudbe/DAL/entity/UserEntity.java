package it.unikey.flussicrudbe.DAL.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@RequiredArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

}
