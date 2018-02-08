# Su-Dropdown

Dropdown component.

### Installing

```
yarn install @sushi-ui/su-dropdown

or

npm install @sushi-ui/su-dropdown
```

### Setup

```html
<link rel="stylesheet" href="/path/@sushi-ui/su-dropdown/lib/su-dropdown.css">
<body>
<script src="/path/@sushi-ui/su-dropdown/lib/su-dropdown.js"></script>
</body>
```

or

```javascript
import '@sushi-ui/su-dropdown/lib/su-dropdown.css';
import SuDropdown from '@sushi-ui/su-dropdown';
```

### Getting started

Minimum HTML markup

```hmtl
<div class="su-Dropdown">
  <button>trigger</button>
  <div class="su-Dropdown-content"></div>
</div>
```

Create a new dropdown instance

```javascript
const el = document.querySelector('.su-Dropdown');
const dropdown = new SuDropdown(el, options);
```

### Options

| Prop                  | Type                 | Default          | Valid options                                     | Desc                                         |
| --------------------- | -------------------- | ---------------- | ------------------------------------------------- | -------------------------------------------- |
| `offsetX`             | _Number_             | **0**            | Any number                                        | -                                            |
| `offsetY`             | _Number_             | **0**            | Any number                                        | -                                            |
| `padding`             | _Number_             | **16**           | Any number                                        | Padding from boundary element                |
| `boundaries`          | _String,HTMLElement_ | **viewport**     | scrollParent, window, viewport or any DOM element |
| `placement`           | _String_             | **bottom-start** | auto, top, right, bottom, left                    | Option can also have modifier (-start, -end) |
| `closeOnClickInside`  | _Boolean_            | **false**        | true/false                                        | -                                            |
| `closeOnClickOutside` | _Boolean_            | **true**         | true/false                                        | -                                            |

offsetX: 0,
offsetY: 0,
padding: 16,
boundaries: 'viewport',
placement: 'bottom-start',
closeOnClickInside: false,
closeOnClickOutside: true

### API

#### toggle()

Show/hide dropdown

#### show()

Show dropdown

#### hide()

Hide dropdown

### Events

Dispatches from the dropdown node element

#### show

Triggers on show

#### hide

Triggers on show

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
