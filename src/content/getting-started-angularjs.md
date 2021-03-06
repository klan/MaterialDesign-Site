# AngularJS - Getting Started

In AngularJS you will want to use a method that cleanly inserts SVG inline.

## SVG

Learn more about [SVG](./svg).

## Standalone Directive

Example here for the directive.

## Angular Material

The `mdi.svg` file contains all the icons provided on the site. Use inline with $mdIconProvider.

```js
app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('my/app/mdi.svg')
});
```

```html
<md-icon md-svg-icon="android"></md-icon>
<md-button aria-label="Android" class="md-icon-button">
    <md-icon md-svg-icon="android"></md-icon>
</md-button>
```
