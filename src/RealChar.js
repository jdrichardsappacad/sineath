import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { useRef, useEffect } from 'react';
const RealChar = (props) => {
  console.log('chart', <AdvancedRealTimeChart />);
  const myRef = useRef();
  useEffect(() => {
    console.log('ref', document.body.getElementsByTagName('*'));
    console.log('ref2', document.getElementsByTagName('iframe'));
  });

  return (
    <div style={{ height: 1000 }} ref={myRef}>
      <AdvancedRealTimeChart
        width='1300'
        height='2000'
        theme={'dark'}
        autosize={true}
        symbol='KRAKEN:EURUSD'
        interval='1'
        style='1'
        timezone='Etc/UTC'
        locale='en'
        toolbar_bg='#f1f3f6'
        enable_publishing={false}
        withdateranges={true}
        hide_side_toolbar={false}
        save_image={false}
        details={true}
        can={{ myCan: 2 }}
      />
    </div>
  );
};

export default RealChar;
