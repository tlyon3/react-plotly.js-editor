export function plotlyTraceToCustomTrace(trace) {
  if (
    trace.type === 'scatter' &&
    ['tozeroy', 'tozerox', 'tonexty', 'tonextx', 'toself', 'tonext'].includes(
      trace.fill
    )
  ) {
    return 'area';
  } else if (trace.type === 'timeseries') {
    return 'timeseries';
  } else if (
    trace.type === 'scatter' &&
    (trace.mode === 'lines' || trace.mode === 'lines+markers')
  ) {
    return 'line';
  }
  return trace.type;
}

export function traceTypeToPlotlyInitFigure(traceType) {
  switch (traceType) {
    case 'line':
      return {type: 'scatter', mode: 'lines', fill: 'none'};
    case 'scatter':
      return {type: 'scatter', mode: 'markers', fill: 'none'};
    case 'area':
      return {type: 'scatter', fill: 'tozeroy'};
    case 'ohlc':
      return {
        type: 'ohlc',
        autobinx: true,
        autobiny: true,
        decreasing: {line: {color: '#7F7F7F'}},
        increasing: {line: {color: '#17BECF'}},
      };
    case 'candlestick':
      return {
        type: 'candlestick',
        decreasing: {
          line: {color: '#7F7F7F'},
          fillcolor: 'rgba(127, 127, 127, 0.5)',
        },
        increasing: {
          line: {color: '#17BECF'},
          fillcolor: 'rgba(23, 190, 207, 0.5)',
        },
      };
    case 'box':
      return {
        type: 'box',
        boxpoints: false,
      };
    case 'timeseries':
      return {
        type: 'timeseries',
        mode: 'lines',
        autobinx: true,
        autobiny: true,
      };
    default:
      return {type: traceType};
  }
}
