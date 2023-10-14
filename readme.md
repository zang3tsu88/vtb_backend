# vtb api

## Тут база отделений и терминалов, и 4 ручки к ними.

get запрос выдает все отделения и второй выдает все терминалы. Можно запросить каждый добавив его id

```
/atms/
/branches/
/atms/:id
/branches/:id
```

Пример запроса конкретного отделения по его id

```
http://localhost:3000/branches/652af8737f0126b27a11dd37
```

примечание. начата, но закоментировано подключение к базе mongoDB, вместо этого написаны контроллеры с учетом хранение базы локально и доступа к ним через fs модуль. При надобности можно переписать на запросы к базе данных.
