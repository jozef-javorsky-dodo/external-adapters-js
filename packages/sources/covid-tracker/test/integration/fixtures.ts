import nock from 'nock'

export const mockResponseSuccess = (): nock =>
  nock('https://api.covidtracking.com/v1')
    .get('/us/current.json')
    .reply(
      200,
      (_, request) => [
        {
          date: 20210307,
          states: 56,
          positive: 28756489,
          negative: 74582825,
          pending: 11808,
          hospitalizedCurrently: 40199,
          hospitalizedCumulative: 776361,
          inIcuCurrently: 8134,
          inIcuCumulative: 45475,
          onVentilatorCurrently: 2802,
          onVentilatorCumulative: 4281,
          dateChecked: '2021-03-07T24:00:00Z',
          death: 515151,
          hospitalized: 776361,
          totalTestResults: 363825123,
          lastModified: '2021-03-07T24:00:00Z',
          recovered: null,
          total: 0,
          posNeg: 0,
          deathIncrease: 842,
          hospitalizedIncrease: 726,
          negativeIncrease: 131835,
          positiveIncrease: 41835,
          totalTestResultsIncrease: 1170059,
          hash: 'a80d0063822e251249fd9a44730c49cb23defd83',
        },
        {
          date: 20210306,
          states: 56,
          positive: 28714654,
          negative: 74450990,
          pending: 11783,
          hospitalizedCurrently: 41401,
          hospitalizedCumulative: 775635,
          inIcuCurrently: 8409,
          inIcuCumulative: 45453,
          onVentilatorCurrently: 2811,
          onVentilatorCumulative: 4280,
          dateChecked: '2021-03-06T24:00:00Z',
          death: 514309,
          hospitalized: 775635,
          totalTestResults: 362655064,
          lastModified: '2021-03-06T24:00:00Z',
          recovered: null,
          total: 0,
          posNeg: 0,
          deathIncrease: 1680,
          hospitalizedIncrease: 503,
          negativeIncrease: 143835,
          positiveIncrease: 60015,
          totalTestResultsIncrease: 1430992,
          hash: 'dae5e558c24adb86686bbd58c08cce5f610b8bb0',
        },
        {
          date: 20210305,
          states: 56,
          positive: 28654639,
          negative: 74307155,
          pending: 12213,
          hospitalizedCurrently: 42541,
          hospitalizedCumulative: 775132,
          inIcuCurrently: 8634,
          inIcuCumulative: 45373,
          onVentilatorCurrently: 2889,
          onVentilatorCumulative: 4275,
          dateChecked: '2021-03-05T24:00:00Z',
          death: 512629,
          hospitalized: 775132,
          totalTestResults: 361224072,
          lastModified: '2021-03-05T24:00:00Z',
          recovered: null,
          total: 0,
          posNeg: 0,
          deathIncrease: 2221,
          hospitalizedIncrease: 2781,
          negativeIncrease: 271917,
          positiveIncrease: 68787,
          totalTestResultsIncrease: 1744417,
          hash: '724844c01659d0103801c57c0f72bf8cc8ab025c',
        },
        {
          date: 20210304,
          states: 56,
          positive: 28585852,
          negative: 74035238,
          pending: 12405,
          hospitalizedCurrently: 44172,
          hospitalizedCumulative: 772351,
          inIcuCurrently: 8970,
          inIcuCumulative: 45293,
          onVentilatorCurrently: 2973,
          onVentilatorCumulative: 4267,
          dateChecked: '2021-03-04T24:00:00Z',
          death: 510408,
          hospitalized: 772351,
          totalTestResults: 359479655,
          lastModified: '2021-03-04T24:00:00Z',
          recovered: null,
          total: 0,
          posNeg: 0,
          deathIncrease: 1743,
          hospitalizedIncrease: 1530,
          negativeIncrease: 177957,
          positiveIncrease: 65487,
          totalTestResultsIncrease: 1590984,
          hash: '5c549ad30f9abf48dc5de36d20fa707014be1ff3',
        },
      ],
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
