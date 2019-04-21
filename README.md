# Slots

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

This is project demonstrate the power of Slots.
Slot is just a placeholder inside a Web Component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

We have an Angular board.component with 'app-board' selector. 
But we dont use it in our app.component.html file.
So how things working here!? 
We use here something called Custom Elements which is part of Web Components... 

So we dont use our Angular component, we custom it as an element in dashboard.module.