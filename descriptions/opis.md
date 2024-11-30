# Opis Projektu

## Wstęp

Projekt **GoBook** ma na celu stworzenie aplikacji wieloplatformowej, która umożliwi użytkownikom tworzenie, zarządzanie i odczytywanie interaktywnych książek przygodowych (gamebook). Aplikacja będzie dostępna na urządzeniach mobilnych oraz w wersji webowej. Projekt opiera się na wykorzystaniu nowoczesnych technologii, takich jak **React** do tworzenia aplikacji webowej, **Next.js** do strony opisującej projekt, **Spring Boot** jako backend oraz **Flutter** do aplikacji mobilnej.

Projekt skupia się na bliskiej współpracy między członkami zespołu, którzy pracują nad różnymi komponentami systemu, zapewniając spójną integrację wszystkich technologii oraz ich funkcjonalności.

## Cel

Głównym celem projektu **GoBook** jest stworzenie skalowalnej, responsywnej i intuicyjnej aplikacji, która umożliwi użytkownikom tworzenie interaktywnych książek przygodowych, które będą mogły być czytane zarówno w aplikacji mobilnej, jak i na stronie internetowej. Zespół dąży do zapewnienia doskonałej integracji między aplikacją mobilną, stroną internetową oraz backendem.

---

## Architektura

Projekt wykorzystuje podejście **full-stack** i jest podzielony na trzy główne komponenty:

### 1. Aplikacja Mobilna

- **Technologia**: Flutter
- **Główne funkcje**:
  - Rejestracja i logowanie użytkowników
  - Tworzenie i edytowanie książek przygodowych
  - Odczytywanie i zarządzanie interaktywnymi książkami
  - Obsługa trybu offline i synchronizacja danych

### 2. Backend

- **Technologia**: Java + Spring Boot
- **Funkcje backendu**:
  - Obsługa API REST do zarządzania danymi książek przygodowych
  - Bezpieczne uwierzytelnianie użytkowników (JWT)
  - Obsługa bazy danych relacyjnych (PostgreSQL)
  - Synchronizacja danych między aplikacjami mobilnymi i webowymi

### 3. Strona Internetowa

- **Technologia**: React z Next.js
- **Główne funkcje**:
  - Responsywny interfejs użytkownika opisujący projekt i funkcjonalności
  - Interakcja z API backendu
  - Wsparcie dla lokalizacji i trybu ciemnego

---

## Funkcjonalności

Projekt zakłada wdrożenie poniższych funkcji:

- **Rejestracja i logowanie użytkowników**:
  - Za pomocą e-maila lub mediów społecznościowych
- **Tworzenie i zarządzanie książkami przygodowymi**:
  - Tworzenie, edytowanie, dodawanie treści i wybory w książkach przygodowych
  - Przeglądanie książek i historii użytkowników
- **Powiadomienia push**:
  - W aplikacji mobilnej
- **Obsługa wielu języków**:
  - Funkcjonalność lokalizacji (i18n) dla aplikacji webowej i mobilnej

---

## Zespół

Projekt realizuje zespół składający się z osób, które ściśle współpracują, aby zapewnić spójną integrację między komponentami aplikacji. Każdy członek zespołu odpowiada za różne obszary technologiczne i funkcjonalne projektu.

### Członkowie zespołu:

1. **Agnieszka Uznańska** - LinkedIn: [agnieszkauznanska](https://linkedin.com/in/agnieszkauznanska)
   - **Rola**: Team Leader
2. **Franciszek Szary** - GitHub: [FranciszekSzary1](https://github.com/FranciszekSzary1)
   - **Rola**: Backend (Spring)
3. **Cezary Arszyński** - GitHub: [Delfin22](https://github.com/Delfin22)
   - **Rola**: Fullstack (Spring, React)
4. **Igor Jeziorski** - GitHub: [IgoRix08](https://github.com/IgoRix08)
   - **Rola**: Frontend (React)
5. **Kamil Konarzewski** - GitHub: [K4-mil](https://github.com/K4-mil)
   - **Rola**: Backend (Spring, PostgreSql)
6. **Paweł Charysz** - GitHub: [Erdahil](https://github.com/Erdahil)
   - **Rola**: Aplikacja mobilna (Flutter)
7. **Kacper Urbański** - GitHub: [Serp-ent](https://github.com/Serp-ent)
   - **Rola**: Aplikacja mobilna (Flutter)

### Opiekun zespołu:

- **Agnieszka Uznańska** pełni rolę liderki zespołu, koordynując działania między członkami zespołu oraz dbając o integrację poszczególnych komponentów projektu.

---

## Technologie

Projekt wykorzystuje najnowsze narzędzia i technologie:

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Spring Boot, PostgreSQL, JWT
- **Aplikacja Mobilna**: Flutter
- **Testy**: Jest, Supertest, Postman
