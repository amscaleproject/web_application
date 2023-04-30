# Attika-web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

После этого я добавила в него код из туториала: https://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial

## Development server

Чтобы запустить, нужно подгрузить зависимости `ng install`, а потом:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build amd run in docker container

```
docker build --file Dockerfile --tag attika/auth:v0 .
docker run -d --name attika_web -p 4200:4200 -it attika/auth:v0
docker cp attika_web:/usr/share/nginx/html .
```
Connect: `http://localhost:4200`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
