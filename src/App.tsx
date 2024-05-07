import { useEffect, useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import Home from './components/home/Home';


interface MyData {
  coluna1: string;
  coluna2: string;
  coluna3: string;
  coluna4: string;
  coluna5: string;
  coluna6: string;
  coluna7: string;
  coluna8: string;
  coluna9: string;
  coluna10: string;
  coluna11: string;
}

const App = () => {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqJdaScyNqTGlzyTnoJYPX_4bzktFOf9FxNqWQ9ol6yHaKmiIqVx61eb-xM1lnPf_iEUGLHynt81hn/pub?output=csv";
  const [data, setData] = useState<MyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const textData = await response.text();
        const result: ParseResult<MyData> = Papa.parse(textData, { header: true });
        setData(result.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <>
      <Home data={data.length > 0 ? [data[0]] : []} />
    </>
  );
}

export default App;