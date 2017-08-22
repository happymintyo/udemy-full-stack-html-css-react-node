function makeRealPyramid(rows) {
    var margin = rows;
    for (var i = 0; i < rows; i++) {
        var pyramidLine = '';

        for (var marginLeft = 0; marginLeft < margin; marginLeft++) {
            pyramidLine += ' ';
        }
        margin--;

        for (var stars = 0; stars <= (i*2); stars++) {
            pyramidLine += '*';
        }

        console.log(pyramidLine);
    }
}

makeRealPyramid(10);