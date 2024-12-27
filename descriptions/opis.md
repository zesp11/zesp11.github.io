# Opis Projektu

## Wstęp

Projekt **GoAdventure** to innowacyjne rozwiązanie, które łączy miłośników przygód i gier miejskich w jednym interaktywnym systemie. Naszym celem jest stworzenie aplikacji umożliwiającej graczom odkrywanie świata poprzez wspólne tworzenie i przeżywanie interaktywnych książek przygodowych (gamebooków). Gracze mogą tworzyć zespoły, podejmować decyzje w grze, a ich działania będą wymagały fizycznego przemieszczania się po mieście przy użyciu GPS.

Projekt opiera się na nowoczesnych technologiach, takich jak **Next.js** do budowy aplikacji webowej (Gamebook Creator), **Spring Boot** jako fundament backendu oraz **Flutter** do tworzenia aplikacji mobilnej (Gamebook Explorer). Dzięki współpracy członków zespołu, wszystkie elementy systemu są spójnie zintegrowane, zapewniając graczom wyjątkowe doświadczenia.

## Cel

Głównym celem projektu **GoAdventure** jest stworzenie skalowalnego i intuicyjnego systemu, który łączy zespoły graczy poprzez wspólne poznawanie historii i eksplorację miast. Dzięki gamebookom użytkownicy mogą tworzyć własne interaktywne opowieści oraz przeżywać przygotowane historie w drużynach. Gra łączy narrację z elementami fizycznej eksploracji terenu, co pozwala na unikalne doświadczenia z wykorzystaniem GPS.

Gamebook Creator umożliwia tworzenie i edytowanie interaktywnych historii, określanie decyzji graczy, ich konsekwencji, a także lokalizacji, które gracze muszą odwiedzić w trakcie rozgrywki. Aplikacja mobilna Gamebook Explorer pozwala na odtwarzanie stworzonych historii w czasie rzeczywistym, umożliwiając zespołom dynamiczne podejmowanie decyzji i śledzenie ich postępów w grze.

#### Przykłady zastosowań
-  Gry miejskie na eventach.
- Narzędzie edukacyjne (np. historyczne opowieści interaktywne dla uczniów).
- Organizacja imprez integracyjnych czy escape roomów na świeżym powietrzu.




---

## Architektura

Projekt składa się z trzech głównych komponentów:

### 1. Aplikacja Mobilna

- **Technologia**: Flutter
- umożliwia zespołom graczy uczestniczenie w rozgrywkach w oparciu o stworzone wcześniej gamebooki.

  **Główne funkcje**:

  - Rejestracja i logowanie użytkowników
  - Dołączanie do zespołów lub tworzenie nowych
  - Przeżywanie interaktywnych przygód w czasie rzeczywistym
  - Lokalizacja zespołów na mapie za pomocą GPS
  - Dynamiczne podejmowanie decyzji w grze i ich wpływ na przebieg historii


### 2. Aplikacja webowa (Gamebook creator)

- **Technologia**: React z Next.js
- Narzędzie webowe umożliwiające użytkownikom tworzenie własnych interaktywnych książek przygodowych, które później można eksplorować za pomocą aplikacji mobilnej.

  **Główne funkcje**:
  - **Tworzenie i edycja gamebooków decyzji**  
   Narratorzy mogą projektować nieliniowe historie, w których każda decyzja graczy prowadzi do różnych rezultatów.
  - **Lokalizacja na mapie**  
   Twórcy opowieści mogą przypisywać zadania lub wydarzenia do konkretnych miejsc w mieście, które gracze muszą odwiedzić.
  - **Personalizacja historii**  
   Możliwość ustalania zasad gry, takich jak liczba graczy w drużynie, czas na wykonanie misji czy poziom trudności.
  - **Prosty i intuicyjny interfejs**  
   Przyjazny dla twórców o różnym poziomie doświadczenia.
  - **Integracja z backendem**  
   W pełni zsynchronizowana z API backendu, co umożliwia zapis i edycję historii w czasie rzeczywistym.


### 3. Backend

- **Technologia**: Java + Spring Boot + PostgreSQL
- trzon systemu, zarządzając danymi i logiką gry oraz zapewniając płynną integrację między aplikacjami mobilnymi i webowymi.

  **Główne funkcje**:

  - Obsługa API REST do zarządzania danymi książek przygodowych
  - Bezpieczne uwierzytelnianie użytkowników przy użyciu JWT
  - Obsługa bazy danych relacyjnych (PostgreSQL) do przechowywania historii, decyzji i wyników graczy
  - Synchronizacja danych między zespołami i urządzeniami

---

# Podsumowanie
Projekt **GoAdventure** oferuje wyjątkowe połączenie kreatywnej narracji, eksploracji miejskiej i współpracy zespołowej. Jego innowacyjność polega na integracji nowoczesnych technologii z fizycznym światem graczy, co czyni każdą przygodę niepowtarzalną. Dzięki Gamebook Creator twórcy mogą w łatwy sposób projektować złożone historie, a aplikacja mobilna Gamebook Explorer zapewnia graczom dynamiczne doświadczenia w terenie.
