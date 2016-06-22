# gitbook-plugin-style

Conveniently add inline styles with [nunjucks](https://mozilla.github.io/nunjucks/templating.html#filters)
filter syntax.

## Example

```
{{ "example text" | style("color:red") }}
```

### Output

<span style="color:red">example text</span>

# API

## style(styleString, *id=undefined*, *class=undefined*)

### Positional Arguments

#### styleString

Type: `string`

HTML inline style string

### named arguments

#### id

Type: `string`

Additional id attribute.

#### class

Type: `string`

Additional class attribute.

# License

[MIT license](https://github.com/zachary822/gitbook-plugin-style/blob/master/LICENSE)
