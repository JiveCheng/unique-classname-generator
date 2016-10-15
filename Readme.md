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
classID.create.category('bt', 'buttons'); // {}
~~~

### .create.classname( prefix, joiner, customName )

| prefix       | joiner       | customName   |
| :----------- | :----------- | :----------- |
| Type: String | Type: String | Type: String |

#### example
~~~js
classID.create.classname('bt', '_', 'exex'); // {}
~~~