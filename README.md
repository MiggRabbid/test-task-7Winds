#### Задача - Создать страницу по макету в фигме.

Страница должна работать с API, получать и изменять данные.
Интерактивные поля только внутри таблицы, вне таблицы просто статика.

---

**Создание строки**
Для создания строки пользователь должен нажать на иконку существующий строки.
После этого строка отрисовывается в том месте, где она должна быть, все требуемые поля заполняются нулями (кроме заголовка, он пустой). У строки включается режим редактирования и ждёт пока пользователь не нажмёт `Enter` в одном из полей ввода, только после этого отправляйте данные на сервер.

**Создание строки**
Что бы начать редактировать строку нужно дважды нажать на неё мышкой. Тогда она переходит в режим редактирования.

**Удаление строки**
Для удаления строки пользователь должен навести на иконку существующий строки, там должны появиться дополнительные иконки. При клике на иконку мусорки строка удаляется

**Изменение данных**
При каких либо взаимодействиях (создание, обновление и удаление строки) сервер будет возвращать вам массив изменённых строк, эти данные должны актуализировать локальные данные.

**Источники данных**

- [ссылка на макет](https://www.figma.com/file/yyls8AT1soKQ3Qpfl2Y3Nz?type=design%27&node-id=0:1)
- [ссылка на API Docs](http://185.244.172.108:8081/swagger-ui/index.html?url=/openapi.json#/)

---

##### Реализация

1. Сделана вёрстка, по архитектуре близкая к FSD.
    - Использовал TailwindCss + scss.
    - Иконки MUI, и из макета (которых не было в MUI).
2. Реализована работа с API через RTK Query.
3. RTK для хранения информации о режиме редактировании и хранении данных для таблицы.

##### Текущие проблемы

1. Для корректной работы демо, нужно в настройках сайта разрешить "Небезопасный контент".
2. "Пути" от родителя до детей не всегда корректно отображаются.
3. Если создается новая строка, то отмена по "Ecs" не работает, только перезагрузка страницы. В режиме редактирования всё ок.
4. Есть вопросы в эффективности рекурсивной системы отрисовки строк таблицы.

----

##### Используемый стэк
[![TypeScript](https://img.shields.io/badge/Typescript-294E80.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat&)](https://react.dev/)
[![RTK](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=fla&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)