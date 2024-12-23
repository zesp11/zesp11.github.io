# Opis Projektu

## Wstęp

Projekt **GoAdventure** ma na celu stworzenie aplikacji wieloplatformowej, która umożliwi użytkownikom tworzenie, zarządzanie i odczytywanie interaktywnych książek przygodowych (gamebook). Aplikacja będzie dostępna na urządzeniach mobilnych oraz w wersji webowej. Projekt opiera się na wykorzystaniu nowoczesnych technologii, takich jak **React** do tworzenia aplikacji webowej, **Next.js** do strony opisującej projekt, **Spring Boot** jako backend oraz **Flutter** do aplikacji mobilnej.

Projekt skupia się na bliskiej współpracy między członkami zespołu, którzy pracują nad różnymi komponentami systemu, zapewniając spójną integrację wszystkich technologii oraz ich funkcjonalności.

## Cel

Głównym celem projektu **GoAdventure** jest stworzenie skalowalnej, responsywnej i intuicyjnej aplikacji, która umożliwi użytkownikom tworzenie interaktywnych książek przygodowych, które będą mogły być czytane zarówno w aplikacji mobilnej, jak i na stronie internetowej. Zespół dąży do zapewnienia doskonałej integracji między aplikacją mobilną, stroną internetową oraz backendem.

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
