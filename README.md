# Slots

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

This project demonstrate the power of Slots.

Slot is just a placeholder inside a Web Component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

We have an Angular board.component with 'app-board' selector but we dont use it in our app.component.html file.

So how things working here!? 

We use here something called Custom Elements which is part of Web Components.

So we dont use our Angular component, we custom it as an element in dashboard.module.

## Web Components is awsome

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

The great thing is that we can register any component (Angular, React, Vue or other) with custom element and make it a Web Component.

Furthermore, we can use our new web component any where we want!

For example, we can take a Web Component which contain an Angular component and use it in React.js application

For more details how to do this you can explore this great article (divided to 3):

part1: https://medium.com/@suwigyarathore/angular-element-as-a-web-component-6e77a1e1b4a7

part2: https://medium.com/@suwigyarathore/angular-component-as-a-web-component-part-ii-a2e886b30cec

part3: https://medium.com/@suwigyarathore/angular-component-as-a-web-component-in-react-part-iii-2c704bb13343