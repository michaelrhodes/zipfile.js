var run = require('tape');
var blob = require('data-uri-to-blob');
var zipfile = require('../');

run('it works', function(test) {
  test.plan(1);

  // Normally you would get the data from an XHR or
  // an <input type="file">, but we have to be tricky
  // for this test to be portable.

  // This is just a zip file containing three empty files
  // named "file-1", "file-2", and "file-3".
  var zip = blob('data:application/zip;base64,UEsDBAoAAAAAAFOQj0QAAAAAAAAAAAAAAAAGABAAZmlsZS0xVVgMAJ3nTFOd50xT9QEUAFBLAwQKAAAAAABTkI9EAAAAAAAAAAAAAAAABgAQAGZpbGUtMlVYDACd50xTnedMU/UBFABQSwMECgAAAAAAU5CPRAAAAAAAAAAAAAAAAAYAEABmaWxlLTNVWAwAnedMU53nTFP1ARQAUEsBAhUDCgAAAAAAU5CPRAAAAAAAAAAAAAAAAAYADAAAAAAAAAAAQKSBAAAAAGZpbGUtMVVYCACd50xTnedMU1BLAQIVAwoAAAAAAFOQj0QAAAAAAAAAAAAAAAAGAAwAAAAAAAAAAECkgTQAAABmaWxlLTJVWAgAnedMU53nTFNQSwECFQMKAAAAAABTkI9EAAAAAAAAAAAAAAAABgAMAAAAAAAAAABApIFoAAAAZmlsZS0zVVgIAJ3nTFOd50xTUEsFBgAAAAADAAMAwAAAAJwAAAAAAA==');

  var expected = ['file-1', 'file-2', 'file-3'];
  var reader = new FileReader();

  reader.onload = function() {
    var archive = zipfile(this.result);
    var files = Object.keys(archive.directory);
    test.deepEqual(files.sort(), expected);
  }

  reader.readAsArrayBuffer(zip);
});
