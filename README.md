# AngularLafay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# todo: 
Faire le service timer 
declancher un son  => esssais sur mobile en veille (#chaud)




# Angular Core Concepts

This project shows several core features of Angular including:

* Components
* Data Binding
* Communication between components
* Services
* Routing

<a href="https://stackblitz.com/github/DanWahlin/Angular-Core-Concepts" target="_blank">Run and edit the app on Stackblitz</a>

## Running the Project Using Docker Containers

1. Install the Angular CLI

    `npm install -g @angular/cli`

1. Run `npm install`

1. Build the project

    `ng build`

1. Run `docker-compose build`

1. Run `docker-compose up`

1. Visit `http://localhost`

If you'd like to run the `production` version run `docker-compose -f docker-compose.prod.yml [build | up]`. This uses a multi-stage Docker build process to create the nginx image for the Angular app.

## Azure 
login :
az login 