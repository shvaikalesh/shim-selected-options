# shim-selected-options

Tiny `HTMLSelectElement#selectedOptions` shim for IE.

* [WHATWG: HTML spec](https://html.spec.whatwg.org/multipage/form-elements.html#dom-select-selectedoptions)
* [More conformant shim with IE8 support](https://gist.github.com/brettz9/4212217)

## Up and running

Get the package from [npm](https://www.npmjs.com/package/shim-selected-options):

```sh
npm install shim-selected-options --save
```

And simply require the module:

```js
import "shim-selected-options"
```

Otherwise, plug it the old-fashioned way:

```html
<script src="https://unpkg.com/shim-selected-options" async></script>
```

## Caveats

While making spec-perfect shim is technically possible,
it requires observing DOM subtrees to implement [quirks of `HTMLCollection`](https://heycam.github.io/webidl/#LegacyUnenumerableNamedProperties),
not to mention emulating live collection. For most cases, this solution is fine.

* New object instead of [always the same](https://heycam.github.io/webidl/#SameObject)
* `NodeList` instead of `HTMLCollection`
* Static collection instead of live

See more on collections in [WHATWG DOM spec](https://dom.spec.whatwg.org/#old-style-collections).

## Examples

Straightforward for single value selects:

```diff
- let {text} = select.options[select.selectedIndex]
+ let [{text}] = select.selectedOptions
```

Precise typing for `multiple` selects:

```diff
- let opts = select.querySelectorAll(":checked")
+ let opts = select.selectedOptions
```
