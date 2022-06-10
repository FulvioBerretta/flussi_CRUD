package it.unikey.flussicrudbe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class GlobalCorsConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(final org.springframework.web.servlet.config.annotation.CorsRegistry registry) {

                registry.addMapping("/**") // <-- add mapping here
                    .allowedOrigins("http://localhost:4200") // <-- add allowed origins here
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // <-- add allowed methods here
                    .allowedHeaders("*") // <-- add allowed headers here, if any are required by your application (e.g. "Authorization")
                    .allowCredentials(true) // <-- set to true if allowed to send cookies
                    .maxAge(3600); // <-- set max age to 1 hour
            }
        };
    }
}


