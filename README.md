# adapt-audioSubView

Add named audio files to any Adapt content model and render a named play pause button in the handlebars.

See [example.json](https://github.com/cgkineo/adapt-audioSubView/blob/master/example.json)  
Use with [adapt_framework branch issue/#2185](https://github.com/adaptlearning/adapt_framework/tree/issue/%232185)  
[Outstanding PR](https://github.com/adaptlearning/adapt_framework/pull/2186)  

```json
  {
    "_id": "c-60",
    "_parentId": "b-40",
    "_type": "component",
    "_audio": {
      "_items": [
        {
          "_name": "header",
          "_src": "assets/audio/header.mp3"
        }
      ]
    }
  }
```


```hbs
{{subview name='audio' id='c-60' value='header'}}
```
