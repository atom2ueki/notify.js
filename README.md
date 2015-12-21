# notify.js
> a modern browser notification alert library
------
[![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)](https://github.com/atom2ueki/notify.js/blob/master/LICENSE)

- [Demo](http://atom2ueki.github.io/notify.js)

## Install
```js
<script src="notify.js" charset="utf-8"></script>
```

## Usage
```js
var options = {
  title: "customized title",
  dir: "rtl",
  body: "customized notification",
  timeout: 1000,
  icon: 'images/bell-icon.png',
};
var notify = new notify(options);
/* the order need use callback */
var test = notify.show();
```

### Default Options
```js
var defaults = {
  title: 'default title', // String
  dir: 'ltr', // String
  body: 'default notification', // String
  icon: 'images/bell-icon.png', // String, path to the icon image
  timeout: 2000 // int
};
```

### OnClick Event
> trigger something when click the notification
```js
notify.show('onclick', function(){
  alert("Trigger Something after click the notification");
});
```
