# Su-Dropdown

Dropdown component.

### Installing

```
yarn install @sushi-ui/su-dropdown

or

npm install @sushi-ui/su-dropdown
```

### Setup

```javascript
import '@sushi-ui/su-dropdown/lib/su-dropdown.css'
import SuDropdown from '@sushi-ui/su-dropdown'
```

or

```html
<link rel="stylesheet" href="node_modules/@sushi-ui/su-dropdown/lib/su-dropdown.css">
<script src="node_modules/@sushi-ui/su-dropdown/lib/su-dropdown.js"></script>
```

### Getting started

The `.su-Dropdown` and `.su-Dropdown-content` classes are mandatory in the markup.
The `.su-Dropdown-content` element needs to be sibling to the trigger element.
Only the trigger element and the element with class `.su-Dropdown-content` must be inside the `.su-Dropdown` wrapper element.
Feel free to style the `su-Dropdown-content` element.

Minimum HTML markup

```hmtl
<div class="su-Dropdown">
  <button>trigger</button>
  <div class="su-Dropdown-content">
    // dropdown content
  </div>
</div>
```

Create a new dropdown instance

```javascript
const el = document.querySelector('.su-Dropdown')
const dropdown = new SuDropdown(el, options)
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

### API

#### toggle()

Show/hide dropdown

#### show()

Show dropdown

#### hide()

Hide dropdown

#### destroy()

Remove all event listeneres from the dropdown component.

### Events

Dispatches from the dropdown node element

#### show

Triggers on show

#### hide

Triggers on show

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
