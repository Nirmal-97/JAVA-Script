DIFFERENCE BETWEEN == AND ===

==

==> In JavaScript is used for comparing two variables, but it ignores the datatype of variable,
==> Checks the equality of two operands without considering their type.

===

==> Is used for comparing two variables, but this operator also checks datatype and compares two values,
==> Compares equality of two operands with their types.

DIFFERENCE BETWEEEN forEach and map:

The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn’t return anything.

You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used. Instead, it's great for when you need to do some action with each element of the array.

On the other hand, the map method is used for creating a new array, and thus, it’s chainable. You can call a number of map operations one after the other.

The forEach method doesn’t return anything, so you can’t chain it with any other methods—it’s not chainable.

CONSOLE:

console.log();

The log() method writes (logs) a message to the console.
The log() method is useful for testing purposes.

console.dir()

The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

console.count()
The console.count() method logs the number of times that this particular call to count() has been called.

console.table()

Eg:console.table(["apple", "apple", "apple", "apple"]);
The console.table() method displays tabular data as a table.

This function takes one mandatory argument data, which must be an array or an object, and one additional optional parameter columns.

It logs data as a table. Each element in the array (or enumerable property if data is an object) will be a row in the table.

The first column in the table will be labeled (index). If data is an array, then its values will be the array indices. If data is an object, then its values will be the property names. Note that (in Firefox) console.table is limited to displaying 1000 rows (first row is the labeled index).

console.time()
The console.time() method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

console.timeLog()
The console.timeLog() method logs the current value of a timer that was previously started by calling console.time() to the console.

console.timeEnd()
The console.timeEnd() stops a timer that was previously started by calling console.time().

console.trace()
The console.trace() method outputs a stack trace to the Web console.

console.group()
The console.group() method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console.groupEnd() is called.

console.groupEnd()
The console.groupEnd() method exits the current inline group in the Web console. See Using groups in the console in the console documentation for details and examples.

console.assert()
The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
