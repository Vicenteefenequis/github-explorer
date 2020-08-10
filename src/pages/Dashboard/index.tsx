import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Gihub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49836207?s=460&u=3c08fe09146a381655f3cec5d37710eb78863e80&v=4"
            alt="Vicente Nascimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaçabçe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49836207?s=460&u=3c08fe09146a381655f3cec5d37710eb78863e80&v=4"
            alt="Vicente Nascimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaçabçe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49836207?s=460&u=3c08fe09146a381655f3cec5d37710eb78863e80&v=4"
            alt="Vicente Nascimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaçabçe ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
