#Unique Classname grenerator

## Install

npm install unique-classname-generator --save-dev

## Usage

~~~js
var classID = require('unique-classname-generator');
~~~

## Generate
### .create.category( prefix, description )

| prefix       | description  |
| :----------- | :----------- |
| Type: String | Type: String |

#### example
~~~js
classID.create.category('bt', 'buttons'); // { prefix: 'bt', description: 'buttons', date: '2016-10-23 00:48:05', _id: '7b1f286f28e043a2b65db4dc3c30d06c' }
~~~

### .create.classname( prefix, joiner, customName )

| prefix       | joiner       | customName   |
| :----------- | :----------- | :----------- |
| Type: String | Type: String | Type: String |

#### example
~~~js
classID.create.classname('bt', '_', 'exex'); // { classname: 'exex', prefix: 'bt', joiner: '_', _id: '0374f58ae3914219a0084abd6bc1031d' }
~~~

## Query
### .query.category()

#### example
~~~js
classID.query.category();

[
	{ "prefix": 'bt', "description": 'buttons', "date": '2016-10-23 00:48:05', "_id": '7b1f286f28e043a2b65db4dc3c30d06c' }
    ...
]
~~~

### .query.prefixList()
#### example
~~~js
classID.query.prefixList();

["bt",...]
~~~

### .query.hasPrefix(prefix)

| prefix       |
| :----------- |
| Type: String |

#### example
~~~js
classID.query.hasPrefix('bt'); // true or false
~~~


### .query.hasClassName(prefix, classname)

| prefix       | classname  |
| :----------- | :----------- |
| Type: String | Type: String |

#### example
~~~js
classID.query.hasClassName('bt', 'exex'); // true or false
~~~
