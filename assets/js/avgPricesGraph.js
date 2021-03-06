var chart = c3.generate({
    bindto: '#chartAvgPrices',
    color: {
        pattern: ['#9D141C', '#00862d', '#050505']
    },
    data: {
        x: 'x',
        // xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//           ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],

            ['premium', 30, 200, 100, 400, 150, 250],
            ['regular', 130, 300, 200, 300, 250, 450],
            ['diesel', 130, 300, 200, 300, 250, 450],
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%m-%d'
            }
        }
    }
});
