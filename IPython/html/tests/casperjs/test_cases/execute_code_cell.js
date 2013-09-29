//
// Test code cell execution.
//
casper.notebook_test(function () {
    this.evaluate(function () {
        var cell = IPython.notebook.get_cell(0);
        cell.set_text('1+1');
        cell.execute();
    });

    this.wait(2000);

    this.then(function () {
        var result = this.evaluate(function () {
            var cell = IPython.notebook.get_cell(0);
            var output = cell.output_area.outputs[0].text;
            return output;
        })
        this.test.assertEquals(result, '2', 'stdout output matches')
    });
});
