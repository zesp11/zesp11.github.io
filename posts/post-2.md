---
title: "Backend w Javie: Tworzenie REST API z Spring Boot"
author: "Anna Nowak"
date: "2024-11-18"
tags: ["Java", "Backend Development", "Spring Boot"]
---

Java to jeden z najpopularniejszych języków programowania do budowy solidnych i skalowalnych backendów. W połączeniu z frameworkiem Spring Boot tworzenie aplikacji staje się szybkie i efektywne.

### Dlaczego Spring Boot?
Spring Boot to narzędzie, które upraszcza tworzenie aplikacji opartych na Spring Framework. Dzięki domyślnym konfiguracjom i integracji z popularnymi bibliotekami, pozwala na szybkie budowanie serwisów RESTful.

#### Kluczowe cechy Spring Boot:
1. **Prosta konfiguracja** – dzięki funkcji "start dependencies".
2. **REST API** – wbudowane wsparcie dla tworzenia API.
3. **Integracja z bazami danych** – obsługa JPA, Hibernate i innych narzędzi ORM.

### Jak zacząć?
1. Zainstaluj Java Development Kit (JDK).
2. Utwórz nowy projekt za pomocą Spring Initializr: [start.spring.io](https://start.spring.io).
3. Dodaj zależności, np.:
   - **Spring Web** – do tworzenia REST API.
   - **Spring Data JPA** – do obsługi baz danych.
   - **H2 Database** – baza danych w pamięci.

#### Przykład prostego kontrolera
```java
  import org.springframework.web.bind.annotation.GetMapping;
  import org.springframework.web.bind.annotation.RequestMapping;
  import org.springframework.web.bind.annotation.RestController;

  @RestController
  @RequestMapping("/api")
  public class HelloController {

      @GetMapping("/hello")
      public String sayHello() {
          return "Witaj w świecie Spring Boot!";
      }
  }
  ```