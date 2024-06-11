import { useEffect, useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importe o BrowserRouter
import Ranking from './components/ranking/Ranking';
import Award from './components/awards/Award';
import ImgAlunoExemplar from "./assets/recorde.png";
import ImgAlunoPresente from "./assets/estrelas.png";
import ImgAlunoInformado from "./assets/joia.png";
import ImgAlunoSociavel from "./assets/sociavel.png";
import Store from './components/store/Store';

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

  const dataAwards = [
    {
        title: "Aluno Exemplar",
        image: ImgAlunoExemplar,
        description: "Parabéns! Você demonstrou dedicação excepcional aos estudos, sempre participando ativamente das aulas, entregando tarefas pontualmente e colaborando com colegas. Sua atitude positiva e comprometida é um exemplo brilhante para todos. Continue assim!",
        points: 1500,
    },
    {
        title: "Aluno Presente",
        image: ImgAlunoPresente,
        description: "Esta conquista é concedida ao estudante que demonstra dedicação exemplar e compromisso constante com suas aulas e atividades acadêmicas, mantendo uma presença assídua e participativa. Parabéns por sua dedicação e empenho!",
        points: 800,
    },
    {
        title: "Aluno Informado",
        image: ImgAlunoInformado,
        description: "Concedida ao estudante que está sempre atualizado e bem informado sobre todas as novidades e informações relevantes do curso. Parabéns por sua curiosidade intelectual e dedicação ao aprendizado contínuo!",
        points: 1000,
    },
    {
      title: "Super Social",
      image: ImgAlunoSociavel,
      description: "Dedicada ao aluno que se destaca pela sua habilidade em se conectar e interagir com todos ao seu redor. Parabéns por ser uma presença tão positiva e engajada na comunidade acadêmica!",
      points: 2300,
  },
];

const dataStore = [
  {
      image: "",
      title: "Voucher",
      description: "",
  },
];

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data.length > 0 ? [data[0]] : []} />} />
          <Route path="/ranking" element={<Ranking data={data} />} />
          <Route path="/awards" element={<Award data={dataAwards} />} />
          <Route path="/store" element={<Store data={dataStore} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
