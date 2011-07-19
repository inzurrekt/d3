require("./../lib/env-js/envjs/node");
require("./../d3");
require("./../d3.time");

function parse(string) { return new Date(string); }
function format(date) { return date.toString(); }

console.log("day:");
console.log("  2011-01-01T07:59:59Z -> " + format(d3.time.day(parse("2011-01-01T07:59:59Z"))));
console.log("  2011-01-01T08:00:00Z -> " + format(d3.time.day(parse("2011-01-01T08:00:00Z"))));
console.log("  2011-01-01T08:00:01Z -> " + format(d3.time.day(parse("2011-01-01T08:00:01Z"))));
console.log("  2011-03-13T09:00:00Z -> " + format(d3.time.day(parse("2011-03-13T09:00:00Z"))));
console.log("  2011-11-06T09:00:00Z -> " + format(d3.time.day(parse("2011-11-06T09:00:00Z"))));
console.log("");

console.log("day.utc:");
console.log("  2010-12-31T23:59:59Z -> " + format(d3.time.day.utc(parse("2010-12-31T23:59:59Z"))));
console.log("  2011-01-01T00:00:00Z -> " + format(d3.time.day.utc(parse("2011-01-01T00:00:00Z"))));
console.log("  2011-01-01T23:00:00Z -> " + format(d3.time.day.utc(parse("2011-01-01T23:00:00Z"))));
console.log("  2011-03-13T09:00:00Z -> " + format(d3.time.day.utc(parse("2011-03-13T09:00:00Z"))));
console.log("  2011-11-06T09:00:00Z -> " + format(d3.time.day.utc(parse("2011-11-06T09:00:00Z"))));
console.log("");
